import React from 'react';

const AlbumList = (props) => {

    console.log(props.albums);
    const albums = props.albums.map((album) => {
        return (
            <div key={album.id} className="col-sm">
                <a href={album.url} >
                    <img alt={album.name} src={album.images[0].url} />
                    <br />
                    <div>{album.name}</div>
                </a>
            </div>)
    });





    return (
        <div className="albums-list row card-body">{albums}</div>

    )

};

export default AlbumList;
