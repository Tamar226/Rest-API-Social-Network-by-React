import React from 'react'

function AlbumTitle ({album}) {
  console.log(album);
  return (
    <div>
        <h1>{album.id}</h1>
        <h2>{album.title}</h2>
    </div>
  )
}

export default AlbumTitle