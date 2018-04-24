import React, { Component } from 'react';
import Playlist from './Playlist';
import Filter from './Filter';
import PlaylistCounter from './PlaylistCounter';
import HoursCounter from './HoursCounter';
import '../App.css';


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
      {
        name: 'Discover Weekly',
        songs: [
          { name: 'Dogs Running', duration: 1345 },
          { name: 'Fire', duration: 1236 },
          { name: 'Trouble will find me now', duration: 70000 }
        ]
      },
      {
        name: 'The Best!',
        songs: [
          { name: 'Hello World', duration: 1345 },
          { name: 'Fire', duration: 1236 },
          { name: 'Trouble will find me now', duration: 70000 }
        ]
      },
      {
        name: 'Playlist - Now!',
        songs: [
          { name: 'EZ does it', duration: 1345 },
          { name: 'Fire', duration: 1236 },
          { name: 'Trouble will find me now', duration: 70000 }
        ]
      }
    ]
  }
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverData: fakeServerData
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     serverData: fakeServerData
  //   })
  // }

  render() {
    let playlistData = this.state.serverData.user.playlists;

    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1 className="App-title">{this.state.serverData.user && this.state.serverData.user.name}'s Playlist</h1>
            <PlaylistCounter playlists={playlistData} />
            <HoursCounter playlists={playlistData} />
            <Filter />
            {playlistData.map(playlist =>
              <Playlist playlists={playlist} />
            )}
          </div> : <h1>Loading .....</h1>
        }
      </div>
    );
  }
}

export default App;
