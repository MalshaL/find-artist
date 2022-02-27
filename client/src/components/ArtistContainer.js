import {Col, Row} from "antd";
import ArtistCard from "./ArtistCard";
import React from "react";

export default class ArtistContainer extends React.Component {

    render() {
        return (
            <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}>
                {this.props.searchResult.map((artist) =>
                    <Col key={artist.id} xs={12} sm={8} md={8} lg={6} xl={4}>
                        <ArtistCard artist={artist}/>
                    </Col>
                )}
            </Row>
        )
    }
}
