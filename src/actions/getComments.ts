"use server";

import { CommentProps } from "@/components/Comment/Comment.props";

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const COUNT = 10;
const DELAY_MS = 1000;
const VERSION = "5.95";
const OFFSET = 0;

const getComments = async (
  form: FormData
): Promise<{
  comments: CommentProps[] | undefined;
  error: string | undefined;
}> => {
  try {
    const link = String(form.get("link"));
    const linkData = extractOwnerAndPostIDs(link);

    if (!link.startsWith("https://vk.com/") && !link.startsWith("vk.com/")) {
      return {
        comments: undefined,
        error: `Wrong Link`,
      };
    }

    if (!linkData) {
      return { comments: undefined, error: "Invalid link format" };
    }

    const [POST_ID, OWNER_ID] = linkData;
    const URL = `https://api.vk.com/method/wall.getComments?access_token=${ACCESS_TOKEN}&v=${VERSION}&owner_id=${OWNER_ID}&post_id=${POST_ID}&count=${COUNT}&offset=${OFFSET}`;
    const response = await fetch(URL);

    if (!response.ok) {
      return {
        comments: undefined,
        error: `Failed to fetch comments. Status: ${response.status}`,
      };
    }

    const data = await response.json();
    const comments = data.response?.items || [];
    return { comments, error: undefined };
  } catch (error) {
    return { comments: undefined, error: "Error fetching comments" };
  }
};

const getCommentsCount = async (url: string): Promise<number | undefined> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return undefined;
    }

    const data = await response.json();
    const commentsCount = data?.response?.count;

    if (commentsCount !== undefined) {
      return commentsCount;
    } else {
      return undefined;
    }
  } catch (error) {
    return undefined;
  }
};

export default getComments;

function extractOwnerAndPostIDs(url: string): [number, number] | null {
  try {
    const match = url.match(/wall(-?\d+)_(\d+)/);

    if (match) {
      const ownerID = Number(match[1]);
      const postID = Number(match[2]);

      return [postID, ownerID];
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
