import React, { Component } from 'react';

class GoogleAuth extends Component {
  //auth 상태 초기화
  state = {
    isSignedIn: null
  };

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
          // this.setState({
          // 	isSignedIn: this.auth.isSignedIn.get()
          // });
          this.onAuthChange();
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
  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get()
    });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
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

export default GoogleAuth;
