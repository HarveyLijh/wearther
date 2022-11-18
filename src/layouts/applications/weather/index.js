import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

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
import { useEffect, useState } from "react";
import fetchWeather from "api/fetch_weather";
import MetadataCard from "./components/metadataCard";
import WeatherCard from "./components/weatherCard";

function Weather({ latitude, longitude }) {
  const title = "Weather";
  const [weather, setWeather] = useState("unavailable");
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

  useEffect(() => {
    if (!latitude || !longitude) return;

    fetchWeather(latitude, longitude).then((res) => {
      // console.log(res);
      const { rain, feels_like, humidity, description, temp, speed, temp_min, temp_max } = res;
      setWeather({
        precipitationChance: rain === "N/A" ? 0 : rain,
        weather: description,
        minTemp: Math.round(temp_min),
        maxTemp: Math.round(temp_max),
        temperature: Math.round(temp),
        feelslike: Math.round(feels_like),
        image: getImage(description),
        wind: speed,
        humidityVal: humidity,
      });
    });
  }, [Math.round(latitude), Math.round(longitude)]);

  return (
    <MDBox color="white">
      {title}
      <Grid container p={2} spacing={3} alignItems="center" justify="center">
        <Grid item xs={12}>
          <WeatherCard
            image={weather?.image}
            weather={weather?.weather}
            temperature={weather?.temperature}
            minTemp={weather?.minTemp}
            maxTemp={weather?.maxTemp}
            feelslike={weather?.feelslike}
          />
        </Grid>
        <Grid item xs={12}>
          <MetadataCard
            precipitationChance={weather?.precipitationChance}
            wind={weather?.wind}
            humidity={weather?.humidityVal}
          />
        </Grid>
      </Grid>
    </MDBox>
  );
}
Weather.defaultProps = {
  latitude: 37.7749,
  longitude: -122.4194,
};
Weather.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

export default Weather;
