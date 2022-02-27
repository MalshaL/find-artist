import SearchBar from "./SearchBar";
import ArtistContainer from "./ArtistContainer";
import React from "react";


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchResult: []};
    }

    handleSearchResponse = (searchResponse) => {
        this.setState({searchResult: searchResponse});
    }

    render() {
        return (
            <div>
                <SearchBar token={this.props.token} resultCallback={this.handleSearchResponse}/>
                {this.state.searchResult.length ?
                    <ArtistContainer searchResult={this.state.searchResult}/> :
                    <div/>
                }
            </div>
        )
    }
}