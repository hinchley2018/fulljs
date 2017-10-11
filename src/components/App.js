import React, { Component } from 'react';

import ContestPreview from './ContestPreview';

//assets
//import '../styles/App.css';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageHeader: 'Naming Contests'
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.pageHeader}</h2>
        {this.props.contests.map(contest =>
          <ContestPreview {...contest}/>
        )}

      </div>
    );
  }
}
