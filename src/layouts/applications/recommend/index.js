import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";
import ClothCard from "./components/clothCard";

function Recommend() {
  const title = "Recommend";
  const xsHeight = "100px";
  const lgHeight = "160px";
  const styles = {
    indicatorBtn: {
      fontSize: "16px",
      color: "dark.main",
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
    <MDBox color="white">
      {title}
      <Grid container p={2} spacing={3} alignItems="center" justify="center">
        <Grid item xs={12}>
          Optional Top
          <Carousel
            indicatorIconButtonProps={{ style: styles.indicatorBtn }}
            autoPlay={false}
            swipe={false}
            s={{ height: xsHeight }}
            lg={{ height: lgHeight }}
          >
            {items.map((item, i) => (
              <ClothCard key={Math.random(i)} item={item} />
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={12}>
          Top
          <Carousel
            indicatorIconButtonProps={{ style: styles.indicatorBtn }}
            autoPlay={false}
            swipe={false}
            s={{ height: xsHeight }}
            lg={{ height: lgHeight }}
          >
            {items.map((item, i) => (
              <ClothCard key={Math.random(i)} item={item} />
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={12}>
          Bottom
          <Carousel
            indicatorIconButtonProps={{ style: styles.indicatorBtn }}
            autoPlay={false}
            swipe={false}
            s={{ height: xsHeight }}
            lg={{ height: lgHeight }}
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
