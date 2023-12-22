"use server";

import { CommentProps } from "@/components/Comment/Comment.props";
import getCommentsCount from "@/helpers/vk/getCommentsCount";
import getOwnerAndPorsId from "@/helpers/vk/getOwnerAndPorsId";

const COUNT = 10;
const DELAY_MS = 1000;
const VERSION = "5.95";
const OFFSET = 0;

const getComments = async (
  form: FormData,
  VK_TOKEN: string
): Promise<{
  comments: CommentProps[] | undefined;
  error: string | undefined;
  count?: number;
}> => {
  try {
    const link = String(form.get("link"));
    const linkData = getOwnerAndPorsId(link);

    if (!link.startsWith("https://vk.com/") && !link.startsWith("vk.com/")) {
      return {
        comments: undefined,
        error: "Ссылка должна начинаться с `vk.com/ `",
      };
    }

    if (!linkData) {
      return { comments: undefined, error: "Некорректная ссылка" };
    }

    const [POST_ID, OWNER_ID] = linkData;
    const URL = `https://api.vk.com/method/wall.getComments?access_token=${VK_TOKEN}&v=${VERSION}&owner_id=${OWNER_ID}&post_id=${POST_ID}&count=${COUNT}&offset=${OFFSET}`;
    const response = await fetch(URL);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (!response.ok) {
      return {
        comments: undefined,
        error: `Ошибка в получении коммнетариев. Код ошибки: ${response.status}`,
      };
    }

    const data = await response.json();

    if (data.error) {
      console.log(data);
      return {
        comments: undefined,
        error: `${data.error.error_msg}. Код ошибки: ${data.error.error_code}`,
      };
    }

    const comments = data.response?.items || [];
    const count = data.response?.count;
    return { comments, error: undefined, count };
  } catch (error) {
    return { comments: undefined, error: "Ошибка в получении коммнетариев" };
  }
};

export default getComments;
