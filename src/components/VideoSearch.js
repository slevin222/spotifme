import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import YTSearch from 'youtube-api-search';
import API_KEY from './youtube';


class ViedoSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedVideo: null,
            videos: []
        };
        this.videoSearch('how to create playlist spotify');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });

    }

    render() {
        // console.log('props in viedolist', this.props.playlists[0].songs);
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400)
        return (
            <div className="col-lg-6">
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }
}

export default ViedoSearch;