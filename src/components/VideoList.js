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
        <div className="col-lg-7">
            <div className="col-lg-12" >
                <ul className="d-flex flex-wrap">
                    {videoItems}
                </ul>
            </div>
        </div>
    );
};

export default VideoList;