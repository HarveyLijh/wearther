import axios from "axios";
import BASE_URL from "service";

const fetchRecommendation = async (tempature) => {
  const res = await axios.post(
    `${BASE_URL}/outfits/masterapi/getsuggestions/`,
    { temp: tempature },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return res.data;
};

export default fetchRecommendation;
