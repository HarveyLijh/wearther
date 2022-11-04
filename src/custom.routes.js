// Additional Routes which not be showed in SideBar.
import SignInCover from "layouts/authentication/sign-in/cover";
import SignUpCover from "layouts/authentication/sign-up/cover";

const routes = [
  // Sign IN Route
  {
    route: "/authentication/sign-in",
    component: <SignInCover />,
    key: "sign-in",
  },

  // Sign UP Route
  {
    route: "/authentication/sign-up",
    component: <SignUpCover />,
    key: "sign-up",
  },
];

export default routes;
