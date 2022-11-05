import MDBox from "components/MDBox";
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";
import PropTypes from "prop-types";

function DateWeatherCard({ image, weather, maxTemp, minTemp, date }) {
  return (
    <MDBox>
      <Card>
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
            <MDBox p={3}>
              <MDTypography display="inline" variant="h3" fontWeight="bold">
                {weather}
              </MDTypography>
              <MDTypography display="inline" variant="h3" fontWeight="bold">
                {date}
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12}>
            <MDBox p={3}>
              <MDTypography display="inline" variant="h3" fontWeight="bold">
                Max: {maxTemp}°C
              </MDTypography>
              <MDTypography display="inline" variant="h3" fontWeight="bold">
                Min: {minTemp}°C
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </Card>
    </MDBox>
  );
}

DateWeatherCard.propTypes = {
  image: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default DateWeatherCard;
