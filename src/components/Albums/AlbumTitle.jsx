import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import './AlbumsStyle.css'

function AlbumTitle ({album}) {
  const {id} = useParams();
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/${id}/albums/${album.id}`)}>
        <h1>{album.id}</h1>
        <h2>{album.title}</h2>
    </div>
  )
}

export default AlbumTitle