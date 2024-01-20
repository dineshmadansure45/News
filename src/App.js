import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey='2d6fb5ac6b0c458fadc50d50c9a96b38'
  //apiKey=process.env.NEWS_API_KEY
  pageSize = 5;

  state={
    progress:0,
    
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <LoadingBar
              height={3}
              color='#f11946'
              progress={this.state.progress}
              
            />
            <Routes>
              <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />} />
              <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />} />
              <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports"  pageSize={this.pageSize}country="in" category="sports" />} />
              <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" />} />
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
              <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business" />} />
              <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
              <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" country="in" pageSize={this.pageSize} category="health" />} />
            </Routes>
          </Router>
        </div>

      </>
    )
  }
}
