import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    //same as passing props above then
    //const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item col-lg-12">
            <div className="video-list-media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} alt={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};


export default VideoListItem;