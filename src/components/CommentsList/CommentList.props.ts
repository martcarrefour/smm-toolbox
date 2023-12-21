import { type DetailedHTMLProps, type HTMLAttributes } from "react";
import { CommentProps } from "../Comment/Comment.props";

export interface CommentsListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  comments: CommentProps[];
}
