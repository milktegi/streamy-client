import React, { Component } from 'react'

class GoogleAuth extends Component {

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
		})
	}

	render() {
		return (
			<div>
				google auth
			</div>
		)
	}
}

export default GoogleAuth;