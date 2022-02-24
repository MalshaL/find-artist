import {Col, Row} from "antd";
import ArtistCard from "./ArtistCard";
import React from "react";

function CardContainer() {
    return (
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            <Col xs={12} sm={8} md={8} lg={8} xl={8}>
                <ArtistCard/>
            </Col>
            <Col xs={12} sm={8} md={8} lg={8} xl={8}>
                <ArtistCard/>
            </Col>
            <Col xs={12} sm={8} md={8} lg={8} xl={8}>
                <ArtistCard/>
            </Col>
        </Row>
    )
}

export default CardContainer;