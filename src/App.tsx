import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

// Components
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";

// Context
import { CartProvider } from "./context/CartContext";

// Create a responsive theme
let theme = createTheme({
  palette: {
    primary: {
      main: "#131921",
      light: "#232f3e",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#febd69",
      dark: "#f3a847",
      contrastText: "#000000",
    },
    background: {
      default: "#EAEDED",
    },
  },
  typography: {
    fontFamily: `"Amazon Ember", Arial, sans-serif`,
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

// Make fonts responsive
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <Router>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Header />
            <SubHeader />

            <Box component="main" sx={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                {/* Add more routes here as needed */}
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Box>

            <Footer />
          </Box>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
