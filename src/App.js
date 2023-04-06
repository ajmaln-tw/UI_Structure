import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Typography } from "@mui/material";
import "./App.css";

import DashboardLayout from "./layouts/DashboardLayout";
import { ProSidebarWrapper } from "./modules/common/sidebar/ProSidebarWrapper";

function App() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(commonActions.setNavigator(navigate));
  }, []);
  return (
    <Typography className="app" component="div">
      <DashboardLayout >
        <ProSidebarWrapper>
          <Outlet />
        </ProSidebarWrapper>
      </DashboardLayout >
    </Typography>
  );
}

export default App;
