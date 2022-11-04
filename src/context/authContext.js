import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";

function AuthProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // // alert(location.pathname);
    if (location.pathname === "/") {
      navigate("/authentication/sign-in");
    }
    // If Session exist, Redirect to mainPage
    if (location.pathname === "/authentication/sign-in" && localStorage.getItem("token"))
      navigate("/mainpage");
    if (!localStorage.getItem("token") && localStorage.getItem("signup"))
      navigate("/authentication/sign-up");
    // If Session not exist, Redirect to Sign in
    if (!localStorage.getItem("token") && !localStorage.getItem("signup"))
      navigate("/authentication/sign-in");
    // console.log(location);
  }, [location.pathname]);

  return children;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
