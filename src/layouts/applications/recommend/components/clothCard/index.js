import MDBox from "components/MDBox";
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";
import Carousel from "react-material-ui-carousel";
import PropTypes from "prop-types";

function ClothCard({ items }) {
  const styles = {
    indicatorBtn: {
      fontSize: "16px",
      color: "dark.main",
    },
  };
  return (
    <MDBox>
      <Card sx={{ backgroundColor: "dark.main", color: "white" }}>
        <Carousel
          indicatorIconButtonProps={{ style: styles.indicatorBtn }}
          autoPlay={false}
          swipe={false}
        >
          {items.map((item, i) => (
            <Grid
              key={Math.random(i)}
              container
              mt={1}
              spacing={3}
              alignItems="center"
              justify="center"
              height="155px"
            >
              <Grid item xs={4}>
                <MDBox pl={3} position="relative">
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
              <Grid item xs={8}>
                <MDBox p={3}>
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
          ))}
        </Carousel>
      </Card>
    </MDBox>
  );
}

ClothCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ClothCard;
