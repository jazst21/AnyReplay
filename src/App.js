import logo from "./logo.svg";
import React, { Component } from "react";
// import styled, { css } from "styled-components";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

import {
  CommentCollection,
  CardA,
  CardB,
  CardBCollection,
  CardCCollection,
  NavBar,
  MarketingFooter,
  AddReplay,
} from "./ui-components";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { withAuthenticator, Divider } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <NavBar />
        </Row>
        <Row>
          <Col/>
          <Col>
          <Router>
                <Routes>
                  <Route exact path="/" element={<CardA />} />
                  <Route exact path="/game" element={<CardCCollection />} />
                  <Route
                    exact
                    path="/replaydetail/*"
                    element={
                      <>
                        <CardB />
                        <CommentCollection />
                      </>
                    }
                  />
                  <Route exact path="/schedule" element={<CardBCollection />} />
                  <Route exact path="/league" element={<CardBCollection />} />
                  <Route
                    exact
                    path="/replay/*"
                    element={
                      <>
                        <CardB />
                        <CommentCollection />
                      </>
                    }
                  />
                  <Route exact path="/club" element={<CardA />} />
                  <Route exact path="/about" element={<CardA />} />
                  <Route exact path="/addreplay" element={<AddReplay />} />
                </Routes>
              </Router>
              </Col>
          <Col/>
        </Row>
        <Row><MarketingFooter/></Row>
      </Container>
    </div>
  );
}

export default withAuthenticator(App);
