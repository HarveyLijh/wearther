import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";

import { useEffect, useState } from "react";
import fetchWeather from "api/fetch_weather";
import MetadataCard from "./components/metadataCard";
import WeatherCard from "./components/weatherCard";

function Weather() {
  const title = "weather";

  const [location, setLocation] = useState();
  const [weather, setWeather] = useState();

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

  useEffect(() => {
    if (!location) return;

    fetchWeather(location.latitude, location.longitude).then((res) => {
      const { rain, description, temp, speed } = res;
      setWeather({
        precipitationChance: rain === "N/A" ? 0 : rain,
        weather: description,
        temperature: temp,
        wind: speed,
        humidity: -1,
      });
    });
  }, [location]);

  return (
    <MDBox>
      {title}
      <Grid container p={2} spacing={3} alignItems="center" justify="center">
        <Grid item xs={12}>
          <WeatherCard
            image="https://bit.ly/3Hlw1MQ"
            weather={weather?.weather}
            temperature={`${weather?.temperature}°C`}
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
