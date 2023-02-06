import React, {useEffect, useState} from 'react';
import {albumRequest} from "../../api/services/album.service";
import {Albums} from "../../components";


const AlbumsPage = () => {

    const [album,setAlbums]=useState([])

    console.log(album);

    useEffect(()=>{
        albumRequest.getAll().then(({data})=>setAlbums([...data]))

    },[])

    return (
        <div>
            <h3>AlbumsPage</h3>
            <Albums albums={album}/>
        </div>
    );
};

export default AlbumsPage;