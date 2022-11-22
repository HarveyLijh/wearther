// Material Dashboard 2 PRO React examples
import { useEffect, useState } from "react";
import Calendar from "layouts/applications/calendar";
import Weather from "layouts/applications/weather";
import Recommend from "layouts/applications/recommend";
import Grid from "@mui/material/Grid";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import fetchUsedDates from "api/usedDate";

function MainPage() {
  const [location, setLocation] = useState("unavailable");
  const [usedDateEvents, setUsedDateEvents] = useState([]);
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

  // process used dates data into calendar event format
  const processDates = (res) => {
    const result = [];
    res.used_dates.forEach((date) => {
      const dateEles = date.split("/");
      result.push(
        JSON.parse(
          `{"title": "","start": "${dateEles[2]}-${dateEles[0]}-${dateEles[1]}","className": "primary"}`
        )
      );
    });
    return result;
  };
  // get today and set ui bgcolor
  const date = new Date();
  const time = date.getHours();
  let rootStyle = {
    flexGrow: 1,
    background: "linear-gradient(to right bottom, #ABD7FF, #1C8CF2)",
  };
  if (time <= 6 || time >= 18) {
    rootStyle = {
      flexGrow: 1,
      background: "linear-gradient(to right bottom, #001330, #286FC3)",
    };
  }

  useEffect(() => {
    fetchUsedDates().then((res) => {
      setUsedDateEvents(processDates(res));
    });
  }, [date.getDate()]);

  return (
    <div style={rootStyle}>
      <DashboardNavbar />
      <Grid container pl={5} pr={5} sspacing={3} justify="center">
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Calendar
            latitude={location.latitude}
            longitude={location.longitude}
            usedDateEvents={usedDateEvents}
            today={date}
          />
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
