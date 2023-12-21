"use client";
import CommentsList from "@/components/CommentsList/CommentsList";
import getComments from "@/actions/getComments";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { CommentProps } from "@/components/Comment/Comment.props";

export default function CommentsPage() {
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const handleFormSubmit = async (form: FormData) => {
    setLoading(true);
    const { comments: thisComments, error: thisError } = await getComments(
      form
    );
    setLoading(false);

    if (thisError) {
      setError(thisError);
      setComments([]);
      return;
    }

    setError(undefined);
    setComments(thisComments || []);
  };

  return (
    <>
      <form action={handleFormSubmit}>
        <div className="flex items-center space-x-4 ">
          <Input
            label_title="Ссылка"
            name="link"
            className="flex-grow"
            placeholder="https://vk.com/feed?w=wall..."
          />
          <div className="mt-auto">
            <Button type="submit" className="mt-auto">
              Получить комментарии
            </Button>
          </div>
        </div>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && comments.length === 0 && (
        <p>No comments available</p>
      )}
      {!loading && !error && comments.length > 0 && (
        <CommentsList comments={comments} />
      )}
    </>
  );
}
