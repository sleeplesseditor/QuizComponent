import React, { Component } from 'react';
import './style/style.scss';

import QuestionList from './questionList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Quiz Component</h1>
        </header>
        <QuestionList />
      </div>
    );
  }
}

export default App;
