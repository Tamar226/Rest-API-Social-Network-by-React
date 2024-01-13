import React, { useEffect, useState } from 'react'
import './postsStyle.css'
import PostTitle from './PostTitle'
import AddPost from './AddPost'
import { useParams } from 'react-router-dom'

export default function Posts() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);  
  const [search, setSearch] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);

  function handleSearch() {
    fetch(`http://localhost:3000/posts/?userId=${id}`)
      .then(response => response.json())
      .then(json => {
        setPosts(json);
      }).catch(error => {
        console.log(error);
      });
  };

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
      <button className='addTodoButton' onClick={() => setShowAdd(true)}>+</button>
      {showAdd && <AddPost setShowAdd={setShowAdd} setPosts={setPosts} />}
       <input type="search" className='searchPost' placeholder='search...'
        onChange={e => setSearch(e.target.value)} value={search} onSubmit={handleSearch} />
      <button type="submit" className='searchButton' onClick={handleSearch}>🔍</button>
      {posts.map(p =>
        <PostTitle postId={p.id} title={p.title} key={p.id}/>
      )}
      {/* <button onClick={() => setCurrentPage(p => p + 1)}>⬅️</button><button onClick={() => setCurrentPage(p => p == 1 ? 1 : p - 1)}>➡️</button> */}
    </div>
  )
}