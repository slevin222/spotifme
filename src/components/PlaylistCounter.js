import React, { Component } from 'react';
import HoursCounter from './HoursCounter';

class PlaylistCounter extends Component {
    render() {
        return (
            <div className="row mt-4 text-center">
                <div className="col-lg-4 col-md-12">
                    <h2>{this.props.userName}'s Playlists</h2>
                </div>
                <div className="col-lg-4 col-md-12">
                    <h2>{this.props.playlists && this.props.playlists.length} Playlists showing top 5 songs</h2>
                </div>
                <div className="col-lg-4 col-md-12">
                    <HoursCounter playlists={this.props.playlists} />
                </div>
            </div>

        )
    }
}

export default PlaylistCounter;