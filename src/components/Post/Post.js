import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Post = ({post}) => {
  const {title,body,id} = post;
  const navigate = useNavigate();
  return (
    // <div>{post.title}</div>
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className='text-capitalize'>{title}</Card.Title>
          <Card.Text>
          {body[0].toUpperCase() + body.slice(1)}
          </Card.Text>
          <Button variant="primary" onClick={()=> navigate(`/posts/${id}`)} >View Details</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Post