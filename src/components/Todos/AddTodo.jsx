import React from 'react'

function AddTodo() {
  
    function handleSubmit(e){
        e.preventDefault();
        const url = `http://localhost:3000/todos`;
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title: e.target.title.value, completed: false, userId: 1 })
        }
        fetch(url, options)
          .then(response => response.json())
          .then(json => {
            console.log(json);
          }).catch(error => {
            console.log(error);
          });
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="title..."/>
            <button className="btn">submit</button>
        </form>
    </div>
  )
}

export default AddTodo