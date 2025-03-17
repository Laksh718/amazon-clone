import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CheckoutPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Format price with two decimal places
  const formatPrice = (price: number): string => {
    return price.toFixed(2);
  };

  // Handle empty cart case
  if (cart.items.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Card sx={{ p: 3, textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            Your Amazon Cart is empty
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Your shopping cart is waiting. Give it purpose – fill it with
            groceries, clothing, household supplies, electronics, and more.
          </Typography>
          <Link to="/">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFD814",
                color: "#111",
                "&:hover": {
                  backgroundColor: "#F7CA00",
                },
                minWidth: 200,
              }}
            >
              Continue Shopping
            </Button>
          </Link>
        </Card>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Cart Items */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Shopping Cart
              </Typography>
              <Typography variant="body2" color="text.secondary" align="right">
                Price
              </Typography>
              <Divider sx={{ my: 2 }} />

              {cart.items.map((item) => (
                <Box key={item.id} sx={{ mb: 3 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3} sm={2}>
                      <CardMedia
                        component="img"
                        image={item.image}
                        alt={item.title}
                        sx={{
                          height: isMobile ? 80 : 120,
                          objectFit: "contain",
                          backgroundColor: "#f8f8f8",
                          p: 1,
                        }}
                      />
                    </Grid>
                    <Grid item xs={7} sm={8}>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="primary"
                        sx={{
                          fontSize: "0.75rem",
                          fontWeight: "bold",
                          display: item.isPrime ? "block" : "none",
                        }}
                      >
                        Prime FREE Delivery
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Qty: {item.quantity || 1}
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() => removeFromCart(item.id)}
                        sx={{
                          mt: 1,
                          color: "#007185",
                          "&:hover": {
                            color: "#C7511F",
                          },
                        }}
                      >
                        <DeleteOutlineIcon fontSize="small" />
                        <Typography variant="caption" sx={{ ml: 0.5 }}>
                          Remove
                        </Typography>
                      </IconButton>
                    </Grid>
                    <Grid item xs={2} sm={2}>
                      <Typography
                        variant="body1"
                        align="right"
                        sx={{ fontWeight: "bold" }}
                      >
                        ${formatPrice(item.price * (item.quantity || 1))}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))}

              <Box sx={{ textAlign: "right", mt: 2 }}>
                <Typography variant="h6">
                  Subtotal (
                  {cart.items.reduce(
                    (total, item) => total + (item.quantity || 1),
                    0
                  )}{" "}
                  items):
                  <Typography
                    component="span"
                    variant="h6"
                    sx={{ fontWeight: "bold", ml: 1 }}
                  >
                    ${formatPrice(cart.totalAmount)}
                  </Typography>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="body2">
                  Items (
                  {cart.items.reduce(
                    (total, item) => total + (item.quantity || 1),
                    0
                  )}
                  ):
                </Typography>
                <Typography variant="body2">
                  ${formatPrice(cart.totalAmount)}
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="body2">Shipping & handling:</Typography>
                <Typography variant="body2">$0.00</Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Order total:
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  ${formatPrice(cart.totalAmount)}
                </Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  backgroundColor: "#FFD814",
                  color: "#111",
                  "&:hover": {
                    backgroundColor: "#F7CA00",
                  },
                }}
              >
                Proceed to Checkout
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
