import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push('/')}
      className="ui dimmer modals visiable active"
    >
      <div 
			onClick={(e) => e.stopPropagation()}
			className="ui standard modal visible active">
        <div className="header">스트림 삭제</div>
        <div className="content">해당 게시물을 삭제하시겠습니까?</div>
        <div className="actions">
          <button className="ui primary button">삭제</button>
          <button className="ui button">취소</button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
