import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
      }),
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          // color: "blue",
        },
      },
    },
  },
});

export default theme;
