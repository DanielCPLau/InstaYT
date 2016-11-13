import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setVideo, fetchVideos } from '../actions/index';

class SearchBar extends Component {
	componentDidMount() {
		this.props.fetchVideos('Kurt Hugo Schneider');
	}
	onInputChange(term) {
		this.props.setVideo(term);
		this.props.fetchVideos(term);
	}
	
	render() {
		return (
			<div className="search-bar">
				<input 
					value={this.props.termValue}
				  onChange={(event) => this.onInputChange(event.target.value)} 
				  placeholder="Search for video"/>
				<button type="button" className="btn btn-primary buttonStyle">Dark Mode</button>
				<button type="button" className="btn btn-danger buttonStyle">Light Mode</button>
			</div>
		)
	}

}

function mapStateToProps(state) {
	return {
		termValue: state.term.term
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setVideo, fetchVideos }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);