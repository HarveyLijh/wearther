import { useState, useMemo } from "react";
import fetchHistory from "api/history";

import getImage from "constant/getWeatherImage";
import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";
import EventCalendar from "examples/Calendar";
import MDBox from "components/MDBox";
import DateWeatherCard from "./components/dateWeatherCard";

function Calendar({ usedDateEvents, today }) {
  const title = "History";
  const [weather, setWeather] = useState("unavailable");
  // convert date object to a formatted date string
  const getDateString = (dateObj) =>
    `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`;

  const [date, setDate] = useState();

  const [clothings, setClothings] = useState();

  // handle user select date from calendar, and updates info in the weatherDateCard
  const selectDate = (selection) => {
    const selectedDateString = getDateString(selection);
    setDate(selectedDateString);
    fetchHistory(selectedDateString).then((res) => {
      const { rain, description, speed, temp_min, temp_max } = res.weather;
      setClothings(res.suggestions);
      setWeather({
        precipitationChance: rain === "N/A" ? 0 : rain,
        weather: description,
        minTemp: `${Math.round(temp_min).toString()} °C`,
        maxTemp: `${Math.round(temp_max).toString()} °C`,
        image: getImage(description),
        wind: `${speed} km/h`,
      });
    });
  };

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
            image={weather?.image}
            weather={weather?.weather}
            maxTemp={weather?.maxTemp}
            minTemp={weather?.minTemp}
            windSpeed={weather?.wind}
            date={date}
            clothings={clothings}
          />
        </Grid>
      </Grid>
    </MDBox>
  );
}
Calendar.propTypes = {
  today: PropTypes.instanceOf(Date).isRequired,
  usedDateEvents: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      start: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Calendar;
