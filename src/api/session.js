import axios from "axios";
import BASE_URL from "service";

const login = async (userid, pwd) => {
  const res = await axios
    .post(
      `${BASE_URL}/authentication/users/login/`,
      { user: { username: userid, password: pwd } },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .catch((error) => {
      let msg = "";
      if (axios.isAxiosError(error)) {
        msg = { data: "error" };
      } else {
        msg = { data: "unknown" };
      }
      return msg;
    });
  return res.data;
};

export default login;
