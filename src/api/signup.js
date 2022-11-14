import axios from "axios";
import BASE_URL from "service";

const signup = async (userid, emailVal, pwd) => {
  const res = await axios.post(
    `${BASE_URL}/authentication/users/register/`,
    { user: { username: userid, email: emailVal, password: pwd, is_staff: false, gender: "M" } },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

export default signup;
