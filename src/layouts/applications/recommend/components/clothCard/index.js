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
        <Grid container p={2} spacing={3} alignItems="center" justify="center">
          <Grid item xs={5}>
            <MDBox position="relative" borderRadius="lg">
              <MDBox
                component="img"
                src={item.image}
                alt={item.clothName}
                borderRadius="lg"
                shadow="md"
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
                {item.clothName}
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
    image: PropTypes.string.isRequired,
    clothName: PropTypes.string.isRequired,
  }).isRequired,
};

export default ClothCard;
