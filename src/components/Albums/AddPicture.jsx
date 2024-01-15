import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import './AlbumsStyle.css'
function AddPicture({setShowAdd, picture,setPictures}) {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const {id} = useParams();

    function handleSubmit(e) {
        e.preventDefault();
        const url = `http://localhost:3000/photos`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title,url:url, userId: id })
        }
        fetch(url, options)
            .then(response => response.json())
            .then(json => {
                setPictures(pictures=>pictures.concat(json));
            }).catch(error => {
                console.log(error);
            });
            setShowAdd(false);
    }

    return (
        <div>
            <form className='addPicture' onSubmit={handleSubmit}>
                <input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)} placeholder="title..." />
                <input type="text" name="url" value={url} onChange={e=>setUrl(e.target.value)} placeholder="url..." /><br/>
                <button className="btn">submit</button>
            </form>
        </div>
    )
}

export default AddPicture