import { useState, useEffect } from "react";

// react-router-dom components
import { useNavigate, Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import login from "api/session";
import { WRONG_INFO_PROMPT, EMPTY_INFO_PROMPT } from "constant";
// Context
import { useMaterialUIController, setUserName } from "context";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Cover() {
  const [controller, dispatch] = useMaterialUIController();
  const [msg, setMsg] = useState("");
  const [userid, setUserId] = useState("");
  const [password, setPassWord] = useState("");
  const [show, setShow] = useState(localStorage.getItem("signup_completed") === "true");
  const navigate = useNavigate();

  useEffect(() => {
    // reset signup
    localStorage.setItem("signup", false);
  });

  const toggleSnackbar = () => setShow(!show);
  const readySignUp = () => {
    localStorage.setItem("signup", true);
  };
  const handleSignIn = async () => {
    if (userid === "" || password === "") {
      setMsg(EMPTY_INFO_PROMPT);
      return;
    }
    const data = await login(userid, password);
    console.log(data);
    // Login Success
    if (data.message === "AUTHENTICATED SUCCESFULLY") {
      localStorage.setItem("token", data.user.token);
      localStorage.setItem("username", data.user.username);
      // Set Current UserName
      if (controller.username !== data.user.username) {
        setUserName(dispatch, data.user.username);
      }
      navigate("/mainpage");
    }
    // Login Failed
    else {
      setMsg(WRONG_INFO_PROMPT);
    }
  };
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Wearther
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your username and password to sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Username"
                variant="standard"
                fullWidth
                placeholder="username"
                text={userid}
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setUserId(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                variant="standard"
                fullWidth
                placeholder="************"
                text={password}
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setPassWord(e.target.value)}
              />
            </MDBox>
            {msg !== "" && (
              <MDTypography color="primary" size="small" fontWeight="regular">
                {msg}
              </MDTypography>
            )}
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" onClick={handleSignIn} fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                  onClick={readySignUp}
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
      <MDSnackbar
        color="success"
        icon="notifications"
        title="Wearther"
        content="Register Success!"
        open={show}
        close={toggleSnackbar}
      />
    </CoverLayout>
  );
}

export default Cover;
