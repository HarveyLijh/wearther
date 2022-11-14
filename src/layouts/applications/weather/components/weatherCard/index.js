import MDBox from "components/MDBox";
// @mui material components
// import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";
import PropTypes from "prop-types";

function WeatherCard({ image, weather, temperature, maxTemp, minTemp }) {
  return (
    <MDBox>
      <Grid container p={2} spacing={3} alignItems="center" justify="center">
        <Grid item xs={12}>
          <MDBox position="relative" borderRadius="lg" textAlign="center">
            <MDBox
              component="img"
              src={image}
              alt={weather}
              width="30%"
              position="relative"
              zIndex={1}
            />
          </MDBox>
        </Grid>

        <Grid item xs={12}>
          <MDBox p={2} textAlign="center">
            <MDTypography color="white" display="inline" variant="h1" fontWeight="bold">
              {temperature}°C
            </MDTypography>
          </MDBox>
        </Grid>
        <Grid mt={-3} item xs={12} textAlign="center">
          <MDTypography
            color="white"
            variant="body1"
            textTransform="capitalize"
            fontWeight="regular"
          >
            {weather}
          </MDTypography>
        </Grid>
        <Grid mt={-3} item xs={12} textAlign="center">
          <MDTypography color="white" variant="body1" fontWeight="regular">
            Max: {maxTemp}°C Min: {minTemp}°C
          </MDTypography>
        </Grid>
      </Grid>
    </MDBox>
  );
}

WeatherCard.propTypes = {
  image: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
};

export default WeatherCard;
