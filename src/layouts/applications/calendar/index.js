import { useMemo } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import EventCalendar from "examples/Calendar";

// Data
import calendarEventsData from "layouts/applications/calendar/data/calendarEventsData";

function Calendar() {
  const currDate = new Date();

  return (
    <DashboardLayout>
      <MDBox pt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} xl={9} sx={{ height: "max-content" }}>
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
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Calendar;
