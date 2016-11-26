import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setVideo, fetchVideos, toggleRoom } from '../actions/index';

class SearchBar extends Component {
	componentDidMount() {
		this.props.fetchVideos('Kurt Hugo Schneider');
	}
	onInputChange(term) {
		this.props.setVideo(term);
		this.props.fetchVideos(term);
	}
	
	render() {
		if (this.props.room == "light") {
			roomType = light;
		}
		else {
			roomType = dark;
		}
		return (
			<div className="search-bar">
				<input 
					style={roomType}
					value={this.props.termValue}
				  onChange={(event) => this.onInputChange(event.target.value)} 
				  placeholder="Search for video"/>
				<button type="button" className="btn btn-primary buttonStyle" onClick={() => this.props.toggleRoom("dark")}>Dark Mode</button>
				<button type="button" className="btn btn-danger buttonStyle" onClick={() => this.props.toggleRoom("light")}>Light Mode</button>
			</div>
		)
	}
}

var roomType;

var dark = {
	marginLeft: '10px',
	marginTop: '-3px',
	background: '#s1f2123',
	webkitBorderRadius: '5px',
  mozBorderRadius: '5px',
  borderRadius: '5px'
}

var light = {
	marginLeft: '10px',
	marginTop: '-3px',
	webkitBorderRadius: '5px',
  mozBorderRadius: '5px',
  borderRadius: '5px'
}

function mapStateToProps(state) {
	return {
		termValue: state.term.term,
		room: state.room.roomType
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setVideo, fetchVideos, toggleRoom }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);