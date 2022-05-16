import { user } from "../store/user";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

//local storage 불러오기
import storage from "redux-persist/lib/storage";

//persist 설정
const persistConfig = {
  key: "root",
  storage, // localStorage
};

const rootReducer = combineReducers({
  user,
});

// persistedReducer 생성
export default persistReducer(persistConfig, rootReducer);
