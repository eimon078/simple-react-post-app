import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Comment from '../Comment/Comment';

function ViewPost() {
  const [comments,setComments]=useState([]);
  const params = useParams();  

  useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`)
      .then(res=> setComments(res.data))
      .catch(error=>{
          console.log(error);
      })
  },[])

  return (
    <Container>
        <h4 className='mt-4'>All Comments</h4>
        <h4>PostId: {params.postId} </h4>
        <h6 className='mb-4 text-primary'>Total Comments: {comments.length}</h6>
        {
            comments.map(comment=> <Comment
                key={comment.id}
                comment={comment}
            ></Comment>)
        }
    </Container>
  )
}

export default ViewPost