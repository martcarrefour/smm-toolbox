"use client";
import CommentsList from "@/components/CommentsList/CommentsList";
import getComments from "@/actions/getComments";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { CommentProps } from "@/components/Comment/Comment.props";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import getCommentsCount from "@/helpers/vk/getCommentsCount";

interface User {
  name?: string | null | undefined;
  image?: string | null | undefined;
  vk_token?: string | null | undefined;
}

export default function CommentsPage() {
  const { data: session } = useSession();
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [commentsCount, setCommentsCount] = useState<number>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    console.log("Comments or error has changed:", { comments, error });
  }, [comments, error]);

  const handleFormSubmit = async (form: FormData) => {
    setError(undefined);
    setLoading(true);
    const user: User | undefined = session?.user;

    if (!user?.vk_token) {
      setLoading(false);
      setError("User not authenticated");
      return;
    }
    const { comments, error, count } = await getComments(form, user.vk_token);

    setLoading(false);

    if (error) {
      setError(error);
      setComments([]);
      return;
    }

    setCommentsCount(count);
    setComments(comments || []);
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
        {loading && <p>Загрузка...</p>}
        {error && <p className="text-red-400">Ошибка: {error}</p>}
        {!loading && !error && comments.length > 0 && (
          <>
            <div>Всего комментариев: {commentsCount}</div>
            <CommentsList comments={comments} />
          </>
        )}
      </div>
    </>
  );
}
