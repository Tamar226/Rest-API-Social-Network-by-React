import React from 'react'

function Picture({picture}){
  return (
    <div>
        <img src={picture.url} alt={picture.title}/>
        <h4>{picture.title}</h4>
    </div>
  )
}

export default Picture