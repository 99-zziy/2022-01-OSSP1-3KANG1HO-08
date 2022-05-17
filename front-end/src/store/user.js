/* 액션 타입 만들기 */
export const LOGIN = "user/LOGIN";

/* 액션 생성함수 만들기 */
export const handleLogin = (isLogin) => ({
  type: LOGIN,
  isLogin,
});

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
    default:
      return state;
  }
}
