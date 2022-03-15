export const loadComments = (comments) => {
  return {
    type: "loadComments",
    payload: comments,
  };
};

export const deleteComment = (commentId) => {
  return {
    type: "deleteComment",
    payload: commentId,
  };
};
