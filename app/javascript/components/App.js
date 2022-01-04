import React from "react";
import Greeting from './Greeting.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore.js";
import '../css/style.css'
const store = configureStore();
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Greeting  greeting=""/>} />
        </Routes>
      </Router>
      </Provider>
    );
  }
}

export default App;
