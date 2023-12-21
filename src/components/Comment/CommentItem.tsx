import { CommentProps } from "./Comment.props";

const Comment: React.FC<CommentProps> = ({ from_id, text }) => {
  return (
    <div className="bg-gray-800 p-4 rounded shadow mb-4 text-white">
      <div className="flex items-center mb-2">
        <div>
          <a href={`https://vk.com/id${from_id}`}>
            <p className="font-bold">{`User ${from_id}`}</p>
          </a>
        </div>
      </div>
      <p className="text-gray-300">{text}</p>
    </div>
  );
};

export default Comment;
