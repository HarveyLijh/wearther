import {
  CLEAR_SKY,
  SCATTERED_CLOUDS,
  FEW_CLOUDS,
  BROKEN_CLOUDS,
  SHOWER_RAIN,
  RAIN,
  THUNDERSTORM,
  SNOW,
  MIST,
} from "constant/weatherMatching";

const getImage = (weatherVal) => {
  switch (weatherVal) {
    case "clear sky":
      return CLEAR_SKY;
    case "scattered clouds":
      return SCATTERED_CLOUDS;
    case "overcast clouds":
      return SCATTERED_CLOUDS;
    case "few clouds":
      return FEW_CLOUDS;
    case "broken clouds":
      return BROKEN_CLOUDS;
    case "shower rain":
      return SHOWER_RAIN;
    case "rain":
      return RAIN;
    case "thunderstorm":
      return THUNDERSTORM;
    case "snow":
      return SNOW;
    case "mist":
      return MIST;
    default:
      return CLEAR_SKY;
  }
};
export default getImage;
