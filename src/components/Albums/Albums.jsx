import React, { useEffect, useState } from 'react'
import AlbumTitle from './AlbumTitle';
import { useParams } from 'react-router-dom'
import './AlbumsStyle.css'

export default function Albums() {
  const { id } = useParams();
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    function loadPhotos() {
      fetch(`http://localhost:3000/albums/?userId=${id}`)
        .then(response => response.json())
        .then(json => {
          setAlbums(json);
        })
        .catch(e => console.log(e))
    }
    loadPhotos();
  }, []);
  function handleSearch() {
    fetch(`http://localhost:3000/albums?q=${search}`)
      .then(response => response.json())
      .then(json => {
        setPosts(json);
      }).catch(error => {
        console.log(error);
      });
    const searchValue = search.toLowerCase();
    const filteredAlbums = albums.filter(album => {
      return (
        album.id.toString().includes(searchValue) ||
        album.title.toLowerCase().includes(searchValue)
      );
    });

    setAlbums(filteredAlbums);
  }
  return (
    <div className='albums'>
      <h1 className='titelh1'>Albums</h1>
      <input
        type="search"
        className='searchPost'
        placeholder='Search...'
        onChange={e => setSearch(e.target.value)}
        value={search}
      />
      <button type="submit" className='searchButton' onClick={handleSearch}>🔍</button>
      <div className='album'>
        {albums.map(album =>
          <AlbumTitle album={album} key={album.id} />
        )}</div>
    </div>
  )
}

