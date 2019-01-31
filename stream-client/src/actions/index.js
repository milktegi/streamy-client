import streams from '../api/streams';
import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from './types';

export const signIn = (userId) => {
  return {
    type: 'SIGN_IN',
    payload: userId
  };
};
export const signOut = () => {
  return {
    type: 'SIGN_OUT'
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