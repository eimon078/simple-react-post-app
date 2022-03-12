import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Post = ({post}) => {
  const {title,body,id} = post;
  const navigate = useNavigate();
  return (
    // <div>{post.title}</div>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title className='text-capitalize'>{title.slice(0,20)}...</Card.Title>
          <Card.Text>
          {body[0].toUpperCase() + body.slice(1,120)}...
          </Card.Text>
          <Button variant="primary" onClick={()=> navigate(`/posts/${id}`)} >View Details</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Post