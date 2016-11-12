import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setVideo, onSearchTermChange } from '../actions/index';

class SearchBar extends Component {

	onInputChange(term) {
		this.props.setVideo(term);
		this.props.onSearchTermChange(term);
	}
	
	render() {
		return (
			<div className="search-bar">
				<input 
					value={this.props.termValue}
				  onChange={(event) => this.onInputChange(event.target.value)} />
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
	return bindActionCreators({ setVideo, onSearchTermChange }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);