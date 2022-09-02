import "../styles/globals.css";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#787A91",
      main: "#0F044C",
      dark: "#141E61",
      contrastText: "#fff",
    },
    secondary: {
      main: "#141E61",
      contrastText: "#fff",
    },
    neutral: {
      main: "#2B4865",
      contrastText: "#fff",
    },
    error: {
      main: "#541212",
    },
  },
  typography: {
    fontFamily: "Encode Sans",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    button: {
      textTransform: "none",
    },
  },
  zIndex: {
    appBar: 1300,
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MyApp;
