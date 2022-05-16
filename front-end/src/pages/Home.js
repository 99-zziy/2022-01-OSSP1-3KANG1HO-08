import React, { useReducer, Suspense } from "react";
import { handleLogin, initialState, user } from "../store/user";

function Home() {
  const [state, dispatch] = useReducer(user, initialState);

  console.log(state);
  // dispatch(handleLogin(true));

  return <p>Home</p>;
}

export default Home;
