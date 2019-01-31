import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList = () => {
    return this.props.streams.map(el => {
      return (
        <div className="item" key={el.id}>
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

// 스토어에 있는 객체를
// 배열로 변경해서 리턴
const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams)
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
