import React, {useEffect, useState,useParams} from 'react'
import AlbumTitle from './AlbumTitle';

export default function Albums(){
  const {id} = useParams();
  const [albums	, setAlbums] = useState([]);
  useEffect(() => {
    fetch(`localhost:3000/albums?userId=${id}`)
    .then(response => response.json())
    .then(json => {
      setAlbums(json);
    })
  }, []);
  return (
    <div className='albums'>
      <h1>Albums</h1>
     { albums.forEach(album => {
        <AlbumTitle album={album}/>
      })}
    </div>
  )
}

