// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @fullcalendar components
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

// @mui material components
import Card from "@mui/material/Card";

// Custom styles for Calendar
import CalendarRoot from "examples/Calendar/CalendarRoot";
// Material Dashboard 2 PRO React context
// import { useMaterialUIController } from "context";
function Calendar({ header, setDate, ...rest }) {
  // const [controller] = useMaterialUIController();
  // const { darkMode } = controller;
  const validClassNames = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ];

  const events = rest.events
    ? rest.events.map((el) => ({
        ...el,
        className: validClassNames.find((item) => item === el.className)
          ? `event-${el.className}`
          : "event-info",
      }))
    : [];

  return (
    <Card sx={{ height: "100%", backgroundColor: "dark.main" }}>
      <CalendarRoot p={3}>
        <FullCalendar
          {...rest}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          events={events}
          eventClick={setDate}
          height="100%"
        />
      </CalendarRoot>
    </Card>
  );
}

// Setting default values for the props of Calendar
Calendar.defaultProps = {
  header: {
    title: "",
    date: "",
  },
};

// Typechecking props for the Calendar
Calendar.propTypes = {
  header: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
  }),
  setDate: PropTypes.func.isRequired,
};

export default Calendar;
