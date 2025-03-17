import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  IconButton,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import { useCart } from "../context/CartContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#febd69",
  "&:hover": {
    backgroundColor: "#f3a847",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
    flexGrow: 1,
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 2),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const HeaderOption = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  color: "white",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Logo = styled("img")(({ theme }) => ({
  width: 100,
  marginRight: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    width: 80,
  },
}));

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const { cart } = useCart();

  // Calculate total items in cart
  const cartItemCount = cart.items.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#131921" }}>
      <Toolbar>
        <Link to="/">
          <Logo
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon logo"
          />
        </Link>

        {isMobile ? (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <>
            <HeaderOption>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="caption" sx={{ fontSize: "0.7rem" }}>
                  Deliver to
                </Typography>
              </Box>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Select Location
              </Typography>
            </HeaderOption>
          </>
        )}

        <Search>
          <StyledInputBase
            placeholder="Search Amazon"
            inputProps={{ "aria-label": "search" }}
          />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </Search>

        <HeaderOption>
          <Typography variant="caption" sx={{ fontSize: "0.7rem" }}>
            Hello, Sign in
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Account & Lists
            </Typography>
            <ArrowDropDownIcon fontSize="small" />
          </Box>
        </HeaderOption>

        <HeaderOption>
          <Typography variant="caption" sx={{ fontSize: "0.7rem" }}>
            Returns
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            & Orders
          </Typography>
        </HeaderOption>

        <Link to="/checkout">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              ml: isMobile ? "auto" : 0,
            }}
          >
            <Badge badgeContent={cartItemCount} color="warning">
              <ShoppingCartIcon />
            </Badge>
            {!isMobile && (
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "bold", ml: 1 }}
              >
                Cart
              </Typography>
            )}
          </Box>
        </Link>
      </Toolbar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{ mt: "45px" }}
      >
        <MenuItem onClick={handleMenuClose}>Home</MenuItem>
        <MenuItem onClick={handleMenuClose}>Shop by Category</MenuItem>
        <MenuItem onClick={handleMenuClose}>Today's Deals</MenuItem>
        <MenuItem onClick={handleMenuClose}>Customer Service</MenuItem>
        <MenuItem onClick={handleMenuClose}>Your Account</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
