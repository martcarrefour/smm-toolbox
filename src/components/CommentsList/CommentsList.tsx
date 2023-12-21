import { CommentsListProps } from "./CommentList.props";
import Comment from "../Comment/CommentItem";

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => (
  <ul className="mt-5">
    {comments.map((comment) => (
      <Comment key={comment.id} {...comment}></Comment>
    ))}
  </ul>
);

export default CommentsList;
