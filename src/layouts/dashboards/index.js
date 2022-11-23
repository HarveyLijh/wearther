// Material Dashboard 2 PRO React examples
import { useEffect, useState } from "react";
import Calendar from "layouts/applications/calendar";
import Weather from "layouts/applications/weather";
import Recommend from "layouts/applications/recommend";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import fetchUsedDates from "api/usedDate";
import MDBox from "components/MDBox";

function MainPage() {
  const [location, setLocation] = useState({ latitude: undefined, longitude: undefined });
  const [usedDateEvents, setUsedDateEvents] = useState([]);
  useEffect(() => {
    const { geolocation } = navigator;

    // If the geolocation is not defined in the used browser we handle it as an error
    if (!geolocation) {
      return;
    }

    // Call Geolocation API
    // hack to get the location working
    geolocation.getCurrentPosition(
      () => {},
      () => {},
      {}
    );
    geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setLocation({
        latitude,
        longitude,
      });
    });
  }, [location.latitude, location.longitude]);

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
    height: "110vh",
    background: "linear-gradient(to right bottom, #ABD7FF, #1C8CF2)",
  };
  if (time <= 6 || time >= 18) {
    rootStyle = {
      height: "110vh",
      background: "linear-gradient(to right bottom, #001330, #286FC3)",
    };
  }

  useEffect(() => {
    fetchUsedDates().then((res) => {
      setUsedDateEvents(processDates(res));
    });
  }, [date.getDate()]);

  return (
    <MDBox style={rootStyle}>
      <DashboardNavbar />
      {location.latitude && location.longitude ? (
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
      ) : (
        <MDBox
          mt={20}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress size={100} />
          {/* use ref to achieve better result https://mui.com/material-ui/react-progress/ */}
        </MDBox>
      )}
    </MDBox>
  );
}

export default MainPage;
