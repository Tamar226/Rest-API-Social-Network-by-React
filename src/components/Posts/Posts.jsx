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
  const [currentPage, setCurrentPage] = useState(1);

  function handleSearch() {
    fetch(`http://localhost:3000/posts/?&userId=${id}`)
      .then(response => response.json())
      .then(json => {
        setPosts(json);
        if (json.length == 0) {
          setCurrentPage(1);
      }
      }).catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    async function loadPosts() {
      fetch(`http://localhost:3000/posts?_page=${currentPage}&_limit=6&userId=${id}`)
      .then(re => re.json())
      .then(data => setPosts(data))
      .catch(e => console.log(e))
    }
    loadPosts();
  }, [currentPage]);

  function handleKindChoice(e) {
    if (e.target.innerText === 'All Posts') {
      fetch(`http://localhost:3000/posts`)
      .then(re => re.json())
      .then(data => setPosts(data))
      .catch(e => console.log(e));
      e.target.classList.add('kindOfPosts');
      e.target.nextElementSibling.classList.remove('kindOfPosts');
    } else if (e.target.innerText === 'My Posts') {
      fetch(`http://localhost:3000/posts/?userId=${id}`)
      .then(re => re.json())
      .then(data => setPosts(data))
      .catch(e => console.log(e));
      e.target.classList.add('kindOfPosts');
      e.target.previousElementSibling.classList.remove('kindOfPosts');
    }
  }

  return (
    <>
      <div className='postsKind'>
        <h2 onClick={handleKindChoice}>All Posts🤨</h2>
        <h2 onClick={handleKindChoice} className='kindOfPosts'>My Posts🤗</h2>
      </div>
      <button className='addPostButton' onClick={() => setShowAdd(true)}>+</button>
      {showAdd && <AddPost setShowAdd={setShowAdd} setPosts={setPosts} />}
       <input type="search" className='searchPost' placeholder='search...'
        onChange={e => setSearch(e.target.value)} value={search} onSubmit={handleSearch} />
      <button type="submit" className='searchButton' onClick={handleSearch}>🔍</button>
      <div className='posts'>
      {posts.map(p =>
        <PostTitle post={p} key={p.id}/>
      )} </div>
      <button onClick={() => setCurrentPage(p => p + 1)}>⬅️</button>
      <button onClick={() => setCurrentPage(p => p == 1 ? 1 : p - 1)}>➡️</button>
   
    </>
  )
}