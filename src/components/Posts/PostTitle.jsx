import React from 'react'
import { Link, useParams } from 'react-router-dom'
export default function PostTitle({postId, title}){
  const {id} = useParams();
  return (
    <Link to={`/${id}/posts/${postId}`}
     className='postTitle'>
      <h5>{postId}</h5>
      <h4>{title}</h4>
    </Link>
  )
}