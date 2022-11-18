// Material Dashboard 2 PRO React examples
import { useEffect, useState } from "react";
import Calendar from "layouts/applications/calendar";
import Weather from "layouts/applications/weather";
import Recommend from "layouts/applications/recommend";
import Grid from "@mui/material/Grid";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function MainPage() {
  const [location, setLocation] = useState("unavailable");

  useEffect(() => {
    const { geolocation } = navigator;

    // If the geolocation is not defined in the used browser we handle it as an error
    if (!geolocation) {
      return;
    }

    // Call Geolocation API
    geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setLocation({
        latitude,
        longitude,
      });
    });
  });

  const date = new Date();
  const time = date.getHours();
  let rootStyle = {
    height: "100vh",
    flexGrow: 1,
    background: "linear-gradient(to right bottom, #ABD7FF, #1C8CF2)",
  };
  if (time <= 6 || time >= 18) {
    rootStyle = {
      height: "100vh",
      flexGrow: 1,
      background: "linear-gradient(to right bottom, #001330, #286FC3)",
    };
  }
  return (
    <div style={rootStyle}>
      <DashboardNavbar />
      <Grid container pl={5} pr={5} sspacing={3} justify="center">
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Calendar today={date} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Weather latitude={location.latitude} longitude={location.longitude} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Recommend latitude={location.latitude} longitude={location.longitude} />
        </Grid>
      </Grid>
    </div>
  );
}

export default MainPage;
