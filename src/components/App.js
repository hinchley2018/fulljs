import React, { Component } from 'react';
import ContestList from './ContestList';
import PropTypes from 'prop-types';


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

    }

    render() {
        return (
            <div>
                <h2>{this.state.pageHeader}</h2>
                <ContestList contests={this.state.contests}/>
            </div>
        );
    }
}

App.propTypes = {
    initialContests: PropTypes.Array
};