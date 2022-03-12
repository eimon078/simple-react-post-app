import React from 'react'
import { useParams } from 'react-router-dom'

function ViewPost() {

  const params = useParams();  
  console.log("view post")
  return (
    <div>
        User PostId {params.postId}
    </div>
  )
}

export default ViewPost