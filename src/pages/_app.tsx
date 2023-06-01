import { CssBaseline, ThemeProvider, createTheme, colors } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Layout from "@/components/Layout";
export default function App({ Component, pageProps, session }: any) {
  const theme = createTheme({
    palette: {
      text: {
        primary: colors.blueGrey[700],
      },
      primary: {
        main: colors.blueGrey[700],
      },
      background: {
        default: colors.grey[100],
      },
    },
    typography: {
      fontFamily: "Helvetica, Arial, sans-serif",
      fontSize: 15,
      h1: {
        fontSize: 40,
      },
      h2: {
        fontSize: 35,
      },
      h3: {
        fontSize: 30,
      },
      h4: {
        fontSize: 25,
      },
      h5: {
        fontSize: 20,
      },
      h6: {
        fontSize: 18,
      },
    },
  });

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}
