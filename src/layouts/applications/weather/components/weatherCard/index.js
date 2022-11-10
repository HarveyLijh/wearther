import MDBox from "components/MDBox";
// @mui material components
// import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";
import PropTypes from "prop-types";

function WeatherCard({ image, weather, temperature }) {
  return (
    <MDBox>
      <Grid container p={2} spacing={3} alignItems="center" justify="center">
        <Grid item xs={12}>
          <MDBox position="relative" borderRadius="lg">
            <MDBox
              component="img"
              src={image}
              alt={weather}
              borderRadius="lg"
              shadow="md"
              width="100%"
              height="100%"
              position="relative"
              zIndex={1}
            />
          </MDBox>
        </Grid>
        <Grid item xs={12}>
          <MDBox p={3} textAlign="center">
            <MDTypography color="white" variant="h3" textTransform="capitalize" fontWeight="bold">
              {weather}
            </MDTypography>
          </MDBox>
        </Grid>
        <Grid item xs={12}>
          <MDBox p={3} textAlign="center">
            <MDTypography color="white" display="inline" variant="h3" fontWeight="bold">
              {temperature}
            </MDTypography>
          </MDBox>
        </Grid>
      </Grid>
    </MDBox>
  );
}

WeatherCard.propTypes = {
  image: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
};

export default WeatherCard;
