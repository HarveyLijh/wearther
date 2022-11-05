import { useMemo } from "react";

// @mui material components

import Grid from "@mui/material/Grid";
import EventCalendar from "examples/Calendar";
import DateWeatherCard from "./components/dateWeatherCard";
// Data
import calendarEventsData from "./data/calendarEventsData";

function Calendar() {
  const currDate = new Date();

  return (
    <Grid container p={2} spacing={3} alignItems="center" justify="center">
      <Grid item xs={12}>
        {useMemo(
          () => (
            <EventCalendar
              initialView="dayGridMonth"
              initialDate={currDate}
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
          image="https://bit.ly/3Hlw1MQ"
          weather="Sunny"
          maxTemp={26}
          minTemp={20}
          date="Mar 14"
        />
      </Grid>
    </Grid>
  );
}

export default Calendar;
