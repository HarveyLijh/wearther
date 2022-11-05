// Material Dashboard 2 PRO React examples
import Calendar from "layouts/applications/calendar";
import Weather from "layouts/applications/weather";
import Recommend from "layouts/applications/recommend";
import Grid from "@mui/material/Grid";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useState, useEffect } from "react";

function MainPage() {
  const [currTime, setCurrTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    const time = new Date().toLocaleString().split(",")[1];
    const offset = time.split(" ")[2] === "PM" ? 12 : 0;
    const hour = parseInt(time.split(":")[0], 10) + offset;
    setCurrTime(hour);
  });
  let rootStyle = {
    flexGrow: 1,
    background: "linear-gradient(to right bottom, #ABD7FF, #1C8CF2)",
  };

  if (currTime >= 18) {
    rootStyle = {
      flexGrow: 1,
      background: "linear-gradient(to right bottom, #062452, #286FC3)",
    };
  }
  return (
    <div style={rootStyle}>
      <DashboardNavbar />
      <Grid container p={5} spacing={3} alignItems="center" justify="center">
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Calendar />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Weather />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Recommend />
        </Grid>
      </Grid>
    </div>
  );
}

export default MainPage;
