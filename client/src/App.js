import './App.css';
import 'antd/dist/antd.css';
import React from "react";
import {Row, Col} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import Header from "./components/Header";
import CardContainer from "./components/ArtistContainer";


function App() {
  return (
    <div className="app">
      <Header/>
      <Row>
          <Col flex="auto">
              <input className="artist-search" placeholder="Search Artists"/>
          </Col>
          <Col flex="none">
              <button className="search-button" type="submit"><SearchOutlined /></button>
          </Col>
      </Row>
      <CardContainer/>
    </div>
  );
}

export default App;
