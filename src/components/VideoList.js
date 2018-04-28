import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );
    });

    return (
        <div className="col-lg-12 col-sm-12">
            <div className="col-lg-12" id="videoList">
                <ul>
                    {videoItems}
                </ul>
            </div>
        </div>
    );
};

export default VideoList;