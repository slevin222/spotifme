import React, { Component } from 'react';




class Playlist extends Component {
    render() {
        let playlist = this.props.playlists;
        return (
            <div className="playlists">
                <img src={this.props.imageUrl} alt={this.props.imageUrl} style={{ width: '160px' }} />
                <h3>{playlist.name}</h3>
                <ul>
                    {playlist.songs.map(song =>
                        <li>{song.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Playlist;