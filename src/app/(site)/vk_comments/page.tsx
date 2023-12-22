"use client";
import CommentsList from "@/components/CommentsList/CommentsList";
import getComments from "@/actions/getComments";
import { useState } from "react";
import { Button } from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { CommentProps } from "@/components/Comment/Comment.props";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";

interface User {
  name?: string | null | undefined;
  image?: string | null | undefined;
  vk_token?: string | null | undefined;
}

// Интерфейс для типизации объекта session

export default function CommentsPage() {
  const { data: session } = useSession();
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const handleFormSubmit = async (form: FormData) => {
    setLoading(true);
    const user: User | undefined = session?.user;

    if (user?.vk_token) {
      const { comments: thisComments, error: thisError } = await getComments(
        form,
        user.vk_token
      );

      setLoading(false);

      if (thisError) {
        setError(thisError);
        setComments([]);
        return;
      }

      setComments(thisComments || []);
    } else {
      setLoading(false);
      setError("User not authenticated");
    }
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
      <div className="mt-3">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-400">Error: {error}</p>}
        {!loading && !error && comments.length > 0 && (
          <CommentsList comments={comments} />
        )}
      </div>
    </>
  );
}
