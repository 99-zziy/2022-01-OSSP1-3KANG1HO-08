import axios from "axios";

/* 액션 타입 만들기 */
export const LOGIN = "user/LOGIN";
export const SIGNUP = "user/SIGNUP";
// export const AUTH = "uesr/AUTH";
export const LOGOUT = "user/LOGOUT";

/* 액션 생성함수 만들기 */
export function handleLogin(dataToSumbit) {
  const request = axios
    .post(`${process.env.REACT_APP_SERVER_URL}/users/login`, dataToSumbit)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
  return {
    type: LOGIN,
    payload: request,
  };
}

export function registerUser(dataToSumbit) {
  const request = axios
    .post(`${process.env.REACT_APP_SERVER_URL}/users/signup`, dataToSumbit)
    .then((response) => response.data);
  return {
    type: SIGNUP,
    payload: request,
  };
}

// export function auth() {
//   const request = axios.get(`user/auth`).then((response) => response.data);

//   return {
//     type: AUTH,
//     payload: request,
//   };
// }

export function logoutUser() {
  const request = axios
    .get(`${process.env.REACT_APP_SERVER_URL}/users/logout`)
    .then((response) => response.data);

  return {
    type: LOGOUT,
    payload: request,
  };
}

/* 초기 상태 선언 */
export const initialState = {
  isLogin: false,
};

/* 리듀서 선언 */
export function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
      };
    case SIGNUP:
      return {
        ...state,
        signup: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
