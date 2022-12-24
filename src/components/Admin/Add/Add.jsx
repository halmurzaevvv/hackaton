import { Box, Button, TextField, Typography } from "@mui/material"
import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { productContext } from "../../../Context/ProductContextProvider"

const Add = () => {
	const { addProd } = useContext(productContext);
	const navigate = useNavigate();

	const [products, setProd] = useState({
		title: "",
		img: "",
		price: 0,
	})

	const collectInp = (e) => {
		if (e.target.name === "price") {
			let obj = { ...products, [e.target.name]: Number(e.target.value) }
			setProd(obj)
		} else {
			let obj = { ...products, [e.target.name]: e.target.value }
			setProd(obj)
		}
	}

	return (
		<div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography>Add Product Panel</Typography>
        <TextField
          onChange={collectInp}
          name="title"
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <TextField
          onChange={collectInp}
          name="img"
          id="outlined-basic"
          label="Image"
          variant="outlined"
        />
        <TextField
          onChange={collectInp}
          name="price"
          id="outlined-basic"
          label="Price"
          variant="outlined"
        />
        <TextField
          onChange={collectInp}
          name="type"
          id="outlined-basic"
          label="Type"
          variant="outlined"
        />
        <Button
          onClick={() => {
            addProd(products);
            navigate("/products");
          }}
          variant="outlined"
        >
          Add prod
        </Button>
      </Box>
    </div>
  );
}

export default Add
