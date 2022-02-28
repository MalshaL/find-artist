import React from "react";
import {Col, Row} from "antd";
import bgImage from "../../images/background.jpg";


export default class Track extends React.Component {

    onTrackSelect(id) {
        this.props.getSelectedTrack(id);
    }

    render() {
        return(
            <div className={this.props.selectedId === this.props.track.id ? 'track-data-selected' : 'track-data'}
                 onClick={()=>this.onTrackSelect(this.props.track.id)}>
            <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className="track-art">
                    <img src={this.props.track.album.images.length ?
                        this.props.track.album.images[0].url : bgImage} alt="track-art"/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="track-meta">
                    <p className="track-name"><b>{this.props.track.name}</b></p>
                    <p className="track-album">{this.props.track.album.name}</p>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className="track-duration">
                    <p>{(this.props.track.duration_ms/60000).toFixed(2)}</p>
                </Col>
            </Row>
            </div>
        )
    }
}