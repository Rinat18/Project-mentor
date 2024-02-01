import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { AddProducts } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });
  const handleInput = (e) => {
    if (e.target.name === "price") {
      const obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      const obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  const handleClick = () => {
    AddProducts(product);
  };

  return (
    <Box
      sx={{
        width: "50vw",
        height: 500,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" align="center">
        ADMIN PAGE
      </Typography>
      <TextField
        onChange={handleInput}
        id="outlined-basic"
        name="title"
        label="title"
        variant="outlined"
      />
      <TextField
        onChange={handleInput}
        id="filled-basic"
        name="description"
        label="Description"
        variant="filled"
      />
      <TextField
        onChange={handleInput}
        type="number"
        id="standard-basic"
        name="price"
        label="Price"
        variant="standard"
      />
      <TextField
        onChange={handleInput}
        id="standard-basic"
        name="image"
        label="Image"
        variant="standard"
      />
      <Button fullWidth variant="outlined" onClick={handleClick}>
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
