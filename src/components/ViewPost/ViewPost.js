import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteComment, loadComments } from "../../state/action-creator";
import Comment from "../Comment/Comment";

function ViewPost() {
  const [comments, setComments] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();
  const reduxCommentData = useSelector(
    (state) => state.commentsReducers.commentList
  );

  const handelDelete = (commentId) => {
    dispatch(deleteComment(commentId));
  };

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`
      )
      .then((res) => {
        setComments(res.data);
        dispatch(loadComments(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <h4 className="mt-4">All Comments</h4>
      <h4>PostId: {params.postId} </h4>
      <h6 className="mb-4 text-primary">
        Total Comments: {reduxCommentData.length}
      </h6>
      {reduxCommentData.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          handelDelete={handelDelete}
        ></Comment>
      ))}
    </Container>
  );
}

export default ViewPost;
