import React, { Component } from 'react';

class Filter extends Component {

    render() {
        return (
            <div className="filter">
                <input type="text" onKeyUp={event =>
                    this.props.onTextChange(event.target.value)} />
                Search Info
        </div>
        )
    }
}

export default Filter;