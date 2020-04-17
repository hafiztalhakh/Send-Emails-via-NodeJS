import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {

  state = {
    sender_email: 'talha_ahmed96@live.com',
    receiver_email: '',
    subject: '',
    messagae: '',
  }

  sendEmail = () => {
    axios({
      url: 'http://localhost:8081/email',
      method: 'POST',
      data: this.state,
    })
      .then(res => {
        console.log('hogya');
      })
      .catch(err => {
        console.log('err');
      })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <input type="text" name="sender_email" value={this.state.sender_email} disabled/>
          <br />
          <input type="email" name="receiver_email" placeholder="Email Address of Receiver" onChange={(e) => { this.setState({ receiver_email: e.target.value }) }} />
          <br />
          <input type="text" name="subject" placeholder="Subject" onChange={(e) => { this.setState({ subject: e.target.value }) }} />
          <br />
          <input type="text" name="message" placeholder="Enter message here" onChange={(e) => { this.setState({ messagae: e.target.value }) }} />
          <br />
          <button onClick={this.sendEmail}>Send</button>
        </header>
      </div>
    );

  }
}

export default App;
