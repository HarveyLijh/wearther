// Material Dashboard 2 PRO React examples
import Calendar from "layouts/applications/calendar";
import Weather from "layouts/applications/weather";
import Recommend from "layouts/applications/recommend";
import Grid from "@mui/material/Grid";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

function MainPage() {
  return (
    <div className={styles.root}>
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
