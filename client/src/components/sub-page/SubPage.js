import React from "react";
import {Col, Row} from "antd";
import SubPageHeader from "./SubPageHeader";
import ArtistBio from "./ArtistBio";
import TrackList from "./TrackList";
import TrackGraph from "./TrackGraph";
import {token} from "../../SpotifyConnect";
import axios from "axios";
import LoadingScreen from "../LoadingScreen";
import { withRouter } from "react-router-dom";


class SubPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {storedToken: token, tracksResult: null, name: "", id: ""};
        console.log(this.props);
    }

    // get top tracks for selected artist
    getArtistTracks(id, storedToken) {
        axios.get('http://localhost:5000/api/getArtistTracks', {
            headers: {
                token: storedToken,
                id: id
            }
        })
            .then(response => {
                console.log(response);
                this.setState({tracksResult: response.data});
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        const name = this.props.match.params.name;
        const id = new URLSearchParams(this.props.location.search).get("id");
        console.log(name);
        console.log(id);
        this.setState({id: id, name: name});
        this.getArtistTracks(id, this.state.storedToken);
    }

    render() {
        return (
            <div>
                <SubPageHeader name={this.state.name}/>
                {this.state.tracksResult ?
                    <>
                    <ArtistBio data={this.state.tracksResult}/>
                    <Row>
                        <Col>
                            <TrackList data={this.state.tracksResult}/>
                        </Col>
                        <Col>
                            <TrackGraph data={this.state.tracksResult}/>
                        </Col>
                    </Row> </>:
                    <LoadingScreen/>}
            </div>
        )
    }

}

export default withRouter(SubPage);