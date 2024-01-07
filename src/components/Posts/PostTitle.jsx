import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import PostMain from './PostMain';
export default function PostTitle({postId, title}){
  const {id} = useParams();
  return (
    <NavLink to={`/${id}/posts/${postId}`}
     className='postTitle'>
      <h5>{postId}</h5>
      <h4>{title}</h4>
    </NavLink>
  )
}