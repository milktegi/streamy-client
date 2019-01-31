import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

import { Link } from 'react-router-dom';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderEditOrDelete = stream => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
  <Link to={`streams/edit/${stream.id}`} className="ui primary button">수정</Link>
          <button className="ui yellow button">삭제</button>
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.streams.map(el => {
      return (
        <div className="item" key={el.id}>
          {this.renderEditOrDelete(el)}
          <i className="large middle aligned icon camera"> </i>
          <div className="content">
            {el.title}
            <div className="description">{el.description}</div>
          </div>
        </div>
      );
    });
  };

  renderCreate = () => {
    if(this.props.isSignedIn){
      return (
        <div>
          <Link to="/streams/new" className="ui button primary">
            CreateStream
          </Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h2>스트림</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
