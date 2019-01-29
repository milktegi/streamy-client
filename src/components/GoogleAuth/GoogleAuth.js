import React, { Component } from 'react'

class GoogleAuth extends Component {

	//auth 상태 초기화
	state = {
		isSignedIn: null
	}

	componentDidMount(){
		// 윈도우 써줘야 함
		// 라이브러리가 성공적으로
		// 로드 된 후에만 
		// 콜백으로 실행 됨
		window.gapi.load('client:auth2', ()=> {
			window.gapi.client.init({
				clientId: '319997226357-rn7jm8d5t48eobp2lhqn1oqjam3n0ifc.apps.googleusercontent.com',
				scope: 'email'
			})
			.then(()=>{
				this.auth = window.gapi.auth2.getAuthInstance();
				// this.setState({
				// 	isSignedIn: this.auth.isSignedIn.get()
				// });
				this.onAuthChange();
				// 콜백 함수 
				this.auth.isSignedIn.listen(this.onAuthChange);
			})
		})
	}

	// 유저 auth 업데이트를 핸들링
	onAuthChange = () => {
		this.setState({
			isSignedIn: this.auth.isSignedIn.get()
		})
	}

	renderAuthButton(){
		if(this.state.isSignedIn === null){
			return null;
		} else if(this.state.isSignedIn){
			return (
				<button 
			
				className="ui red google button">
					<i 
					style={{ display: 'inline'}}
					className="google icon">
						{'     '}구글 계정으로 로그아웃
					</i>
				</button>
			)
		} else {
			return (
				<button 
				style={{ display: 'inline'}}
				className="ui red google button">
					<i className="google icon">
						{'     '}구글 계정으로 로그인
					</i>
				</button>
			)
		}
	}

	render() {
		return (
			<div>
				{this.renderAuthButton()}
			</div>
		)
	}
}

export default GoogleAuth;