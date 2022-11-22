import MDBox from "components/MDBox";
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";
import PropTypes from "prop-types";

function DateWeatherCard({ city, image, weather, maxTemp, minTemp, windSpeed, date, clothings }) {
  const styles = {
    modalBox: {
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      position: "absolute",
      zIndex: 10,
      textAlign: "center",
      padding: "2rem",
      paddingTop: "5rem",
      borderRadius: "10px",
    },
    clothCard: {
      // backgroundColor: "rgba(0, 0, 0, 0.5)",
      // padding: "2px",
      // borderRadius: "10px",
    },
  };
  return (
    <MDBox>
      <Card sx={{ backgroundColor: "dark.main", color: "white" }}>
        {/* show when user doesn't select any date */}
        {weather === "Unavailable" ? (
          <MDBox style={styles.modalBox}>
            <MDTypography mt="50%" color="white" display="inline" variant="h4" fontWeight="bold">
              Please choose a date in the calendar above to review historical weather data
            </MDTypography>
          </MDBox>
        ) : null}
        <Grid container p={2} spacing={3} alignItems="center" justify="center">
          {/* upper row */}
          <Grid item xs={12}>
            <Grid container pl={2} pt={2} spacing={0} alignItems="top" justify="center">
              {/* image */}
              <Grid item xs={5} md={3}>
                <MDBox position="relative" borderRadius="lg" height="100px">
                  {image && (
                    <MDBox component="img" src={image} alt={weather} width="100%" height="100%" />
                  )}
                </MDBox>
              </Grid>
              {/* place holder in between */}
              <Grid item xs={1} md={5}>
                <MDBox />
              </Grid>
              {/* date  */}
              <Grid item xs={6} md={4}>
                <MDTypography
                  color={date === "Unavailable" ? "dark" : "white"}
                  variant="body1"
                  fontWeight="regular"
                >
                  {date}
                </MDTypography>
                <MDTypography
                  color={date === "Unavailable" ? "dark" : "primary"}
                  variant="body1"
                  fontWeight="regular"
                >
                  {city}
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
                      color={weather === "Unavailable" ? "dark" : "white"}
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
                      color={maxTemp === "Unavailable" ? "dark" : "white"}
                      display="inline"
                      variant="body2"
                      fontWeight="regular"
                    >
                      Max: {maxTemp}
                    </MDTypography>
                  </Grid>
                  {/* min temp */}
                  <Grid item xs={12}>
                    <MDTypography
                      color={minTemp === "Unavailable" ? "dark" : "white"}
                      display="inline"
                      variant="body2"
                      fontWeight="regular"
                    >
                      Min: {minTemp}
                    </MDTypography>
                  </Grid>
                  {/* wind speed */}
                  <Grid item xs={12}>
                    <MDTypography
                      color={windSpeed === "Unavailable" ? "dark" : "white"}
                      display="inline"
                      variant="body2"
                      fontWeight="regular"
                    >
                      Wind: {windSpeed}
                    </MDTypography>
                  </Grid>
                </Grid>
              </Grid>
              {/* place holder in between */}
              <Grid item xs={0} md={3}>
                <MDBox />
              </Grid>
              {/* col for clothings */}
              <Grid item xs={6} md={4}>
                <Grid container pl={0} spacing={0} alignItems="top" justify="center">
                  {clothings?.top_optional_1[0] && (
                    <Grid item xs={12}>
                      <MDTypography
                        noWrap
                        style={styles.clothCard}
                        textTransform="capitalize"
                        color={minTemp === "Unavailable" ? "dark" : "white"}
                        display="inline"
                        variant="body1"
                        fontWeight="regular"
                      >
                        {clothings.top_optional_1[0].model.replaceAll("-", " ")}
                      </MDTypography>
                    </Grid>
                  )}

                  {clothings?.top_required[0] && (
                    <Grid item xs={12}>
                      <MDTypography
                        noWrap
                        style={styles.clothCard}
                        textTransform="capitalize"
                        color={minTemp === "Unavailable" ? "dark" : "white"}
                        display="inline"
                        variant="body1"
                        fontWeight="regular"
                      >
                        {clothings.top_required[0].model.replaceAll("-", " ")}
                      </MDTypography>
                    </Grid>
                  )}

                  {clothings?.bottomwear[0] && (
                    <Grid item xs={12}>
                      <MDTypography
                        noWrap
                        style={styles.clothCard}
                        textTransform="capitalize"
                        color={minTemp === "Unavailable" ? "dark" : "white"}
                        display="inline"
                        variant="body1"
                        fontWeight="regular"
                      >
                        {clothings.bottomwear[0].model.replaceAll("-", " ")}
                      </MDTypography>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </MDBox>
  );
}
DateWeatherCard.defaultProps = {
  image: undefined,
  city: "Unavailable",
  weather: "Unavailable",
  maxTemp: "Unavailable",
  minTemp: "Unavailable",
  windSpeed: "Unavailable",
  date: "Unavailable",
  clothings: {
    bottomwear: [
      {
        model: "Unavailable",
      },
    ],
    top_optional_1: [
      {
        model: "Unavailable",
      },
    ],
    top_required: [
      {
        model: "Unavailable",
      },
    ],
  },
};
DateWeatherCard.propTypes = {
  image: PropTypes.string,
  city: PropTypes.string,
  weather: PropTypes.string,
  maxTemp: PropTypes.string,
  minTemp: PropTypes.string,
  windSpeed: PropTypes.string,
  date: PropTypes.string,
  clothings: PropTypes.shape({
    bottomwear: PropTypes.arrayOf(
      PropTypes.shape({
        model: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    top_required: PropTypes.arrayOf(
      PropTypes.shape({
        model: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    top_optional_1: PropTypes.arrayOf(
      PropTypes.shape({
        model: PropTypes.string.isRequired,
      }).isRequired
    ),
  }),
};

export default DateWeatherCard;
