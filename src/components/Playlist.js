import React, { Component } from 'react';




class Playlist extends Component {
    render() {
        let playlist = this.props.playlists;
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-2">
                <div>
                    <img src={this.props.imageUrl} alt={this.props.imageUrl} style={{ width: '100%' }} />
                </div>
                <div className="card border-success mb-3 mt-1">
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