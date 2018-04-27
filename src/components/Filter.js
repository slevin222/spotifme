import React, { Component } from 'react';

class Filter extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-lg-4 col-md-12 m-4">
                    <input className="form-control is-valid" placeholder="Find Playlist or Song" type="text" onKeyUp={event =>
                        this.props.onTextChange(event.target.value)} />
                </div>
            </div>
        )
    }
}

export default Filter;