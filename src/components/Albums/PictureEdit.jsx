import React, { useState } from 'react'

function PictureEdit({ setShowEdit, picture }) {
    const [title, setTitle] = useState(picture.title);

    function handleUpdate() {
        const url = `http://localhost:3000/photos/${picture.id}`;
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        }
        fetch(url, options)
            .then(response => response.json())
            .then(json => {
                console.log(json);
            }).catch(error => {
                console.log(error);
            });
        setShowEdit(false);
    }

    return (
        <div className='wrapper'>
            <button onClick={() => setShowEdit(false)}>x</button>
            <div className='pictureEdit'>
                <h2>{picture.id}</h2>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                <button onClick={handleUpdate}>update</button>
            </div>
        </div>
    )
}

export default PictureEdit