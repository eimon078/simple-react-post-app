import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import Post from '../Post/Post';

const Posts = () => {

  const [posts, setPosts] = useState([]);


  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=> setPosts(res.data))
    .catch(error=>{
      console.log(error);
    })
  },[])

  return (
    <Container>
      <h3 className='mt-4'>All Available Post</h3>
      <h6 className='mb-4 text-primary'>Total posts {posts.length}</h6>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {
          posts.map(post=> <Post
            key={post.id}
            post={post}
          ></Post>)
        }
      </Row>
    </Container>
  )
}

export default Posts