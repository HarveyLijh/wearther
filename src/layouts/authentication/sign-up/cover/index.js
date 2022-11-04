import { useState } from "react";
// react-router-dom components
import { useNavigate, Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import signup from "api/signup";
import { TAKEN_INFO_PROMPT, EMPTY_INFO_PROMPT } from "constant";
// Context
import { useMaterialUIController, setUserName } from "context";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Cover() {
  const [controller, dispatch] = useMaterialUIController();
  const [msg, setMsg] = useState("");
  const [userid, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const navigate = useNavigate();
  const readySignIn = () => {
    localStorage.removeItem("signup");
  };
  const handleSignUp = async () => {
    if (userid === "" || password === "" || email === "") {
      setMsg(EMPTY_INFO_PROMPT);
      return;
    }
    const data = await signup(userid, email, password);
    console.log(data);
    // Login Success
    if (data.message === "AUTHENTICATED SUCCESFULLY") {
      // localStorage.setItem("token", data.user.token);
      // localStorage.setItem("username", data.user.username);
      // Set Current UserName
      if (controller.username !== data.user.username) {
        setUserName(dispatch, data.user.username);
      }
      navigate("/mainpage");
    }
    // Login Failed
    else {
      setMsg(TAKEN_INFO_PROMPT);
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
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Name"
                variant="standard"
                fullWidth
                text={userid}
                onChange={(e) => setUserId(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                text={email}
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                variant="standard"
                fullWidth
                text={password}
                onChange={(e) => setPassWord(e.target.value)}
              />
            </MDBox>
            {msg !== "" && (
              <MDTypography color="primary" size="small" fontWeight="regular">
                {msg}
              </MDTypography>
            )}
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" onClick={handleSignUp} fullWidth>
                sign up
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                  onClick={readySignIn}
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
