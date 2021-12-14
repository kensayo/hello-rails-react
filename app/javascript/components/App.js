import React from "react";
import HelloWorld from './HelloWorld.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
class App extends React.Component {
  render () {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HelloWorld  greeting="My Friend"/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
