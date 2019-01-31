import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';

class GoogleAuth extends Component {

  componentDidMount() {
    // 윈도우 써줘야 함
    // 라이브러리가 성공적으로
    // 로드 된 후에만
    // 콜백으로 실행 됨
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '319997226357-rn7jm8d5t48eobp2lhqn1oqjam3n0ifc.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
         this.onAuthChange(this.auth.isSignedIn.get())
 
          // 콜백 함수
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  // 유저 auth 업데이트를 핸들링
  onAuthChange = (isSignedIn) => {
    if(isSignedIn){
      //유저 id를 스토어에 저장할 거라서
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="ui google plus button">
          <i name="google plus icon"></i>
					{'     '}구글 계정으로 로그아웃
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="ui google plus button">
          <i name="google plus icon"></i>
					{'     '}구글 계정으로 로그인
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    // userId: state.auth.userId
  }
}

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
