import React, { Component } from 'react';
import './App.css';
import Location from './location';
// import ajax from './utils/ajax';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'

import tflData from './redux/reducers';


const store = createStore(tflData, applyMiddleware(logger));

class App extends Component {
    componentDidMount() {
        /*ajax('https://api.tfl.gov.uk/Place?type=NaptanMetroStation,NaptanRailStation&lat=51.505404&lon=-0.109849&radius=800').then((data) => {
            console.log(data);
        })*/
    }
  render() {
    return (
        <Provider store={store}>
          <div className="App">
            <Location/>
          </div>
        </Provider>
    );
  }
}

export default App;
