import React, { Component } from 'react';

class Filter extends Component {

    render() {
        return (
            <div className="d-flex justify-content-center mb-4">
                <input className="form-control is-valid" placeholder="Find Playlist or Song" type="text" onKeyUp={event =>
                    this.props.onTextChange(event.target.value)} />
            </div>
        )
    }
}

export default Filter;