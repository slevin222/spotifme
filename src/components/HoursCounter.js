import React, { Component } from 'react';

class HoursCounter extends Component {
    render() {

        let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
            return songs.concat(eachPlaylist.songs)
        }, [])
        let totalDuration = allSongs.reduce((sum, eachSong) => {
            return Math.round(sum + eachSong.duration / 60)
        }, 0)
        return (
            <div className="aggregate" >
                <h2>{totalDuration} Hours</h2>
            </div>
        )
    }
}

export default HoursCounter;