import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PostEdit from './PostEdit';
import Comment from './Comment';
import AddComment from './AddComment';

function PostMain() {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [showEdit, setShowEdit] = useState(false);
    const [comments, setComments] = useState([]);
    const [userPost, setUserPost] = useState({});
    const [showAddComment, setShowAddComment] = useState(false);
    useEffect(() => {
        async function start() {
            await fetch(`http://localhost:3000/posts/${postId}`)
                .then(response => response.json())
                .then(json => {
                    setPost(json);
                });
            await fetch(`http://localhost:3000/users/?id=${post.userId}`)
                .then(response => response.json())
                .then(json => {
                    setUserPost(json[0]);
                });
        }
        start();
    }, [showEdit]);

    function handleDelete() {
        fetch(`http://localhost:3000/posts/${postId}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
            })
    };

    function handleShowComments() {
        if (comments.length > 0) return setComments([]);
        fetch(`http://localhost:3000/comments/?postId=${postId}`)
            .then(response => response.json())
            .then(json => {
                setComments(json);
            })
    }

    return (
        <div>
            <h5>{post.id} {userPost.name}</h5>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            {showEdit && <PostEdit postOrigional={post} setShowEdit={setShowEdit} />}
            {<>
                {comments.map(comment =>
                    <Comment key={comment.id} comment={comment}></Comment>
                )}
                {showAddComment && <AddComment setShowAddComment={setShowAddComment} setComments={setComments} />}
                {!showAddComment && <><button onClick={() => setShowAddComment(true)}>add comment</button></>}
            </>}
            <button onClick={handleShowComments}>show comments</button>
            <button onClick={() => setShowEdit(true)}>✒️</button>
            <button onClick={handleDelete}>🗑️</button>
        </div>
    )
}

export default PostMain