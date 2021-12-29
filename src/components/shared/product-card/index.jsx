import * as React from "react";

import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { addProduct } from "../../../store/actions";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";

export default function ProductCard({ item }) {
  const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: 345, margin: "2rem" }}>
      <CardMedia
        component="img"
        height="194"
        image={item?.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item?.description}
        </Typography>
      </CardContent>
      <Button
        onClick={() => {
          addProduct(item)(dispatch);
        }}
      >
        Add to cart
      </Button>
    </Card>
  );
}
