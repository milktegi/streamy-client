import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negative">삭제</button>
      <button className="ui button">취소</button>
    </React.Fragment>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title="스트림 삭제"
        content="해당 게시물을 삭제하시겠습니까?"
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </div>
  );
};

export default StreamDelete;
