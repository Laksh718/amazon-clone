import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const SubHeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#232f3e",
  color: "white",
  padding: "8px 15px",
  display: "flex",
  alignItems: "center",
  gap: "15px",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
}));

const NavItem = styled(Typography)(({ theme }) => ({
  fontSize: "0.85rem",
  fontWeight: 400,
  whiteSpace: "nowrap",
  padding: "0 5px",
  "&:hover": {
    textDecoration: "underline",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
}));

const SubHeader: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <SubHeaderContainer>
      <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
        <MenuIcon sx={{ mr: 0.5, fontSize: isMobile ? "1.2rem" : "1.5rem" }} />
        <NavItem sx={{ fontWeight: "bold" }}>All</NavItem>
      </Box>

      <Link to="/category/deals">
        <NavItem>Today's Deals</NavItem>
      </Link>

      <Link to="/category/customer-service">
        <NavItem>Customer Service</NavItem>
      </Link>

      <Link to="/registry">
        <NavItem>Registry</NavItem>
      </Link>

      <Link to="/gift-cards">
        <NavItem>Gift Cards</NavItem>
      </Link>

      <Link to="/category/sell">
        <NavItem>Sell</NavItem>
      </Link>

      {!isMobile && (
        <>
          <Link to="/category/electronics">
            <NavItem>Electronics</NavItem>
          </Link>

          <Link to="/category/computers">
            <NavItem>Computers</NavItem>
          </Link>

          <Link to="/category/home-garden">
            <NavItem>Home & Garden</NavItem>
          </Link>

          <Link to="/category/fashion">
            <NavItem>Fashion</NavItem>
          </Link>

          <Link to="/category/toys">
            <NavItem>Toys & Games</NavItem>
          </Link>
        </>
      )}
    </SubHeaderContainer>
  );
};

export default SubHeader;
