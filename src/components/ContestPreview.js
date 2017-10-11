import React,{Component} from 'react';
//import '../../sass/style.scss';
import PropTypes from 'prop-types';
export default class ContestPreview extends Component{
    render(){
        return (
            <div className="ContestPreview" onClick={this.handleClick}>
                <div className="category-name">
                    {this.props.categoryName}
                </div>
                <div className="contest-name">
                    {this.props.contestName}
                </div>
            </div>
        );
    }

    handleClick() {

    }
}

ContestPreview.propTypes = {
    categoryName: PropTypes.string.isRequired,
    contestName: PropTypes.string.isRequired,
};