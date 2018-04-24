import React, { Component } from 'react';
import Playlist from './Playlist';
import Filter from './Filter';
import PlaylistCounter from './PlaylistCounter';
import HoursCounter from './HoursCounter';
import '../App.css';
import queryString from 'query-string';


let fakeServerData = {
  user: {
    name: 'Shawn',
    playlists: [
      {
        name: 'My favorites',
        songs: [
          { name: 'Beat It', duration: 1345 },
          { name: 'Fire', duration: 1236 },
          { name: 'Trouble will find me now', duration: 70000 }
        ]
      },
    ]
  }
};


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
      .then(data => this.setState({
        playlists: data.items.map(item => {
          return {
            name: item.name,
            imageUrl: item.images[0].url,
            songs: []
          }
        })
      }))


  }

  render() {
    let showPlaylist =
      this.state.user &&
        this.state.playlists
        ? this.state.playlists.filter(playlist =>
          playlist.name.toLowerCase().includes(
            this.state.filterString.toLowerCase()))
        : [];

    return (
      <div className="App" >
        {
          this.state.user ?
            <div>
              <h1 className="App-title">{this.state.user.name}'s Playlist</h1>
              <PlaylistCounter playlists={showPlaylist} />
              <HoursCounter playlists={showPlaylist} />
              <Filter onTextChange={text => this.setState({ filterString: text })} />
              {showPlaylist.map(playlist =>
                <Playlist imageUrl={playlist.imageUrl} playlists={playlist} />
              )}
            </div> : <button onClick={() => {
              window.location = window.location.href.includes('localhost')
                ? 'http://localhost:8888/login'
                : 'https://better-playlists-backend.herokuapp.com/login'
            }
            }
              style={{ padding: '20px', 'font-size': '50px', 'margin-top': '20px' }}>Sign in with Spotify</button>
        }
      </div>
    );
  }
}

export default App;
