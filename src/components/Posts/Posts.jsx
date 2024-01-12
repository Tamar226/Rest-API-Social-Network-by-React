import React, { useEffect, useState } from 'react'
import './postsStyle.css'
import PostTitle from './PostTitle'
import { useParams } from 'react-router-dom'
export default function Posts() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function loadPosts() {
      fetch(`http://localhost:3000/posts/?userId=${id}`)
      .then(re => re.json())
      .then(data => setPosts(data))
      .catch(e => console.log(e))
    }
    loadPosts();
  }, []);
  return (
    <div className='posts'>
      {posts.map(p =>
        <PostTitle postId={p.id} title={p.title} key={p.id}/>
      )}
    </div>
  )
}