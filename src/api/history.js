import axios from "axios";
import BASE_URL from "service";

const fetchHistory = async (dateString) => {
  const res = await axios.post(
    `${BASE_URL}/outfits/masterapi/fetchhistory/`,
    { date: dateString },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        withCredentials: true,
      },
    }
  );
  return res.data;
};

export default fetchHistory;
