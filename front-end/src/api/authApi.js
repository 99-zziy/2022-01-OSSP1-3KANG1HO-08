import api from "./index";

export const Login = async (dataToSumbit) => {
  const response = await api.post(
    `${process.env.REACT_APP_SERVER_URL}/users/login`,
    dataToSumbit
  );
  return response.data;
};
