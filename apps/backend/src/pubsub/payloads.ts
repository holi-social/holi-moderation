export type UserBannedPayload = {
  userId: string;
  reason?: string;
};

export type PostDeletedPayload = {
  postId: string;
  userId: string;
  reason?: string;
};
