import React, { useContext, useState } from "react"
import { productContext } from "../../../Context/ProductContextProvider"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import "./Add.css"

const Add = () => {
	const { addProduct } = useContext(productContext)
	const navigate = useNavigate()

	const [product, setProduct] = useState({
		title: "",
		price: 0,
		img: "",
		type: "",
	})

	const handleInp = (e) => {
		if (e.target.name === "price") {
			let obj = { ...product, [e.target.name]: Number(e.target.value) }
			setProduct(obj)
		} else {
			let obj = { ...product, [e.target.name]: e.target.value }
			setProduct(obj)
		}
	}

	return (
		<div className="add">
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
					onChange={handleInp}
					name="title"
					id="outlined-basic"
					label="Title"
					variant="outlined"
				/>
				<TextField
					onChange={handleInp}
					name="img"
					id="outlined-basic"
					label="Image"
					variant="outlined"
				/>
				<TextField
					onChange={handleInp}
					name="price"
					id="outlined-basic"
					label="Price"
					variant="outlined"
				/>
				<TextField
					onChange={handleInp}
					name="type"
					id="outlined-basic"
					label="Type"
					variant="outlined"
				/>
				<Button
					onClick={() => {
						addProduct(product)
						navigate("/products")
					}}
					variant="outlined"
				>
					Add prod
				</Button>
			</Box>
		</div>
	)
}

export default Add
