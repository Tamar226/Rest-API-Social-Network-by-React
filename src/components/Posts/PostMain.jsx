import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PostEdit from './PostEdit';

function PostMain() {
    const {postId} = useParams();
    const [post, setPost] = useState({}); 
    const [showEdit, setShowEdit] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:3000/posts/${postId}`)
        .then(response => response.json())
        .then(json => {
            setPost(json);
        })
    }, []);
    
    function handleDelete(){
        fetch(`http://localhost:3000/posts/${postId}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
        })
    }

    return (
        <div>
            <h5>{post.id}</h5>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            {showEdit && <PostEdit postOrigional={post} setShowEdit={setShowEdit}/>}
            <button onClick={()=>setShowEdit(true)}>✒️</button>
            <button onClick={handleDelete}>🗑️</button>
        </div>
    )
}

export default PostMain