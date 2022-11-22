import { useState } from "react";

// react-router-dom components
import { useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import { TextField } from "@material-ui/core";
// import Switch from "@mui/material/Switch";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDBadge from "components/MDBadge";

// Context
import { useMaterialUIController, setUserName } from "context";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import login from "api/login";
import { WRONG_INFO_PROMPT, EMPTY_INFO_PROMPT } from "constant";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Basic() {
  const [controller, dispatch] = useMaterialUIController();
  const [msg, setMsg] = useState("");
  const [userid, setUserId] = useState("");
  const [password, setPassWord] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (userid === "" || password === "") {
      setMsg(EMPTY_INFO_PROMPT);
      return;
    }
    const data = await login(userid, password);
    // Login Succes
    if (data.res_code === 1) {
      localStorage.setItem("token", data.msg.token);
      localStorage.setItem("username", data.msg.username);
      // Set Current UserName
      if (controller.username !== data.msg.username) {
        setUserName(dispatch, data.msg.username);
      }
      navigate("/mainpage");
    }
    // Login Failed
    else {
      setMsg(WRONG_INFO_PROMPT);
    }
  };
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2} textAlign="center">
              <MDBadge color="info">Weather</MDBadge>
            </MDBox>
            <MDBox mb={2}>
              <TextField
                type="text"
                label="Username"
                text={userid}
                onChange={(e) => setUserId(e.target.value)}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <TextField
                type="password"
                label="Password"
                text={password}
                onChange={(e) => setPassWord(e.target.value)}
                fullWidth
              />
            </MDBox>
            {msg !== "" && (
              <MDTypography color="primary" size="small" fontWeight="regular">
                {msg}
              </MDTypography>
            )}
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" onClick={handleSignIn} fullWidth>
                Sign In
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
