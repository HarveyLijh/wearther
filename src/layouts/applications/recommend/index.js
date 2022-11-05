import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import ClothCard from "./components/clothCard";

function Recommend() {
  const title = "recommend";

  return (
    <MDBox>
      {title}
      <Grid container p={2} spacing={3} alignItems="center" justify="center">
        <Grid item xs={12}>
          <ClothCard image="https://bit.ly/3Hlw1MQ" clothName="shirt" />
        </Grid>
        <Grid item xs={12}>
          <ClothCard image="https://bit.ly/3Hlw1MQ" clothName="shorts" />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Recommend;
