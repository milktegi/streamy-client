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
    // console.log(userInput);
    const { id } = this.props.match.params;
    this.props.editStream(id, userInput);
  };

  render() {
    if (!this.props.item) {
      return <div>loadidng...</div>;
    } else {
      return (
        <div>
          <h3> 스트림 수정 </h3>
          <StreamForm
            initialValues={_.pick(this.props.item, 'title', 'description')}
            onSubmit={this.onSubmit}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  const { id } = ownProps.match.params;

  return {
    item: state.streams[id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
