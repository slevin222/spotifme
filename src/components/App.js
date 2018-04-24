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
          { name: 'Beat It', duration: 1345 },
          { name: 'Fire', duration: 1236 },
          { name: 'Trouble will find me now', duration: 70000 }
        ]
      },
      {
        name: 'The best!',
        songs: [
          { name: 'Beat It', duration: 1345 },
          { name: 'Fire', duration: 1236 },
          { name: 'Trouble will find me now', duration: 70000 }
        ]
      },
      {
        name: 'Playlist - Now!',
        songs: [
          { name: 'Beat It', duration: 1345 },
          { name: 'Fire', duration: 1236 },
          { name: 'Trouble will find me now', duration: 70000 }
        ]
      }
    ]
  }
};


class App extends Component {
  constructor(props) {
    super();
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
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1 className="App-title">{this.state.serverData.user && this.state.serverData.user.name}'s Playlist</h1>
            <PlaylistCounter playlists={this.state.serverData.user.playlists} />
            <HoursCounter playlists={this.state.serverData.user.playlists} />
            <Filter />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
          </div> : <h1>Loading .....</h1>
        }
      </div>
    );
  }
}

export default App;
