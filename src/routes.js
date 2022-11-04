// Material Dashboard
import Dashboard from "layouts/dashboards";
// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "mainpage",
    key: "mainpage",
    route: "/mainpage",
    component: <Dashboard />,
    icon: <Icon fontSize="medium">dashboard</Icon>,
    noCollapse: true,
  },
];

export default routes;
