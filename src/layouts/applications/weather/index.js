import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";

import MetadataCard from "./components/metadataCard";
import WeatherCard from "./components/weatherCard";

function Weather() {
  const title = "weather";

  return (
    <MDBox>
      {title}
      <Grid container p={2} spacing={3} alignItems="center" justify="center">
        <Grid item xs={12}>
          <WeatherCard image="https://bit.ly/3Hlw1MQ" weather="Sunny" temperature="70 F" />
        </Grid>
        <Grid item xs={12}>
          <MetadataCard precipitationChance={16} wind={20} humidity={11} />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Weather;
