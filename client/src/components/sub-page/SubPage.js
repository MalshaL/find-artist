import React from "react";
import {Col, Row} from "antd";
import SubPageHeader from "./SubPageHeader";
import ArtistBio from "./ArtistBio";
import TrackList from "./TrackList";
import TrackGraph from "./TrackGraph";
import {token} from "../../SpotifyConnect";
import axios from "axios";
import LoadingScreen from "../LoadingScreen";
import {withRouter} from "react-router-dom";


class SubPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {storedToken: token, tracksResult: [], trackFeatures: [], tracks: []};
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
                this.getTrackFeatures(response.data, storedToken);
            })
            .catch(error => {
                console.log(error);
            });
    }

    getTrackFeatures(tracks, storedToken) {
        let idString = "";
        let i = 0;
        tracks.forEach(track => {
            if (i===0) {
                idString = track.id;
            } else {
                idString = idString + "," + track.id;
            }
            i = i+1;
        })

        axios.get('http://localhost:5000/api/getTrackFeatures', {
            headers: {
                token: storedToken,
                ids: idString
            }
        })
            .then(response => {
                console.log(response);
                this.setState({trackFeatures: response.data});
                let trackData = this.mergeTrackLists(tracks, response.data)
                this.setState({tracks: trackData});
                console.log(trackData);
            })
            .catch(error => {
                console.log(error);
            });
    }

    mergeTrackLists(tracks, trackFeatures) {
        return tracks.map(track => {
            let trackFeature = trackFeatures.find(t => t.id === track.id)
            return {...track, ...trackFeature}
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
                {this.state.tracks ?
                    <>
                    <ArtistBio data={this.state.tracks}/>
                    <Row>
                        <Col>
                            <TrackList data={this.state.tracks}/>
                        </Col>
                        <Col>
                            <TrackGraph data={this.state.tracks}/>
                        </Col>
                    </Row> </>:
                    <LoadingScreen/>}
            </div>
        )
    }

}

export default withRouter(SubPage);