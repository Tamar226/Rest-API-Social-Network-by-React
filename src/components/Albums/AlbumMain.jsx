import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Picture from './Picture';
import { useState } from 'react';

function AlbumMain(){
    const {albumId} = useParams();
    const [pictures, setPictures] = useState([]);
    const [album, setAlbum] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/photos/?albumId=${albumId}`)
        .then(response => response.json())
        .then(json => {
            setPictures(json);
        });
        fetch(`http://localhost:3000/albums/${albumId}`)
        .then(response => response.json())
        .then(json => {
            setAlbum(json);
        });
    }, []);
  return (
    <div>
        <h1>{album.title}</h1>
        {pictures.map(picture =>
            <Picture picture={picture} key={picture.id}/>
        )}
    </div>
  )
}

export default AlbumMain