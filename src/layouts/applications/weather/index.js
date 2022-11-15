import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";

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
} from "constant/imgMatching";
import { useEffect, useState } from "react";
import fetchWeather from "api/fetch_weather";
import MetadataCard from "./components/metadataCard";
import WeatherCard from "./components/weatherCard";

function Weather() {
  const title = "Weather";

  const [location, setLocation] = useState("unavailable");
  const [weather, setWeather] = useState("unavailable");

  useEffect(() => {
    const { geolocation } = navigator;

    // If the geolocation is not defined in the used browser we handle it as an error
    if (!geolocation) {
      return;
    }

    // Call Geolocation API
    geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setLocation({
        latitude,
        longitude,
      });
    });
  });

  const getImage = (weatherVal) => {
    switch (weatherVal) {
      case "clear sky":
        return CLEAR_SKY;
      case "scattered clouds":
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
    if (!location) return;

    fetchWeather(location.latitude, location.longitude).then((res) => {
      console.log(res);
      const { rain, description, temp, speed, temp_min, temp_max } = res;
      setWeather({
        precipitationChance: rain === "N/A" ? 0 : rain,
        weather: description,
        minTemp: Math.round(temp_min),
        maxTemp: Math.round(temp_max),
        temperature: Math.round(temp),
        image: getImage(description),
        wind: speed,
        humidity: 0,
      });
      localStorage.setItem("temperature", JSON.stringify(Math.round(temp)));
    });
  }, [Math.round(location.latitude), Math.round(location.longitude)]);

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
          />
        </Grid>
        <Grid item xs={12}>
          <MetadataCard
            precipitationChance={weather?.precipitationChance}
            wind={weather?.wind}
            humidity={weather?.humidity}
          />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Weather;
