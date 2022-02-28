import React from "react";
import {Col, Row} from "antd";
import {Chart as ChartJS, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip,} from 'chart.js';
import {Radar} from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const featureLabels = ['Acousticness', 'Danceability', 'Energy', 'Instrumentalness', 'Speechiness', 'Valence'];

export default class TrackGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {track: [], audioFeatures: []};
    }

    getTrack = () => {
        let id = this.props.selectedTrack;
        let tracks = this.props.tracks;
        let track = tracks.find(t => t.id === id);
        this.setState({track: track});

        let features = this.getAudioFeatures(track);
        this.setState({audioFeatures: features});
        return features;
    }

    getAudioFeatures = (track) => {
        let audioFeatures = [];
        audioFeatures.push(track.acousticness);
        audioFeatures.push(track.danceability);
        audioFeatures.push(track.energy);
        audioFeatures.push(track.instrumentalness);
        audioFeatures.push(track.speechiness);
        audioFeatures.push(track.valence);
        return audioFeatures;
    }

    setGraphData = () => {
        let features = this.getTrack();
        const data = {
            labels: featureLabels,
            datasets: [
                {
                    label: 'Value for Audio Feature',
                    data: features,
                    backgroundColor: 'rgba(123, 140, 183, 0.7)',
                    borderColor: 'rgba(10, 25, 47, 1)',
                    borderWidth: 1,
                },
            ],
        };
        this.setState({data: data});
    }

    componentDidMount() {
        this.setGraphData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.selectedTrack !== this.props.selectedTrack) {
            this.setGraphData();
        }
    }

    render() {
        return (
            <> { this.state.data ?
                    <div>
                        <Row>
                            <Col><p className="graph-legend">Audio features - {this.state.track.name}</p></Col>
                            <Col flex="auto"/>
                            <Col><a className="track-link" href={this.state.track.external_urls.spotify}
                                    target='_blank' rel="noreferrer">PLAY</a></Col>
                        </Row>
                        <Radar data={this.state.data} type={'radar'}
                               className="radar-chart" />
                        <p className="read-more"><a
                           href={"https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-audio-features"}>
                            Read more about audio features here.</a></p>
                    </div> :
            <></> } </>
        );
    }
}