import { type DetailedHTMLProps, type HTMLAttributes } from "react";

export interface Thread {
  count: number;
  items: any[];
  can_post: boolean;
  show_reply_button: boolean;
  groups_can_post: boolean;
}

export interface CommentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
  from_id: number;
  date: number;
  text: string;
  post_id: number;
  owner_id: number;
  parents_stack: any[];
  thread: Thread | undefined;
}
