import * as types from '../constants/actionTypes';
// import { history } from '../helpers/history';


function signupReducer(state = {}, action) {
  switch (action.type) {
    case types.SIGN_UP:
      fetch('http://localhost:3000/signup', action.payload)
        .then((response) => {
          response.json()
            .then(data => {
              console.log(data);
              // history.push('/login');
            });
        }).catch(err => console.log(err));
      return null;
    default:
      return state;
  }
}

export default signupReducer;
