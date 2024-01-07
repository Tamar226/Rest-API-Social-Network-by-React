import React from 'react'
import Todo from './Todo'

export default function Todos(){
  return (
    <div className='todoList'>
      <Todo todoId={1}/>
      <Todo todoId={2}/>
    </div>
  )
}