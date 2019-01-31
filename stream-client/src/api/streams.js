// axios 인스턴스 생성

import axios from 'axios';

export default axios.create({
	baseURL: 'http://localhost:3001'
})