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

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import signup from "api/signup";
import { EMAIL_INVALID_PROMPT, TAKEN_INFO_PROMPT, EMPTY_INFO_PROMPT } from "constant";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Cover() {
  const [msg, setMsg] = useState("");
  const [userid, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  useEffect(() => {
    // reset signup
    localStorage.setItem("signup_completed", false);
  });
  const navigate = useNavigate();
  const readySignIn = () => {
    localStorage.removeItem("signup");
  };

  const isValidEmail = (emailVal) => {
    const emailCheckRE = /\S+@\S+\.\S+/;
    return emailCheckRE.test(emailVal);
  };

  const handleEmail = (value) => {
    if (!isValidEmail(value)) {
      setMsg(EMAIL_INVALID_PROMPT);
    } else {
      setMsg("");
      setEmail(value);
    }
  };

  const handleSignUp = async () => {
    if (userid === "" || password === "" || email === "") {
      setMsg(EMPTY_INFO_PROMPT);
      return;
    }
    setMsg("");
    const data = await signup(userid, email, password);
    // signup Success
    if (data.message === "REGISTERED SUCCESFULLY") {
      // console.log(data);
      localStorage.setItem("signup_completed", "true");
      localStorage.setItem("signup", false);
      navigate("/authentication/sign-in");
    }
    // signup Failed
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
            Enter your username, email, and password to register
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
                onChange={(e) => handleEmail(e.target.value)}
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
              <MDTypography color="error" variant="body2" fontWeight="regular">
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
