import Header from "@/components/header/Header";
import { Box, LinearProgress } from "@mui/material";
import Head from "next/head";
import { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Box
        className="elements"
        minHeight={"100vh"}
        sx={{
          width: "100%",
          p: 5,
          
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        {children}
      </Box>
    </Fragment>
  );
};

export default Layout;
