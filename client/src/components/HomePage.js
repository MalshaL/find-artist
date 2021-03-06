import SearchBar from "./SearchBar";
import ArtistContainer from "./ArtistContainer";
import React from "react";
import Header from "./Header";
import LoadingScreen from "./LoadingScreen";
import axios from "axios";
import {setStoredAccessToken} from "../SpotifyConnect";


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {accessToken: '', searchResult: []};
    }

    getAccessToken = () => {
        axios.get('/api/getAccessToken')
            .then(response => {
                this.setState({accessToken: response.data.access_token});
                setStoredAccessToken(response.data.access_token);
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getAccessToken();
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
                        <SearchBar resultCallback={this.handleSearchResponse}/>
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