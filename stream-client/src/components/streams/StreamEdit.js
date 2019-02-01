import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  //콜백
  onSubmit = userInput => {
    console.log(userInput);
  };

  render() {
    // if(!this.props.streams){
    //   return (
    //     <div>
    //       loadidng...
    //     </div>
    //   )
    // }

    return (
      <div>
        <h3> 스트림 수정 </h3>
        <StreamForm
        initialValues={_.pick(this.props.stream, 'title', 'description')} 
        onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  const { id } = ownProps.match.params;

  return {
    stream: state.streams[id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
