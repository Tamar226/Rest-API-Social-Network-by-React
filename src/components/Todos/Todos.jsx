import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import { useParams } from 'react-router-dom';
import AddTodo from './AddTodo';

export default function Todos(){
  const [todos, setTodos] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [search, setSearch] = useState('');
  const [selection, setSelection] = useState('serial');
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

  useEffect(()=>{
    let sortedTodos = [...todos]; // Create a copy of the array

    if (selection === 'serial') {
      sortedTodos.sort((a, b) => a.id - b.id);
    } else if (selection === 'alphabedacil') {
      sortedTodos.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selection === 'random') {
      sortedTodos.sort(() => Math.random() - 0.5);
    } else if (selection === 'completed') {
      sortedTodos.sort((a, b) => a.completed - b.completed);
    }

    setTodos(sortedTodos);
  }, [selection, setTodos]);

  return (
    <div className='todoList'>
      <button className='addTodoButton' onClick={()=>setShowAdd(true)}>+</button>
      {showAdd && <AddTodo setShowAdd={setShowAdd} setTodos={setTodos}/> }
      <input type="search" className='searchTodo' placeholder='search...'
      onChange={e=> setSearch(e.target.value)} value={search} onSubmit={handleSearch}/>
      <button type="submit" className='searchButton' onClick={handleSearch}>🔍</button>
      <select className='selectTodo' value={selection} onChange={e=>setSelection(e.target.value)}>
        <option value="serial">serial</option>
        <option value="alphabedacil">alphabedacil</option>
        <option value="random">random</option>
        <option value="completed">completed</option>
      </select>
      {todos.map(todo => <Todo key={todo.id} todoId={todo.id} setTodos={setTodos} />)}
    </div>
  )
}