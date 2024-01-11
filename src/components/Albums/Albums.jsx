import React, { useEffect, useState } from 'react'
import AlbumTitle from './AlbumTitle';
import { useParams } from 'react-router-dom'

export default function Albums() {
  const { id } = useParams();
  const [albums, setAlbums] = useState([]);
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
  return (
    <div className='albums'>
      <h1>Albums</h1>
      {albums.map(album => {
        <AlbumTitle album={album} />
      })}
    </div>
  )
}

