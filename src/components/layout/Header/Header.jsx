import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { shallowEqual } from "react-redux";

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
          <ShoppingCartIcon />
          <button>{cart?.count || 0}</button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
