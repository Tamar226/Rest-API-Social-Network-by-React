import React from 'react'

function Picture({picture}){
  return (
    <div className='photo'>
        <img src={picture.thumbnailUrl} alt={picture.title}/>
        <h4>{picture.title}</h4>
    </div>
  )
}

export default Picture