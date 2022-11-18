import axios from "axios";
import BASE_URL from "service";

const fetchUsedDates = async () => {
  const res = await axios.post(
    `${BASE_URL}/outfits/masterapi/getsaveddates/`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        withCredentials: true,
      },
    }
  );
  return res.data;
};

export default fetchUsedDates;
