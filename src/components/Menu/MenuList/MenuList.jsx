import {
	Box,
	Container,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	InputAdornment,
	Pagination,
	Paper,
	Radio,
	RadioGroup,
	TextField,
} from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { productContext } from "../../../Context/ProductContextProvider"
import OneProd from "../../Products/OneProd/OneProd"
import SearchIcon from "@mui/icons-material/Search"
import "./MenuList.css"
import OnePizza from "../OnePizza/OnePizza"

const MenuList = () => {
	const { products, getProducts, fetchByParams } = useContext(productContext)
	const [searchParams, setSearchParams] = useSearchParams()
	const [search, setSearch] = useState(searchParams.get("q") || "")
	const [page, setPage] = useState(1)
	const count = Math.ceil(products.length / 6)

	useEffect(() => {
		getProducts()
	}, [])

	useEffect(() => {
		setSearchParams({
			q: search,
		})
		console.log(searchParams.toString())
	}, [search])

	useEffect(() => {
		getProducts()
	}, [searchParams])

	function currentData() {
		const begin = page - 1
		const end = begin + 6
		return products.slice(begin, end)
	}

	// console.log(products);
	return (
		<Container
			className="prod-list"
			sx={{
				justifyContent: "center",
				display: "flex",
				flexWrap: "wrap",
			}}
		>
			<Grid
				item
				md={12}
				sx={{
					flexWrap: "nowrap",
					width: "100%",
					justifyContent: "center",
					display: "flex",
				}}
			>
				<Paper
					elevation={9}
					sx={{
						flexWrap: "nowrap",
						width: "80%",
						justifyContent: "center",
						alignItems: "center",
						display: "flex",
						borderRadius: "25px",
					}}
				>
					<TextField
						id="input-with-icon-textfield"
						label="Search..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}}
						variant="standard"
					/>
					<FormControl>
						<FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
						<RadioGroup
							sx={{
								width: "100%",
								display: "flex",
								justifyContent: "center",
								flexDirection: "row",
							}}
							aria-labelledby="demo-radio-buttons-group-label"
							defaultValue="all"
							name="radio-buttons-group"
							onChange={(e) => fetchByParams("type", e.target.value)}
						>
							<FormControlLabel
								value="all"
								control={<Radio />}
								label="All 🍕"
							/>
							<FormControlLabel
								value="With meat"
								control={<Radio />}
								label="With meat"
							/>
							<FormControlLabel
								value="Vegetrian"
								control={<Radio />}
								label="Vegetrian"
							/>
							<FormControlLabel
								value="Mushrooms"
								control={<Radio />}
								label="Mushrooms"
							/>
						</RadioGroup>
					</FormControl>
				</Paper>
			</Grid>
			{/* ----------------- */}
			<Box
				className="prod-box"
				p={6}
				sx={{ justifyContent: "center", display: "flex" }}
			>
				<Grid
					container
					spacing={6}
					sx={{ justifyContent: "center", display: "flex" }}
				>
					<Grid
						item
						sx={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
						md={15}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-around",
								flexWrap: "wrap",
								minHeight: "40vh",
								mb: "3.5vh",
							}}
						>
							{products ? (
								currentData().map((item) => (
									<OnePizza item={item} key={item.id} />
								))
							) : (
								<h2>Loading...</h2>
							)}
						</Box>
					</Grid>
				</Grid>
			</Box>
			<div className="pagination">
				<Pagination
					className="pagination1"
					count={count}
					variant="outlined"
					shape="rounded"
					onChange={(e, p) => setPage(p)}
					page={page}
				/>
			</div>
		</Container>
	)
}

export default MenuList
