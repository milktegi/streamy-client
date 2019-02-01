import streams from '../api/streams';

import history from '../history';

import { 
  SIGN_IN, 
  SIGN_OUT, 
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM 
} from './types';



export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};


// form values
// 스토어에 있는 객체를
// 배열로 변경해서 리턴
// ++ userId속성을 추가해서 
// 서버에 보낼 거임
// getState는 현재 스토어 상태를 리턴
/**
 *  컴바인 리듀서에 있는 객체가
 *  스토어의 프로퍼티 
 *auth: authReducer,
	form: formReducer,
	streams: streamReducer 
 * userId는 auth에 있으니까 
  getState().auth.userId로 접근 가능
 */
export const createStream = userInput => async (dispatch, getState) => {

  const { userId } = getState().auth;
  const response = await streams.post('/streams', 
   {
     ...userInput,
     userId
   }
  );
  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  })
  history.push('/');

}

// 배열 요청
export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data
  })
} 

// 싱글 데이터 id로 조회
export const fetchStream = (id) => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({
    type: FETCH_STREAM,
    payload: response.data
  })
} 

// 수정 
// id랑 수정할 데이터 
export const editStream = (id, userInput) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, userInput);
  dispatch({
    type: EDIT_STREAM,
    payload: response.data
  })
  history.push('/');
} 

// 삭제 
// id 보내고
// 리턴받는 거는 없음  
export const deleteStream = (id) => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({
    type: DELETE_STREAM,
    payload: id
  })
} 
