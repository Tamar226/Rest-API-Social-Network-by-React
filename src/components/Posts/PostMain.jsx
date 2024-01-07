import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function PostMain() {
    const {postId} = useParams();
    const [post, setPost] = useState({}); 
    useEffect(() => {
        fetch(`localhost:3000/posts/${postId}`)
        .then(response => response.json())
        .then(json => {
            setPost(json);
        })
    }, []);
    return (
        <div>
            <h5>{post.div}</h5>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <button>✒️</button>
            <button>🗑️</button>
        </div>
    )
}

export default PostMain