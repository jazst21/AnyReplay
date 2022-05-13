import logo from "./logo.svg";
import React, { Component } from "react";
import styled, { css } from "styled-components";
import "./App.css";
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
      {/* <Container>
        <Row>
          <Col sm={8}>sm=8</Col>
          <Col sm={4}>sm=4</Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container> */}
      <Container>
        <Rect3>
          <NavBar />
        </Rect3>
        <Rect4>
          <Rect5></Rect5>
          <Rect6>
            <Rect7>
              {/* <CardCCollection/> */}
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
            </Rect7>
            <Rect8></Rect8>
          </Rect6>
        </Rect4>
        <Rect3>
          <MarketingFooter />
        </Rect3>
      </Container>

      {/* <NavBar/>
      <div alignItems="center" >
      <Router>
        <Routes>
          <Route exact path="/" element={<CardA width={"100vw"}/>} />
          <Route exact path="/game" element={<CardCCollection/>} />
          <Route exact path="/replaydetail/*" element={<><CardB /><CommentCollection width={"50"}/></>} />
          <Route exact path="/schedule" element={<CardBCollection width={"100vw"}/>} />
          <Route exact path="/league" element={<CardBCollection width={"100vw"}/>} />
          <Route exact path="/replay/*" element={<><CardB /><CommentCollection width={"100vw"}/></>} />
          <Route exact path="/club" element={<CardA width={"100vw"}/>} />
          <Route exact path="/about" element={<div style={{justifyContent:'center', alignItems:'center', height: '100vh'}}><CardA width={"100vw"}/></div>} />
          <Route exact path="/addreplay" element={<div style={{justifyContent:'center', alignItems:'center', height: '100vh'}}><AddReplay/></div>} />
        </Routes>
      </Router>
      </div>
      <MarketingFooter/> */}
    </div>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(204, 204, 204, 1);
  flex-direction: column;
  width: 1366px;
  height: 698px;
`;

const Rect3 = styled.div`
  background-color: rgba(204, 204, 204, 1);
  height: 113px;
`;

const Rect4 = styled.div`
  flex: 0.5 1 0%;
  background-color: rgba(204, 204, 204, 1);
  flex-direction: row;
  display: flex;
`;

const Rect5 = styled.div`
  flex: 0.19 1 0%;
  background-color: rgba(204, 204, 204, 1);
  display: flex;
  flex-direction: column;
`;

const Rect6 = styled.div`
  flex: 0.81 1 0%;
  background-color: rgba(204, 204, 204, 1);
  flex-direction: row;
  display: flex;
`;

const Rect7 = styled.div`
  // flex: 0.77 1 0%;
  alignitems: center;
  justifycontent: center;
  background-color: rgba(204, 204, 204, 1);
  display: flex;
  // flex-direction: column;
`;

const Rect8 = styled.div`
  flex: 0.22999999999999998 1 0%;
  background-color: rgba(204, 204, 204, 1);
  display: flex;
  flex-direction: column;
`;
export default withAuthenticator(App);
