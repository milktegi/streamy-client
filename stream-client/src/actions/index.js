import streams from '../api/streams';
<<<<<<< HEAD
import { SIGN_IN, SIGN_OUT } from './types';
=======
import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from './types';
>>>>>>> REST4

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

<<<<<<< HEAD
// handle form values
export const createStream = userInput => async dispatch => {
  streams.post('/streams', userInput);
=======
// form values
export const createStream = userInput => async dispatch => {
  const response = await streams.post('/streams', userInput);
  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  })
>>>>>>> REST4
}