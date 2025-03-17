import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Grid,
  Container,
  Button,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#232F3E",
  color: "#FFFFFF",
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  marginTop: theme.spacing(3),
}));

const BackToTopButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#37475A",
  color: "#FFFFFF",
  padding: theme.spacing(1.5),
  width: "100%",
  "&:hover": {
    backgroundColor: "#485769",
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
  fontSize: "1rem",
}));

const FooterLink = styled(Typography)(({ theme }) => ({
  color: "#DDDDDD",
  fontSize: "0.85rem",
  marginBottom: theme.spacing(1),
  "&:hover": {
    textDecoration: "underline",
  },
}));

const FooterBottom = styled(Box)(({ theme }) => ({
  backgroundColor: "#131A22",
  color: "#DDDDDD",
  padding: theme.spacing(3),
  textAlign: "center",
}));

const Logo = styled("img")(({ theme }) => ({
  width: 100,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    width: 80,
  },
}));

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box>
      <BackToTopButton onClick={handleBackToTop}>Back to top</BackToTopButton>

      <FooterContainer>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <FooterTitle variant="subtitle1">Get to Know Us</FooterTitle>
              <Link to="/about">
                <FooterLink variant="body2">Careers</FooterLink>
              </Link>
              <Link to="/blog">
                <FooterLink variant="body2">Blog</FooterLink>
              </Link>
              <Link to="/about">
                <FooterLink variant="body2">About Amazon</FooterLink>
              </Link>
              <Link to="/investor-relations">
                <FooterLink variant="body2">Investor Relations</FooterLink>
              </Link>
              <Link to="/devices">
                <FooterLink variant="body2">Amazon Devices</FooterLink>
              </Link>
              <Link to="/science">
                <FooterLink variant="body2">Amazon Science</FooterLink>
              </Link>
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={2}>
              <FooterTitle variant="subtitle1">Make Money with Us</FooterTitle>
              <Link to="/sell">
                <FooterLink variant="body2">Sell products on Amazon</FooterLink>
              </Link>
              <Link to="/sell-apps">
                <FooterLink variant="body2">Sell on Amazon Business</FooterLink>
              </Link>
              <Link to="/associates">
                <FooterLink variant="body2">Associates Program</FooterLink>
              </Link>
              <Link to="/fulfill">
                <FooterLink variant="body2">Fulfillment by Amazon</FooterLink>
              </Link>
              <Link to="/creator">
                <FooterLink variant="body2">Become an Affiliate</FooterLink>
              </Link>
              <Link to="/advertise">
                <FooterLink variant="body2">Advertise Your Products</FooterLink>
              </Link>
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={2}>
              <FooterTitle variant="subtitle1">
                Amazon Payment Products
              </FooterTitle>
              <Link to="/credit-card">
                <FooterLink variant="body2">Amazon Credit Card</FooterLink>
              </Link>
              <Link to="/store-card">
                <FooterLink variant="body2">Shop with Points</FooterLink>
              </Link>
              <Link to="/reload-balance">
                <FooterLink variant="body2">Reload Your Balance</FooterLink>
              </Link>
              <Link to="/currency-converter">
                <FooterLink variant="body2">Currency Converter</FooterLink>
              </Link>
              <Link to="/gift-cards">
                <FooterLink variant="body2">Amazon Gift Cards</FooterLink>
              </Link>
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={2}>
              <FooterTitle variant="subtitle1">Let Us Help You</FooterTitle>
              <Link to="/account">
                <FooterLink variant="body2">Your Account</FooterLink>
              </Link>
              <Link to="/orders">
                <FooterLink variant="body2">Your Orders</FooterLink>
              </Link>
              <Link to="/shipping">
                <FooterLink variant="body2">
                  Shipping Rates & Policies
                </FooterLink>
              </Link>
              <Link to="/returns">
                <FooterLink variant="body2">Returns & Replacements</FooterLink>
              </Link>
              <Link to="/help">
                <FooterLink variant="body2">Help</FooterLink>
              </Link>
            </Grid>

            {!isMobile && (
              <>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <Box sx={{ textAlign: "center" }}>
                      <Logo
                        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt="Amazon logo"
                      />
                      <Button
                        variant="outlined"
                        startIcon={<LanguageIcon />}
                        sx={{
                          color: "#FFFFFF",
                          borderColor: "#FFFFFF",
                          "&:hover": {
                            borderColor: "#FFFFFF",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                          },
                        }}
                      >
                        English
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </FooterContainer>

      <Divider sx={{ backgroundColor: "#3a4553" }} />

      <FooterBottom>
        <Container maxWidth="lg">
          <Box sx={{ mb: 1 }}>
            {isMobile && (
              <Logo
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon logo"
              />
            )}
          </Box>
          <Grid container spacing={1} justifyContent="center">
            <Grid item>
              <Link to="/conditions-of-use">
                <FooterLink variant="caption">Conditions of Use</FooterLink>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/privacy-notice">
                <FooterLink variant="caption">Privacy Notice</FooterLink>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/interest-based-ads">
                <FooterLink variant="caption">Interest-Based Ads</FooterLink>
              </Link>
            </Grid>
          </Grid>
          <Typography
            variant="caption"
            sx={{ mt: 2, display: "block", color: "#DDDDDD" }}
          >
            © 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its
            affiliates
          </Typography>
        </Container>
      </FooterBottom>
    </Box>
  );
};

export default Footer;
