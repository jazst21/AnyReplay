import logo from './logo.svg';
import './App.css';
import { AddReplay, CommentCollection,CardA,CardB, CardBCollection, CardCCollection, NavBar, MarketingFooter } from './ui-components';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { withAuthenticator, Divider } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <NavBar width={"100vw"}/>
      <Router>
        <Routes>
          <Route exact path="/" element={<CardA width={"100vw"}/>} />
          <Route exact path="/leaderboard" element={<CardBCollection width={"100vw"}/>} />
          <Route exact path="/replay" element={<CardCCollection width={"100vw"}/>} />
          <Route exact path="/replaydetail/*" element={<><CardB /><CommentCollection width={"100vw"}/></>} />
          <Route exact path="/about" element={<AddReplay width={"100vw"}/>} />
        </Routes>
      </Router>
      <MarketingFooter width={"100vw"}/>
    </div>
  );
}

export default withAuthenticator(App);
