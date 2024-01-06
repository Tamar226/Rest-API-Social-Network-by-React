import React from 'react'
export default function Post({id, title}){
  return (
    <div className='post'>
      <h5>{id}</h5>
      <h4>{title}</h4>
      <input type='color'/>
      <button>🗑️</button>
    </div>
  )
}