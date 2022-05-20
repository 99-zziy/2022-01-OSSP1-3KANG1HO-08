import api from "./index";

export const Login = async (dataToSumbit) => {
  const response = await api.post(
    `${process.env.REACT_APP_SERVER_URL}/users/login`,
    dataToSumbit
  );
  return response.data;
};

export const Signup = async (dataToSumbit) => {
  const response = await api.post(
    `${process.env.REACT_APP_SERVER_URL}/users/signup`,
    dataToSumbit
  );
  return response.data;
};

export const Auth = async () => {
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/users/auth`
  );
  return response.data;
};
