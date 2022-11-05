import MDBox from "components/MDBox";
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import MDTypography from "components/MDTypography";
import PropTypes from "prop-types";

function MetadataCard({ precipitationChance, wind, humidity }) {
  const humidityIcon = "device_thermostat";
  const windIcon = "air";
  const precipitationIcon = "water_drop";
  return (
    <MDBox>
      <Card>
        <Grid container p={2} spacing={3} alignItems="center" justify="center">
          <Grid item xs={4}>
            <MDBox p={3}>
              <MDBox
                display="grid"
                justifyContent="center"
                alignItems="center"
                color="primary"
                width="4rem"
                height="4rem"
                variant="gradient"
              >
                <Icon fontSize="default">{precipitationIcon}</Icon>
              </MDBox>
              <MDTypography display="inline" variant="h3" fontWeight="bold">
                {precipitationChance} %
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={4}>
            <MDBox p={3}>
              <MDBox
                display="grid"
                justifyContent="center"
                alignItems="center"
                color="primary"
                width="4rem"
                height="4rem"
                variant="gradient"
              >
                <Icon fontSize="default">{windIcon}</Icon>
              </MDBox>
              <MDTypography display="inline" variant="h3" fontWeight="bold">
                {wind} km/h
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={4}>
            <MDBox p={3}>
              <MDBox
                display="grid"
                justifyContent="center"
                alignItems="center"
                color="primary"
                width="4rem"
                height="4rem"
                variant="gradient"
              >
                <Icon fontSize="default">{humidityIcon}</Icon>
              </MDBox>
              <MDTypography display="inline" variant="h3" fontWeight="bold">
                {humidity} %
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </Card>
    </MDBox>
  );
}
MetadataCard.defaultProps = {
  precipitationChance: 0,
  wind: 0.0,
  humidity: 0.0,
};

MetadataCard.propTypes = {
  precipitationChance: PropTypes.number,
  wind: PropTypes.number,
  humidity: PropTypes.number,
};

export default MetadataCard;
