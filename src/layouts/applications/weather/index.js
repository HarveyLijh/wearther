import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

import getImage from "constant/getWeatherImage";
import { useEffect, useState } from "react";
import fetchWeather from "api/weather";
import MetadataCard from "./components/metadataCard";
import WeatherCard from "./components/weatherCard";

function Weather({ latitude, longitude }) {
  const title = "Weather";
  const [weather, setWeather] = useState("unavailable");

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
