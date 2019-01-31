import streams from '../api/streams';
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
export const createStream = userInput => async dispatch => {
  const response = await streams.post('/streams', userInput);
  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  })
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
  const response = await streams.put(`/streams/${id}`, userInput);
  dispatch({
    type: EDIT_STREAM,
    payload: response.data
  })
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