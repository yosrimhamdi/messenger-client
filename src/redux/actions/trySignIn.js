import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toastr } from 'react-redux-toastr';

import { AUTH_LOADING } from '@types';

const trySignIn = formValues => async dispatch => {
  const { email, password } = formValues;

  try {
    dispatch({ type: AUTH_LOADING, payload: true });

    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);

    toastr.success('Success', ' Logged in');
  } catch (e) {
    toastr.error('Error', e.message);
  }

  dispatch({ type: AUTH_LOADING, payload: false });
};
export default trySignIn;
