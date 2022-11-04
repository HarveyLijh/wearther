import axios from "axios";

const authAxios = axios.create();

authAxios.interceptors.request.use((config) => {
  // add token to request headers
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };
  return { ...config, headers };
});

const logOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  window.location.href = "/authentication/sign-in";
};
authAxios.interceptors.response.use(
  (response) => {
    if (response.data.res_code < -900) logOut();
    return response;
  },
  (error) => {
    if (error.response.status === 401) logOut();
    return Promise.reject(error);
  }
);

export default authAxios;
