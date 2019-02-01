import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteStream(id)} className="ui button negative">
          삭제
        </button>
        <Link to="/" className="ui button">
          취소
        </Link>
      </React.Fragment>
    );
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }

  renderContent = () => {
    if (!this.props.item) {
      return '해당 게시물을 삭제하시겠습니까?';
    }
    return `${this.props.item.title} 해당 게시물을 삭제하시나여?`;
  };

  render() {
    return (
      <Modal
        title="스트림 삭제"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
