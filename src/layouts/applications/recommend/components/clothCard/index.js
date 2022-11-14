import MDBox from "components/MDBox";
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";
import PropTypes from "prop-types";

function ClothCard({ item }) {
  return (
    <MDBox>
      <Card sx={{ backgroundColor: "dark.main", color: "white" }}>
        <Grid container p={5} spacing={3} alignItems="center" justify="center">
          <Grid item xs={5}>
            <MDBox position="relative" borderRadius="lg">
              <MDBox
                component="img"
                src={item.picture}
                alt={item.model}
                width="80%"
                position="relative"
                zIndex={1}
              />
            </MDBox>
          </Grid>
          <Grid item xs={7}>
            <MDBox mt={-5} p={3}>
              <MDTypography
                color="white"
                display="inline"
                variant="h3"
                textTransform="capitalize"
                fontWeight="regular"
              >
                {item.model}
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </Card>
    </MDBox>
  );
}

ClothCard.propTypes = {
  item: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
  }).isRequired,
};

export default ClothCard;
