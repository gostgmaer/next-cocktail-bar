import Loader from "@/components/loader";
import { AppProvider } from "@/context/globalContext";
import "@/styles/globals.css";
import { CssBaseline } from "@mui/material";
import { Fragment } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <AppProvider>
        <CssBaseline /> <Component {...pageProps} />
      </AppProvider>
    </Fragment>
  );
}
