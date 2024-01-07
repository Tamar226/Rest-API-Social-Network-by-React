import React, { useEffect, useState } from 'react'
import './todosStyle.css'
import TodoEdit from './TodoEdit';

export default function Todo({ todoId }) {
  const [todo, setTodo] = useState({});
  const [showUpdate, setShowUpdate] = useState(false);

  useEffect(() => {
    function getTodo() {
      const url = `http://localhost:3000/todos/${todoId}`;
      console.log(url);
      fetch(url)
        .then(response => response.json())
        .then(json => {
          setTodo(json);
        }).catch(error => {
          console.log(error);
        })
    };
    getTodo();
  }, [showUpdate]);
  return (
    <div className='todo'>
      <input type="checkbox" />
      <h6>{todo.id}</h6>
      <p>{todo.title}</p>
      {showUpdate && <TodoEdit todo={todo} setShowEdit={setShowUpdate}/>}
      <button onClick={()=>setShowUpdate(true)}>✒️</button>
      <button>🗑️</button>
    </div>
  )
}