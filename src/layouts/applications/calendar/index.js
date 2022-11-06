import { useState, useMemo } from "react";

import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";
import EventCalendar from "examples/Calendar";
import DateWeatherCard from "./components/dateWeatherCard";
// Data
import calendarEventsData from "./data/calendarEventsData";

function Calendar({ today }) {
  const [imageSrc, setImageSrc] = useState("https://bit.ly/3Hlw1MQ");
  const [weather, setWeather] = useState("sunny");
  const [maxTemp, setMaxTemp] = useState(30);
  const [minTemp, setMinTemp] = useState(20);
  const [windSpeed, setWindSpeed] = useState(10);
  const [date, setDate] = useState(
    today
      .toLocaleDateString("en-En", { year: "numeric", month: "short", day: "numeric" })
      .split(",")[0]
  );
  const [clothings, setClothings] = useState(["shirt", "shorts"]);
  const [dateWeather, setDateWeather] = useState({});
  console.log(dateWeather);
  return (
    <Grid container p={2} spacing={3} alignItems="center" justify="center">
      <Grid item xs={12}>
        {useMemo(
          () => (
            <EventCalendar
              initialView="dayGridMonth"
              initialDate={today}
              events={calendarEventsData}
              selectable
              editable
            />
          ),
          [calendarEventsData]
        )}
      </Grid>
      <Grid item xs={12}>
        <DateWeatherCard
          setClothings={setClothings}
          setDate={setDate}
          setWindSpeed={setWindSpeed}
          setMaxTemp={setMaxTemp}
          setMinTemp={setMinTemp}
          setWeather={setWeather}
          setImageSrc={setImageSrc}
          setDateWeather={setDateWeather}
          image={imageSrc}
          weather={weather}
          maxTemp={maxTemp}
          minTemp={minTemp}
          date={date}
          windSpeed={windSpeed}
          clothings={clothings}
        />
      </Grid>
    </Grid>
  );
}
Calendar.propTypes = {
  today: PropTypes.instanceOf(Date).isRequired,
};
export default Calendar;
