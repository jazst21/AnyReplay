import logo from './logo.svg';
import './App.css';
import { CommentCollection,CardA,CardB, CardBCollection, CardCCollection, NavBar } from './ui-components';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<CardA/>} />
          <Route exact path="/leaderboard" element={<CardBCollection />} />
          <Route exact path="/replay" element={<CardCCollection />} />
          <Route exact path="/replaydetail/*" element={<><CardB/><CommentCollection/></>} />
          <Route exact path="/about" element={<CardA />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
