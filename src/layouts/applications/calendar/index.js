import { useMemo } from "react";

// @mui material components

import MDBox from "components/MDBox";
import EventCalendar from "examples/Calendar";

// Data
import calendarEventsData from "layouts/applications/calendar/data/calendarEventsData";

function Calendar() {
  const currDate = new Date();

  return (
    <MDBox>
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
    </MDBox>
  );
}

export default Calendar;
