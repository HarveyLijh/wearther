import axios from "axios";
import BASE_URL from "service";

const fetchWeather = async (lat, lon) => {
  const res = await axios.get(`${BASE_URL}/weather/fetchcurrent/`, {
    params: { lat, lon },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return res.data;
};

export default fetchWeather;
