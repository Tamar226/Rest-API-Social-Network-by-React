import React from 'react'
import Post from "./Post"
import './postsStyle.css'
export default function Posts(){
  return (
    <div className='posts'>
      <Post id={5} title="yakkov tzvi is awosome!:)"/>
    </div>
  )
}