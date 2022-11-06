import MDBox from "components/MDBox";
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";
import PropTypes from "prop-types";

function DateWeatherCard({ image, weather, maxTemp, minTemp, windSpeed, date, clothings }) {
  return (
    <MDBox>
      <Card sx={{ backgroundColor: "dark.main", color: "white" }}>
        <Grid container p={2} spacing={3} alignItems="center" justify="center">
          {/* upper row */}
          <Grid item xs={12}>
            <Grid container pl={2} pt={2} spacing={0} alignItems="top" justify="center">
              {/* image */}
              <Grid item xs={5} md={3}>
                <MDBox position="relative" borderRadius="lg">
                  <MDBox component="img" src={image} alt={weather} width="100%" height="100%" />
                </MDBox>
              </Grid>
              {/* place holder in between */}
              <Grid item xs={1} md={6}>
                <MDBox />
              </Grid>
              {/* date  */}
              <Grid item xs={6} md={3}>
                <MDTypography color="white" display="inline" variant="body1" fontWeight="regular">
                  {date}
                </MDTypography>
              </Grid>
            </Grid>
          </Grid>
          {/* lower row */}
          <Grid item xs={12}>
            <Grid container pl={2} spacing={0} alignItems="top" justify="center">
              {/* col for metadata */}
              <Grid item xs={6} md={5}>
                <Grid container pl={0} spacing={0} alignItems="center" justify="center">
                  {/* weather */}
                  <Grid item xs={12}>
                    <MDTypography
                      textTransform="capitalize"
                      color="white"
                      display="inline"
                      variant="body1"
                      fontWeight="bold"
                    >
                      {weather}
                    </MDTypography>
                  </Grid>
                  {/* max temp */}
                  <Grid item xs={12}>
                    <MDTypography
                      color="white"
                      display="inline"
                      variant="body2"
                      fontWeight="regular"
                    >
                      Max: {maxTemp}°C
                    </MDTypography>
                  </Grid>
                  {/* min temp */}
                  <Grid item xs={12}>
                    <MDTypography
                      color="white"
                      display="inline"
                      variant="body2"
                      fontWeight="regular"
                    >
                      Min: {minTemp}°C
                    </MDTypography>
                  </Grid>
                  {/* wind speed */}
                  <Grid item xs={12}>
                    <MDTypography
                      color="white"
                      display="inline"
                      variant="body2"
                      fontWeight="regular"
                    >
                      Wind: {windSpeed}km/h
                    </MDTypography>
                  </Grid>
                </Grid>
              </Grid>
              {/* place holder in between */}
              <Grid item xs={0} md={4}>
                <MDBox />
              </Grid>
              {/* col for clothings */}
              <Grid item xs={6} md={3}>
                <Grid container pl={0} spacing={0} alignItems="top" justify="center">
                  {clothings.map((clothing, id) => (
                    <Grid item xs={12} key={clothing + Math.random(id)}>
                      <MDTypography
                        textTransform="capitalize"
                        color="white"
                        display="inline"
                        variant="body1"
                        fontWeight="regular"
                      >
                        {clothing}
                      </MDTypography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
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
  windSpeed: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  clothings: PropTypes.arrayOf(String).isRequired,
};

export default DateWeatherCard;
