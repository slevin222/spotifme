import React, { Component } from 'react';
import HoursCounter from './HoursCounter';

class PlaylistInfo extends Component {
    render() {
        return (
            <div className="row mt-4 text-center">
                <div className="col-lg-4 col-md-12">
                    <h2>{this.props.userName}</h2>
                </div>
                <div className="col-lg-4 col-md-12">
                    <h2>{this.props.playlists && this.props.playlists.length} Playlists Showing Top 5 Songs</h2>
                </div>
                <div className="col-lg-4 col-md-12">
                    <HoursCounter playlists={this.props.playlists} />
                </div>
            </div>
        )
    }
}

export default PlaylistInfo;