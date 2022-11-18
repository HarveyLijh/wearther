import { useEffect, useState, useMemo } from "react";
import fetchHistory from "api/history";
import fetchWeather from "api/weather";

import getImage from "constant/getWeatherImage";
import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";
import EventCalendar from "examples/Calendar";
import MDBox from "components/MDBox";
import DateWeatherCard from "./components/dateWeatherCard";

function Calendar({ usedDateEvents, today, latitude, longitude }) {
  const title = "History";
  const [weather, setWeather] = useState("unavailable");
  const [date, setDate] = useState(today);

  const [clothings, setClothings] = useState(["shirt", "shorts"]);

  // handle user select date from calendar, and updates info in the weatherDateCard
  const selectDate = (selection) => {
    console.log("selectDate", selection);
    setDate(selection);
    fetchHistory(selection);
  };

  useEffect(() => {
    fetchWeather(latitude, longitude).then((res) => {
      // console.log(res);
      const { rain, feels_like, description, speed, temp_min, temp_max } = res;
      setWeather({
        precipitationChance: rain === "N/A" ? 0 : rain,
        weather: description,
        minTemp: Math.round(temp_min),
        maxTemp: Math.round(temp_max),
        feelslike: Math.round(feels_like),
        image: getImage(description),
        wind: speed,
      });
    });
  });
  return (
    <MDBox color="white">
      {title}
      <Grid container p={2} spacing={3} alignItems="center" justify="center" textAlign="left">
        <Grid item xs={12}>
          {useMemo(
            () => (
              <EventCalendar
                initialView="dayGridMonth"
                initialDate={today}
                setDate={(seletion) => selectDate(seletion)}
                events={usedDateEvents}
                selectable
                editable
              />
            ),
            [usedDateEvents]
          )}
        </Grid>
        <Grid item xs={12}>
          <DateWeatherCard
            setClothings={setClothings}
            // setDate={(seletion) => selectDate(seletion)}
            setWeather={setWeather}
            image={weather?.image}
            weather={weather?.weather}
            maxTemp={weather?.maxTemp}
            minTemp={weather?.minTemp}
            windSpeed={weather?.windSpeed}
            date={
              (date === null || date.event === undefined ? today : date.event.start)
                .toLocaleDateString("en-En", { year: "numeric", month: "short", day: "numeric" })
                .split(",")[0]
            }
            clothings={clothings}
          />
        </Grid>
      </Grid>
    </MDBox>
  );
}
Calendar.defaultProps = {
  latitude: 37.7749,
  longitude: -122.4194,
};
Calendar.propTypes = {
  today: PropTypes.instanceOf(Date).isRequired,
  usedDateEvents: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      start: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
    })
  ).isRequired,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};
export default Calendar;
