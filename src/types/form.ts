export type Comment = {
  name: string;
  email: string;
  comment: string;
};

export type CommentError = {
  name?: boolean;
  email?: boolean;
  comment?: boolean;
};
