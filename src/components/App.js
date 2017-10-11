import React, { Component } from 'react';

import ContestPreview from './ContestPreview';
import data from '../testData';
//assets
//import '../styles/App.css';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageHeader: 'Naming Contests',
      contests: []
    };
  }
  componentDidMount() {
    this.setState({
      contests: data.contests
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.pageHeader}</h2>
        {this.state.contests.map(contest =>
          <ContestPreview key={contest.id} {...contest}/>
        )}

      </div>
    );
  }
}
