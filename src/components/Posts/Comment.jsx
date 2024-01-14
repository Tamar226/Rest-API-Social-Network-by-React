import React, { useEffect } from 'react'
import { useState } from 'react';
import EditComment from './EditComment';

function Comment({ comment }) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const [showEdit, setShowEdit] = useState(false);
    const [newComment, setNewComment] = useState(comment);

    useEffect(() => {
        fetch(`http://localhost:3000/comments/${comment.id}`)
            .then(response => response.json())
            .then(json => {
                setNewComment(json);
            })
    }, [showEdit]);

    function handleDelete() {
        fetch(`http://localhost:3000/comments/${comment.id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
            }).catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <h6>{newComment.id}</h6>
            <p>{newComment.name}</p>
            <p>{newComment.email}</p>
            <p>{newComment.body}</p>
            {showEdit && <EditComment comment={newComment} setShowEdit={setShowEdit} />}
            {user.email==newComment.email && <><button onClick={()=>setShowEdit(true)}>✒️</button>
            <button onClick={handleDelete}>🗑️</button></>}
        </div>
    )
}

export default Comment