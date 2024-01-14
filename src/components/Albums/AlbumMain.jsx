import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Picture from './Picture';
import { useState } from 'react';
import './AlbumsStyle.css'
import AddPicture from './AddPicture';

function AlbumMain() {
    const { albumId } = useParams();
    const [pictures, setPictures] = useState([]);
    const [picture, setPicture] = useState([]);
    const [album, setAlbum] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [showAdd, setShowAdd] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3000/photos?_page=${currentPage}&_limit=8albumId=${albumId}`)
            .then(response => response.json())
            .then(json => {
                setPictures(json);
                if (json.length == 0) {
                    setCurrentPage(1);
                }
            });
        fetch(`http://localhost:3000/albums/${albumId}`)
            .then(response => response.json())
            .then(json => {
                setAlbum(json);
            });
    }, [currentPage]);

    return (
        <div>
            <h1>{album.title}</h1>
            <button className='addTodoButton' onClick={() => setShowAdd(true)}>+</button>
            {showAdd && <AddPicture setShowAdd={setShowAdd} setPictures={setPictures} />}
            <div className='pictures'>
                {pictures.map(picture =>
                    <Picture picture={picture} key={picture.id} setPictures={setPictures} />)}
            </div>
            <button onClick={() => setCurrentPage(p => p + 1)}>⬅️</button>
            <button onClick={() => setCurrentPage(p => p == 1 ? 1 : p - 1)}>➡️</button>

        </div>
    )
}

export default AlbumMain