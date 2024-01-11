import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import { useParams } from 'react-router-dom';

export default function Todos(){
  const [todos, setTodos] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [search, setSearch] = useState('');
  const {id} = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/todos/?userId=${id}`)
      .then(response => response.json())
      .then(json => {
        setTodos(json);
      }).catch(error => {
        console.log(error);
      });
  }, []);

  function handleSearch(){
    fetch(`http://localhost:3000/todos/?userId=${id}&q=${search}`)
      .then(response => response.json())
      .then(json => {
        setTodos(json);
      }).catch(error => {
        console.log(error);
      });
  };

  return (
    <div className='todoList'>
      <button className='addTodoButton' onClick={()=>setShowAdd(true)}>+</button>
      <input type="search" className='searchTodo' placeholder='search...'
      onChange={e=> setSearch(e.target.value)} value={search} onSubmit={handleSearch}/>
      <button type="submit" className='searchButton' onClick={handleSearch}>🔍</button>
      {todos.map(todo => <Todo key={todo.id} todoId={todo.id} setTodos={setTodos} />)}
    </div>
  )
}