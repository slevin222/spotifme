import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="row ">
                <div className="col-lg-4 col-md-12 m-4">
                    <input className="form-control is-valid" placeholder="Input Song to Show Video" type="text"
                        value={this.state.term}
                        onChange={event => this.onInputChange(event.target.value)} />
                    {/* Value of the input:{this.state.term} */}
                </div>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;