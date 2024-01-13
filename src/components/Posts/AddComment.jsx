import React, { useEffect, useState } from 'react'

function AddComment({ setShowAddComment }) {
    const [body, setBody] = useState('');
    const { postId, id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}`)
            .then(response => response.json())
            .then(json => {
                setUser(json);
            })
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const url = `http://localhost:3000/comments`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ body: body, postId: postId, email: user.email, name: user.name })
        }
        fetch(url, options)
            .then(response => response.json())
            .then(json => {
                setBody(body => body.concat(json));
            }).catch(error => {
                console.log(error);
            });
        setShowAddComment(false);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={body}
                    onChange={e => setBody(e.target.value)} placeholder="body..." />
                <button className="btn">submit</button>
            </form>
        </div>
    )
}

export default AddComment