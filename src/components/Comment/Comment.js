import { Button } from "react-bootstrap";
import React from "react";
import avater_pic from "../../images/avater.png";
const Comment = ({ comment, handelDelete }) => {
  const { body, name, email, id } = comment;

  return (
    <div className="m-2 p-4 border ">
      <h5 className="text-capitalize">{name}</h5>
      <div className="d-flex gap-2 pb-2">
        <img
          className="rounded-circle"
          style={{ width: "30px", height: "30px" }}
          src={avater_pic}
          alt="profile_pic"
        />
        <p className="text-primary">{email}</p>
      </div>
      <p className="fs-6">{body[0].toUpperCase() + body.slice(1)}</p>
      <Button variant="danger" size="sm" onClick={() => handelDelete(id)}>
        Delete Comment
      </Button>
    </div>
  );
};

export default Comment;
