import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setRelatedVideo, fetchRelatedVideos } from '../actions/index';

class RelatedSearchBar extends Component {
	onInputChange(term) {
    this.props.setRelatedVideo(term);
		this.props.fetchRelatedVideos(term);
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
					value={this.props.relatedTermValue}
				  onChange={(event) => this.onInputChange(event.target.value)}
				  placeholder="Or Search for other videos"
					style={{width: '100%', margin: '0 9px 0 9px', padding: '0 4px 0 4px'}}/>
			</div>
		)
	}
}

var roomType = {
	webkitBorderRadius: '5px',
  mozBorderRadius: '5px',
  borderRadius: '5px'
}

function mapStateToProps(state) {
	return {
		relatedTermValue: state.term.relatedTermValue,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchRelatedVideos, setRelatedVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedSearchBar);
