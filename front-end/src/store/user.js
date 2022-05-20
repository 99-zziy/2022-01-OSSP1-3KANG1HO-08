import axios from "axios";

/* 액션 타입 만들기 */
export const LOGIN = "user/LOGIN";
export const SIGNUP = "user/SIGNUP";
export const AUTH = "user/AUTH";
export const LOGOUT = "user/LOGOUT";

/* 액션 생성함수 만들기 */
export function handleLogin(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

export function registerUser(payload) {
  return {
    type: SIGNUP,
    payload,
  };
}

export function auth() {
  return {
    type: AUTH,
  };
}

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
  console.log(action);
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: action.payload.isLogin,
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
