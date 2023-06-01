import React from "react";
import { Box } from "@mui/material";

function Layout({ children }: any) {
  return (
    <Box paddingTop={2} paddingX={5}>
      {children}
    </Box>
  );
}

export default Layout;
