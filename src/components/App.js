import React, { Component } from 'react';
import axios from 'axios';
import ContestPreview from './ContestPreview';


//assets
//import '../styles/App.css';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageHeader: 'Naming Contests',
      contests: this.props.initialContests
    };
  }

  componentDidMount() {
    //ajax ...
    axios.get('/api/contests')
      .then(res => {
        //console.log(res);
        this.setState({
          contests: res.data.contests
        });
      })
      .catch(console.error);

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
