import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { shallowEqual } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const cart = useSelector((state) => state.cart, shallowEqual);
  console.log(cart);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Products
          </Typography>
          <Link to="/cart">
            <ShoppingCartIcon />
            <button>{cart?.count || 0}</button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
