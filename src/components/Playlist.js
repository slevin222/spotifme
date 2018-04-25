import React, { Component } from 'react';




class Playlist extends Component {
    render() {
        let playlist = this.props.playlists;
        return (
            <div className="col mt-2">
                <div>
                    <img src={this.props.imageUrl} alt={this.props.imageUrl} style={{ width: '320px' }} />
                </div>
                <div className="card border-success mb-3 mt-1" style={{ maxWidth: "20rem" }}>
                    <div className="card-header playlistTitle">{playlist.name}</div>
                    <div className="card-body">
                        <ul>
                            {playlist.songs.map(song =>
                                <li>{song.name}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Playlist;