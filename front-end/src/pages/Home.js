import React, { useReducer } from "react";
import { handleLogin, initialState, user } from "../store/user";

function Home() {
  const [state, dispatch] = useReducer(user, initialState);

  console.log(state);
  // dispatch(handleLogin(true));

  return (
    <div>
      <p>Home</p>
    </div>
  );
}

export default Home;
