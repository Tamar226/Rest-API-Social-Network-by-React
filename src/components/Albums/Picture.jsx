import React ,{useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'
import PictureEdit from './PictureEdit';
import './AlbumsStyle.css'
function Picture({ picture,setPictures }) {
  const [showUpdate, setShowUpdate] = useState(false);
  const [thisPicture, setThisPicture] = useState(picture);

    useEffect(() => {
    fetch(`http://localhost:3000/photos/${picture.id}`)
      .then(response => response.json())
      .then(json => {
        setThisPicture(json);
      })
      .catch(e => console.log(e))
    }, [showUpdate]);

  function handleDelete() {
    fetch(`http://localhost:3000/photos/${thisPicture.id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
      })
      setPictures(pictures => pictures.filter(picture1 => picture1.id !== thisPicture.id));
  }
  return (
    <div className='photo'>
      <img src={thisPicture.thumbnailUrl} alt={thisPicture.title} />
      <h4>{thisPicture.title}</h4>
      {showUpdate && <PictureEdit picture={thisPicture} setShowEdit={setShowUpdate} />}
      <button onClick={() => setShowUpdate(true)}>✒️</button>
      <button onClick={handleDelete}>🗑️</button>
    </div>
  )
}

export default Picture