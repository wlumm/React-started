import React, { Component } from 'react';
import logo from '../logo.svg';
import Intro  from '../Intro'
import './App.css';
import 'whatwg-fetch'


class App extends Component {
  state = {
    series : []
  }

  componentDidMount (){
    // const series= ["Vikings", "Comedy"];
  
    // setTimeout(()=>{
    //   this.setState({series});
    // },2000);

    fetch('http://api.tvmaze.com/search/shows?q=girls')
    .then((response) => response.json())
    .then (json => { this.setState({series: json})})
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lum's first react app</h1>
        </header>
        <p className="App-intro">
          Let's get started. 
        </p>
        <Intro message="We have achieved our lesson 5"/><br/>
        The length of the array - {this.state.series.length}
      </div>
    );
  }
}

export default App;
