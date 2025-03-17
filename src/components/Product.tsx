import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
  Button,
  Chip,
  useMediaQuery,
  useTheme,
  Snackbar,
  Alert,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { useCart } from "../context/CartContext";
import { Product as ProductType } from "../types/Product";

const ProductCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },
}));

const PriceContainer = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  marginTop: 8,
  marginBottom: 8,
});

const Product: React.FC<ProductType> = ({
  id,
  title,
  price,
  rating,
  image,
  isPrime = false,
  discount = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const { addToCart } = useCart();

  const finalPrice = discount > 0 ? price * (1 - discount / 100) : price;

  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      price: finalPrice,
      rating,
      image,
      isPrime,
      discount,
    });
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const displayPrice =
    discount > 0
      ? (price - (price * discount) / 100).toFixed(2)
      : price.toFixed(2);

  return (
    <>
      <ProductCard
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        elevation={isHovered ? 6 : 1}
      >
        <CardMedia
          component="img"
          height={isMobile ? "140" : "200"}
          image={image}
          alt={title}
          sx={{
            objectFit: "contain",
            p: 2,
            backgroundColor: "#f8f8f8",
          }}
        />
        <CardContent
          sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
        >
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            sx={{
              fontWeight: 400,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              height: "3em",
              mb: 1,
            }}
          >
            {title}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Rating
              name="read-only"
              value={rating}
              precision={0.5}
              readOnly
              size="small"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
              ({Math.floor(Math.random() * 1000) + 100})
            </Typography>
          </Box>

          <PriceContainer>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              ${displayPrice}
            </Typography>

            {discount > 0 && (
              <>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textDecoration: "line-through",
                    ml: 1,
                    mt: 0.5,
                  }}
                >
                  ${price.toFixed(2)}
                </Typography>
                <Chip
                  label={`${discount}% off`}
                  size="small"
                  color="error"
                  sx={{ ml: 1, height: 20, mt: 0.5 }}
                />
              </>
            )}
          </PriceContainer>

          {isPrime && (
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocalShippingOutlinedIcon
                fontSize="small"
                color="primary"
                sx={{ mr: 0.5 }}
              />
              <Typography
                variant="caption"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                Prime FREE Delivery
              </Typography>
            </Box>
          )}

          <Box sx={{ p: 1, mt: "auto" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#FFD814",
                color: "#111",
                "&:hover": {
                  backgroundColor: "#F7CA00",
                },
                textTransform: "none",
                fontSize: isMobile ? "0.7rem" : "0.8rem",
              }}
              onClick={handleAddToCart}
              startIcon={<ShoppingCartOutlinedIcon />}
            >
              Add to Cart
            </Button>
          </Box>
        </CardContent>
      </ProductCard>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Item added to cart!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Product;
