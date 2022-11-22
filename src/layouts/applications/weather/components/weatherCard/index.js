import MDBox from "components/MDBox";
// @mui material components
// import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";
import PropTypes from "prop-types";

function WeatherCard({ city, image, weather, feelslike, temperature, maxTemp, minTemp }) {
  return (
    <MDBox>
      <Grid container p={2} spacing={3} alignItems="center" justify="center">
        <Grid item xs={12}>
          <MDBox
            alignItems="center"
            justify="center"
            position="relative"
            borderRadius="lg"
            textAlign="center"
            minHeight="150px"
          >
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
            <MDTypography color="white" variant="h1" fontWeight="bold">
              {temperature}
            </MDTypography>
            <MDTypography color="primary" variant="h3" fontWeight="regular">
              {city}
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
            Max: {maxTemp} Min: {minTemp}
          </MDTypography>
          <MDTypography color="white" variant="body1" fontWeight="regular">
            Feels like: {feelslike}
          </MDTypography>
        </Grid>
      </Grid>
    </MDBox>
  );
}

WeatherCard.defaultProps = {
  image: "Unavailable",
  weather: "Unavailable",
  temperature: "Unavailable",
  maxTemp: "Unavailable",
  minTemp: "Unavailable",
  feelslike: "Unavailable",
  city: "Unavailable",
};
WeatherCard.propTypes = {
  image: PropTypes.string,
  weather: PropTypes.string,
  temperature: PropTypes.string,
  maxTemp: PropTypes.string,
  minTemp: PropTypes.string,
  feelslike: PropTypes.string,
  city: PropTypes.string,
};

export default WeatherCard;
