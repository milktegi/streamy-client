import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderEditOrDelete = stream => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui inverted blue button">수정</button>
          <button className="ui inverted orange button">삭제</button>
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

  render() {
    return (
      <div>
        <h2>스트림</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
