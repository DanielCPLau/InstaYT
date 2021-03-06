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
			<div className="search-bar"
        style={{
          width: '95%',
          textAlign: 'center',
					marginBottom: '9px'
        }}>
				<input
					style={roomType}
					value={this.props.termValue}
				  onChange={(event) => this.onInputChange(event.target.value)}
				  placeholder="Search for videos"
					style={{width: '100%', margin: '0 9px 0 9px', padding: '0 4px 0 4px'}}/>
			</div>
		)
	}
}

var roomType = {
	marginTop: '-3px',
	webkitBorderRadius: '5px',
  mozBorderRadius: '5px',
  borderRadius: '5px'
}

function mapStateToProps(state) {
	return {
		termValue: state.term.term,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setVideo, fetchVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
