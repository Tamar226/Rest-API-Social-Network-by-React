import React from 'react'

function Comment({ comment }) {
    return (
        <div>
            <h6>{comment.id}</h6>
            <p>{comment.name}</p>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    )
}

export default Comment