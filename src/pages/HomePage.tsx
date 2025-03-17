import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Product from "../components/Product";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Product as ProductType } from "../types/Product";

const BannerContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "350px",
  [theme.breakpoints.down("md")]: {
    height: "250px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "150px",
  },
}));

const BannerImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const BannerNavButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  color: "#000",
  minWidth: "40px",
  width: "40px",
  height: "80px",
  borderRadius: 0,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  [theme.breakpoints.down("sm")]: {
    height: "60px",
  },
}));

const SectionHeading = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(2),
  borderBottom: "1px solid #ddd",
  paddingBottom: theme.spacing(1),
}));

const ProductContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
}));

const GradientBox = styled(Box)(({ theme }) => ({
  background: "linear-gradient(to bottom, rgba(255,255,255,0), #EAEDED 85%)",
  height: "30px",
  width: "100%",
  position: "absolute",
  bottom: 0,
  left: 0,
  zIndex: 2,
}));

// Sample product data
const productData: ProductType[] = [
  {
    id: "1",
    title:
      "Apple AirPods Pro (2nd Generation) Wireless Earbuds with USB‑C Charging",
    price: 249.99,
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UL320_.jpg",
    isPrime: true,
    discount: 20,
  },
  {
    id: "2",
    title:
      "Samsung Galaxy S23 Ultra Cell Phone, Factory Unlocked Android Smartphone, 256GB",
    price: 1199.99,
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/71Sa3dqTqzL._AC_UL320_.jpg",
    isPrime: true,
    discount: 15,
  },
  {
    id: "3",
    title:
      "Apple 2023 MacBook Pro Laptop M3 Pro chip with 12‑core CPU, 18‑core GPU: 14.2-inch",
    price: 1999.99,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/61RnQM+ZXBL._AC_UL320_.jpg",
    isPrime: true,
    discount: 10,
  },
  {
    id: "4",
    title:
      "Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones",
    price: 399.99,
    rating: 4.6,
    image: "https://m.media-amazon.com/images/I/61+btxzpfDL._AC_UL320_.jpg",
    isPrime: true,
    discount: 25,
  },
  {
    id: "5",
    title: 'Amazon Fire TV 50" 4-Series 4K UHD smart TV',
    price: 449.99,
    rating: 4.4,
    image: "https://m.media-amazon.com/images/I/71cVOgvystL._AC_UL320_.jpg",
    isPrime: true,
    discount: 30,
  },
  {
    id: "6",
    title:
      "Logitech MX Master 3S - Wireless Performance Mouse with Ultra-fast Scrolling",
    price: 99.99,
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/616ljqKS+xL._AC_UL320_.jpg",
    isPrime: true,
  },
  {
    id: "7",
    title:
      "Apple iPad Pro 12.9-inch (6th Generation): with M2 chip, Liquid Retina XDR Display",
    price: 1099.99,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/81hAx31maul._AC_UL320_.jpg",
    isPrime: true,
  },
  {
    id: "8",
    title: "Echo Dot (5th Gen, 2022 release) | Smart speaker with Alexa",
    price: 49.99,
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/71xoR4A4HQL._AC_UL320_.jpg",
    isPrime: true,
    discount: 40,
  },
];

const bannerImages = [
  "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
];

const HomePage: React.FC = () => {
  const [activeBanner, setActiveBanner] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handlePrevBanner = () => {
    setActiveBanner((prev) =>
      prev === 0 ? bannerImages.length - 1 : prev - 1
    );
  };

  const handleNextBanner = () => {
    setActiveBanner((prev) =>
      prev === bannerImages.length - 1 ? 0 : prev + 1
    );
  };

  // Automatically change banner every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNextBanner();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeBanner]);

  return (
    <Box sx={{ backgroundColor: "#EAEDED", pt: 0, pb: 4 }}>
      <BannerContainer>
        <BannerImage
          src={bannerImages[activeBanner]}
          alt="Amazon promotion banner"
        />
        <BannerNavButton onClick={handlePrevBanner} sx={{ left: 0 }}>
          <ArrowBackIosNewIcon />
        </BannerNavButton>
        <BannerNavButton onClick={handleNextBanner} sx={{ right: 0 }}>
          <ArrowForwardIosIcon />
        </BannerNavButton>
        <GradientBox />
      </BannerContainer>

      <Container
        maxWidth="xl"
        sx={{ mt: -12, position: "relative", zIndex: 3 }}
      >
        <Grid container spacing={3}>
          {/* Featured Deals Section */}
          <Grid item xs={12}>
            <ProductContainer>
              <SectionHeading>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ fontWeight: "bold" }}
                >
                  Today's Deals
                </Typography>
                <Button
                  size="small"
                  sx={{ color: "#007185" }}
                  endIcon={<ArrowForwardIosIcon sx={{ fontSize: "0.7rem" }} />}
                >
                  See all deals
                </Button>
              </SectionHeading>

              <Grid container spacing={2}>
                {productData.slice(0, 4).map((product) => (
                  <Grid item xs={6} sm={6} md={3} key={product.id}>
                    <Product {...product} />
                  </Grid>
                ))}
              </Grid>
            </ProductContainer>
          </Grid>

          {/* Electronics Section */}
          <Grid item xs={12} md={8}>
            <ProductContainer>
              <SectionHeading>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ fontWeight: "bold" }}
                >
                  Electronics & Devices
                </Typography>
                <Button
                  size="small"
                  sx={{ color: "#007185" }}
                  endIcon={<ArrowForwardIosIcon sx={{ fontSize: "0.7rem" }} />}
                >
                  See more
                </Button>
              </SectionHeading>

              <Grid container spacing={2}>
                {productData.slice(4, 8).map((product) => (
                  <Grid item xs={6} sm={6} md={6} lg={3} key={product.id}>
                    <Product {...product} />
                  </Grid>
                ))}
              </Grid>
            </ProductContainer>
          </Grid>

          {/* Sign In Card */}
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h6"
                component="h2"
                sx={{ mb: 2, fontWeight: "bold" }}
              >
                Sign in for the best experience
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#FFD814",
                  color: "#111",
                  "&:hover": {
                    backgroundColor: "#F7CA00",
                  },
                  mb: 2,
                }}
              >
                Sign in securely
              </Button>

              <Box sx={{ mt: "auto" }}>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
                  alt="Amazon shipping"
                  style={{
                    width: "100%",
                    maxHeight: isTablet ? "150px" : "200px",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Paper>
          </Grid>

          {/* Recommended Products */}
          <Grid item xs={12}>
            <ProductContainer>
              <SectionHeading>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ fontWeight: "bold" }}
                >
                  Recommended For You
                </Typography>
                <Button
                  size="small"
                  sx={{ color: "#007185" }}
                  endIcon={<ArrowForwardIosIcon sx={{ fontSize: "0.7rem" }} />}
                >
                  See more recommendations
                </Button>
              </SectionHeading>

              <Grid container spacing={2}>
                {productData.slice(2, 6).map((product) => (
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    md={3}
                    lg={3}
                    key={product.id + "-rec"}
                  >
                    <Product {...product} />
                  </Grid>
                ))}
              </Grid>
            </ProductContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
