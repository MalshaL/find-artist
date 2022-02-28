import React from "react";
import {Col, Row} from "antd";
import SubPageHeader from "./SubPageHeader";
import ArtistBio from "./ArtistBio";
import TrackList from "./TrackList";
import TrackGraph from "./TrackGraph";
import {getAccessToken} from "../../SpotifyConnect";
import axios from "axios";
import LoadingScreen from "../LoadingScreen";
import {withRouter} from "react-router-dom";


class SubPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tracksResult: [], trackFeatures: [], tracks: [], selectedTrack: ""};
    }

    // get artist data
    getArtist(id) {
        let token = getAccessToken();
        axios.get('/api/getArtist', {
            headers: {
                token: token,
                id: id
            }
        })
            .then(response => {
                this.setState({artist: response.data});
                this.getArtistTracks(id);
            })
            .catch(error => {
                console.log(error);
            });
    }

    // get top tracks for selected artist
    getArtistTracks(id) {
        let token = getAccessToken();
        axios.get('/api/getArtistTracks', {
            headers: {
                token: token,
                id: id
            }
        })
            .then(response => {
                this.setState({tracksResult: response.data});
                this.getTrackFeatures(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    // get audio features for the top tracks
    getTrackFeatures(tracks) {
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

        let token = getAccessToken();
        axios.get('/api/getTrackFeatures', {
            headers: {
                token: token,
                ids: idString
            }
        })
            .then(response => {
                this.setState({trackFeatures: response.data});
                let trackData = this.mergeTrackLists(tracks, response.data)
                this.setState({tracks: trackData});
            })
            .catch(error => {
                console.log(error);
            });
    }

    // combine lists for tracks and audio features
    mergeTrackLists(tracks, trackFeatures) {
        return tracks.map(track => {
            let trackFeature = trackFeatures.find(t => t.id === track.id)
            return {...track, ...trackFeature}
        });
    }

    componentDidMount() {
        const name = this.props.match.params.name;
        const query = new URLSearchParams(this.props.location.search);
        const id = query.get("id");
        this.setState({id: id, name: name});
        this.getArtist(id);
    }

    setSelectedTrack = (id) => {
        this.setState({selectedTrack: id});
    }

    render() {
        return (
            <div>
                <SubPageHeader name={this.state.name}/>
                {this.state.tracks ?
                    <>
                    <ArtistBio artist={this.state.artist}/>
                    <Row className="track-div" gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <TrackList tracks={this.state.tracks} getSelectedTrack={this.setSelectedTrack}/>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            {this.state.selectedTrack ?
                                <TrackGraph tracks={this.state.tracks} selectedTrack={this.state.selectedTrack}/>
                                : <div className="user-prompt">
                                    Select a track to view audio features.
                                </div>
                            }

                        </Col>
                    </Row> </>:
                    <LoadingScreen/>}
            </div>
        )
    }

}

export default withRouter(SubPage);