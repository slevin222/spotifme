import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="col-lg-12 col-md-12 mb-4 mt-4">
                <input className="form-control is-valid" placeholder="Input Song to Show Video" type="text"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;