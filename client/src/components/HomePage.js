import SearchBar from "./SearchBar";
import ArtistContainer from "./ArtistContainer";
import React from "react";
import Header from "./Header";
import LoadingScreen from "./LoadingScreen";
import axios from "axios";
import {token} from "../SpotifyConnect";


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {accessToken: '', searchResult: []};
    }

    getAccessToken = () => {
        axios.get('/api/access-token')
            .then(response => {
                this.setState({accessToken: response.data.access_token});
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.setState({accessToken: token});
    }

    handleSearchResponse = (searchResponse) => {
        this.setState({searchResult: searchResponse});
    }

    render() {
        return (
            <div>
                <Header/>
                {this.state.accessToken ?
                    <>
                        <SearchBar token={this.state.accessToken} resultCallback={this.handleSearchResponse}/>
                        {this.state.searchResult.length ?
                            <ArtistContainer searchResult={this.state.searchResult}/> :
                            <div/>
                        } </>
                    : <LoadingScreen/>
                }

            </div>
        )
    }
}