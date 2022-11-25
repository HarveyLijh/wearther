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
  const [weather, setWeather] = useState("Loading...");

  useEffect(() => {
    if (!latitude || !longitude) return;

    fetchWeather(latitude, longitude).then((res) => {
      // console.log(res);
      const { name, rain, feels_like, humidity, description, temp, speed, temp_min, temp_max } =
        res;
      setWeather({
        city: name,
        precipitationChance: rain === "N/A" ? "0 %" : `${rain?.toString()} °$`,
        weather: description,
        temperature: `${Math.round(temp).toString()} °C`,
        feelslike: `${Math.round(feels_like).toString()} °C`,
        minTemp: `${Math.round(temp_min).toString()} °C`,
        maxTemp: `${Math.round(temp_max).toString()} °C`,
        image: getImage(description),
        wind: `${speed.toString()} km/h`,
        humidityVal: `${humidity.toString()} %`,
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
            city={weather?.city}
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
  latitude: undefined,
  longitude: undefined,
};
Weather.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

export default Weather;
