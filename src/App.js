import { useEffect } from "react"; // useMemo

// react-router components
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import AuthProvider from "context/authContext";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Dashboard 2 PRO React themes
import theme from "assets/theme";
// import themeRTL from "assets/theme/theme-rtl";

// Material Dashboard 2 PRO React Dark Mode themes
import themeDark from "assets/theme-dark";
// import themeDarkRTL from "assets/theme-dark/theme-rtl";

// RTL plugins
// import rtlPlugin from "stylis-plugin-rtl";
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";

// Material Dashboard 2 PRO React routes
import routes from "routes";
import customRoutes from "custom.routes";

// Material Dashboard 2 PRO React contexts
import { useMaterialUIController } from "context";

export default function App() {
  const [controller] = useMaterialUIController();
  const { direction, darkMode } = controller;
  // const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <AuthProvider>
        <CssBaseline />
        <Routes>
          {getRoutes(routes)}
          {getRoutes(customRoutes)}
          <Route path="*" element={<Navigate to="/authentication/sign-in" />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}
