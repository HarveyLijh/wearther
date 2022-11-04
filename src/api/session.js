import axios from "axios";
import BASE_URL from "service";

const login = async (userid, pwd) => {
  const res = await axios.post(
    `${BASE_URL}/authentication/users/login/`,
    { user: { username: userid, password: pwd } },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

export default login;
