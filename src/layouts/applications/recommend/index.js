import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";
import ClothCard from "./components/clothCard";

function Recommend() {
  const title = "recommend";
  const styles = {
    indicatorBtn: {
      fontSize: "18px",
    },
  };
  const items = [
    {
      clothName: "Shirt",
      image: "https://bit.ly/3Hlw1MQ",
    },
    {
      clothName: "T-Shirt",
      image: "https://bit.ly/3Hlw1MQ",
    },
  ];
  return (
    <MDBox>
      {title}
      <Grid container p={2} spacing={3} alignItems="center" justify="center">
        <Grid item xs={12}>
          <Carousel
            indicatorIconButtonProps={{ style: styles.indicatorBtn }}
            autoPlay={false}
            swipe={false}
            s={{ height: "120px" }}
            lg={{ height: "180px" }}
          >
            {items.map((item, i) => (
              <ClothCard key={Math.random(i)} item={item} />
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={12}>
          <Carousel
            indicatorIconButtonProps={{ style: styles.indicatorBtn }}
            autoPlay={false}
            swipe={false}
            s={{ height: "120px" }}
            lg={{ height: "180px" }}
          >
            {items.map((item, i) => (
              <ClothCard key={Math.random(i)} item={item} />
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={12}>
          <Carousel
            indicatorIconButtonProps={{ style: styles.indicatorBtn }}
            autoPlay={false}
            swipe={false}
            s={{ height: "120px" }}
            lg={{ height: "180px" }}
          >
            {items.map((item, i) => (
              <ClothCard key={Math.random(i)} item={item} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Recommend;
