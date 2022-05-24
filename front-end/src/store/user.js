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

export function auth(payload) {
  return {
    type: AUTH,
    payload,
  };
}

export function logoutUser(payload) {
  console.log(payload);
  return {
    type: LOGOUT,
    payload,
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
        userId: action.payload.userId,
      };
    case SIGNUP:
      return {
        ...state,
        signup: action.payload,
      };
    case AUTH:
      return {
        ...state,
        userData: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: action.payload.isLogin,
      };
    default:
      return state;
  }
}
