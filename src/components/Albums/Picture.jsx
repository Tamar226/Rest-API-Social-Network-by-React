import React ,{useState}from 'react'
import { useParams } from 'react-router-dom'
import PictureEdit from './PictureEdit';

function Picture({ picture,setPictures }) {
  const [showUpdate, setShowUpdate] = useState(false);

  function handleDelete() {
    fetch(`http://localhost:3000/photos/${picture.id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
      })
      setPictures(pictures => pictures.filter(picture1 => picture1.id !== picture.id));

  }
  return (
    <div className='photo'>
      <img src={picture.thumbnailUrl} alt={picture.title} />
      <h4>{picture.title}</h4>
      {showUpdate && <PictureEdit picture={picture} setShowEdit={setShowUpdate} />}
      <button onClick={() => setShowUpdate(true)}>✒️</button>
      <button onClick={handleDelete}>🗑️</button>
    </div>
  )
}

export default Picture