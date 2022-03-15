const initaialState = {
  commentList: [],
};

const commentsReducrs = (state = initaialState, action) => {
  switch (action.type) {
    case "loadComments":
      return {
        ...state,
        commentList: [...action.payload],
      };

    case "deleteComment":
      const newCommentList = state.commentList.filter(
        (comment) => comment.id != action.payload
      );
      return {
        ...state,
        commentList: [...newCommentList],
      };
    default:
      return state;
  }
};

export default commentsReducrs;
