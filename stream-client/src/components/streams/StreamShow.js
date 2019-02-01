import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }

  render() {
    return (
      <div>
        streamList
        {this.props.item ? (
          <div>
            {this.props.item.title}
            {this.props.item.description}
          </div>
        ) : (
          ''
        )}
      </div>
    );
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
  { fetchStream }
)(StreamShow);
