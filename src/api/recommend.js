import axios from "axios";
import BASE_URL from "service";

const fetchRecommendation = async (weatherRes) => {
  const res = await axios.post(
    `${BASE_URL}/outfits/masterapi/getsuggestions/`,
    { weather: weatherRes },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        withCredentials: true,
      },
    }
  );
  return res.data;
};

export default fetchRecommendation;
