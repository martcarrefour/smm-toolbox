"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Form from "@/components/Form/Form";
import CommentsList from "@/components/CommentsList/CommentsList";
import getComments from "@/actions/getComments";
import { CommentProps } from "@/components/Comment/Comment.props";
import Loading from "./loading";

interface User {
  name?: string | null | undefined;
  image?: string | null | undefined;
  vk_token?: string | null | undefined;
}

const CommentsPage: React.FC = () => {
  const { data: session } = useSession();
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); // Добавлено состояние для ошибки

  const handleFormSubmit = async (form: FormData) => {
    const user: User | undefined = session?.user;

    setError(null);

    if (!user?.vk_token) {
      setError("User not authenticated");
      return;
    }

    try {
      setLoading(true);
      const {
        comments: newComments,
        error: commentsError,
        count,
      } = await getComments(form, user.vk_token);

      if (commentsError) {
        setError(commentsError);
        setComments([]);
      } else {
        setComments(newComments || []);
        setError(null);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching comments:", error);
      setError("Error fetching comments");
      setLoading(false);
    }
  };

  const formFields = [
    {
      label: "Ссылка",
      name: "link",
      placeholder: "https://vk.com/feed?w=wall...",
    },
  ];

  return (
    <div className="max-w-screen-xl">
      <Form
        fields={formFields}
        onSubmit={handleFormSubmit}
        submitButtonText="Получить комментарии"
        className="flex justify-between"
        error={error}
      />

      {loading && <Loading />}

      <CommentsList className="mt-8" comments={comments} />
    </div>
  );
};

export default CommentsPage;
