import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import fetchRecommendation from "api/recommend";
import fetchWeather from "api/weather";
import ClothCard from "./components/clothCard";

function Recommend({ latitude, longitude }) {
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
  useEffect(() => {
    if (!latitude || !longitude) return;
    // get weather
    fetchWeather(latitude, longitude).then((weatherRes) => {
      // get clothes suggestions
      fetchRecommendation(weatherRes).then((res) => {
        setBottomItems(res[0].bottom);
        setTopItems(res[1].top_must);
        setTopOptionalItems(res[2].top_optional_1);
      });
    });
  }, [Math.round(latitude), Math.round(longitude)]);
  const title = "Recommend";
  return (
    <MDBox color="white">
      {title}
      <Grid container p={2} spacing={3} alignItems="center" justify="center">
        {topOptionalItems.length > 0 && (
          <Grid item xs={12}>
            Optional Top
            <ClothCard items={topOptionalItems} />
          </Grid>
        )}
        <Grid item xs={12}>
          Top
          <ClothCard items={topItems} />
        </Grid>
        <Grid item xs={12}>
          Bottom
          <ClothCard items={bottomItems} />
        </Grid>
      </Grid>
    </MDBox>
  );
}
Recommend.defaultProps = {
  latitude: 37.7749,
  longitude: -122.4194,
};
Recommend.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

export default Recommend;
