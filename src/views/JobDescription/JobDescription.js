import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './JobDescription.scss';

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';

class JobDescription extends Component {
  render() {
    return (
      <div>
        
        <Nav />
        <Main />
      </div>
    );
  }
}

export default JobDescription;
