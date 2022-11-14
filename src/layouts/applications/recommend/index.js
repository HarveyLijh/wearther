import { useEffect, useState } from "react";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import fetchRecommendation from "api/recommend";
import Carousel from "react-material-ui-carousel";
import ClothCard from "./components/clothCard";

function Recommend() {
  const [topItems, setTopItems] = useState([
    {
      clothName: "Shirt",
      image:
        "https://objectstorage.us-sanjose-1.oraclecloud.com/n/axnn9qlbs3vq/b/COEN241/o/sleeve-shirt.png",
    },
  ]);
  const [bottomItems, setBottomItems] = useState([
    {
      clothName: "Shorts",
      image:
        "https://objectstorage.us-sanjose-1.oraclecloud.com/n/axnn9qlbs3vq/b/COEN241/o/shorts.png",
    },
  ]);

  const [topOptionalItems, setTopOptionalItems] = useState([]);
  const [temperature, setTempature] = useState("unavailable");
  useEffect(() => {
    if (!localStorage.getItem("temperature")) return;
    setTempature(JSON.parse(localStorage.getItem("temperature")));
  });
  useEffect(() => {
    if (temperature !== "unavailable") return;
    // const temperature = localStorage.getItem("temperature");
    fetchRecommendation(11).then((res) => {
      console.log(res);
      setBottomItems(res[0].bottom);
      setTopItems(res[1].top_must);
      setTopOptionalItems(res[2].top_optional_1);
    });
  }, [temperature]);
  const title = "Recommend";
  const styles = {
    indicatorBtn: {
      marginTop: "15px",
      fontSize: "16px",
      color: "dark.main",
    },
  };
  return (
    <MDBox color="white">
      {title}
      <Grid container p={2} spacing={3} alignItems="center" justify="center">
        {topOptionalItems.length > 0 && (
          <Grid item xs={12}>
            Optional Top
            <Carousel
              indicatorIconButtonProps={{ style: styles.indicatorBtn }}
              autoPlay={false}
              swipe={false}
            >
              {topOptionalItems.map((item, i) => (
                <ClothCard key={Math.random(i)} item={item} />
              ))}
            </Carousel>
          </Grid>
        )}
        <Grid item xs={12}>
          Top
          <Carousel
            indicatorIconButtonProps={{ style: styles.indicatorBtn }}
            autoPlay={false}
            swipe={false}
          >
            {topItems.map((item, i) => (
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
          >
            {bottomItems.map((item, i) => (
              <ClothCard key={Math.random(i)} item={item} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Recommend;
