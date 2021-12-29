import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/shared/product-card";
import { initProduct } from "../../store/actions";

const HomeView = () => {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    initProduct()(dispatch);
  }, []);
  return (
    <Box sx={{ flexDirection: "row", flexWrap: "wrap" }}>
      {products?.map((item, i) => (
        <ProductCard item={item} key={i} />
      ))}
    </Box>
  );
};

export default HomeView;
