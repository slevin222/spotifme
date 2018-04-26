import React, { Component } from 'react';
import Playlist from './Playlist';
import Filter from './Filter';
import PlaylistInfo from './PlaylistInfo';
import SignIn from './SignIn';
import '../index.css';
import queryString from 'query-string';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverData: {},
      filterString: ''
    }
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (!accessToken)
      return;
    fetch('https://api.spotify.com/v1/me', {
      headers: { 'Authorization': 'Bearer ' + accessToken }
    }).then(response => response.json())
      .then(data => this.setState({
        user: {
          name: data.display_name
        }
      }));

    fetch('https://api.spotify.com/v1/me/playlists', {
      headers: { 'Authorization': 'Bearer ' + accessToken }
    }).then(response => response.json())
      .then(playlistData => {
        let playlists = playlistData.items;
        let trackDataPromises = playlists.map(playlist => {
          let responsePromise = fetch(playlist.tracks.href, {
            headers: { 'Authorization': 'Bearer ' + accessToken }
          })
          let trackDataPromise = responsePromise
            .then(response => response.json())
          return trackDataPromise;
        })
        let allTracksDataPromises =
          Promise.all(trackDataPromises)
        let playlistsPromise = allTracksDataPromises.then(trackDatas => {
          trackDatas.forEach((trackData, i) => {
            playlists[i].trackDatas = trackData.items
              .map(item => item.track)
              .map(trackData => ({
                name: trackData.name,
                duration: trackData.duration_ms / 1000
              }))
          })
          return playlists
        })
        return playlistsPromise
      })
      .then(playlists => this.setState({
        playlists: playlists.map(item => {
          return {
            name: item.name,
            imageUrl: item.images[0].url,
            songs: item.trackDatas.slice(0, 5)
          }
        })
      }))
  }

  render() {
    let showPlaylist =
      this.state.user &&
        this.state.playlists
        ? this.state.playlists.filter(playlist => {
          let matchesPlaylist = playlist.name.toLowerCase().includes(
            this.state.filterString.toLowerCase())
          let matchesSong = playlist.songs.find(song => song.name.toLowerCase()
            .includes(this.state.filterString.toLowerCase()))
          return matchesPlaylist || matchesSong
        }) : []

    return (
      <div className="App container-fluid " >
        {
          this.state.user ?
            <div>
              <PlaylistInfo playlists={showPlaylist} userName={this.state.user.name} />
              <Filter onTextChange={text => this.setState({ filterString: text })} />
              <div className="d-flex flex-wrap mt-4">
                {showPlaylist.map(playlist =>
                  <Playlist imageUrl={playlist.imageUrl} playlists={playlist} />
                )}
              </div>
            </div> :
            <SignIn />
        }
      </div>
    );
  }
}

export default App;
