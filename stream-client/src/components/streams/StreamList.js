import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  render() {
    console.log(this.props.streams);
    return <div>StreamList</div>;
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
