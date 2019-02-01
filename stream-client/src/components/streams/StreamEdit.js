import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {

  componentDidMount() {
 
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) {
      return <div>loading...</div>;
    } else {
      return <div>{this.props.stream.title}</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  const { id } = ownProps.match.params;
  console.log('맵스투', id);

  return {
    stream: state.streams[id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamEdit);
