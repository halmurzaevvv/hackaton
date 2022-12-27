import { Box, Container, Grid } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { productContext } from "../../Context/ProductContextProvider"
import "./News.css"
import OnePizza from "../Menu/OnePizza/OnePizza"

const MenuList = () => {
	const { products, getProducts, fetchByParams } = useContext(productContext)

	const [searchParams, setSearchParams] = useSearchParams()
	const [search, setSearch] = useState(searchParams.get("q") || "")
	const [page, setPage] = useState(1)
	const count = Math.ceil(products.length / 3)

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
		const end = begin + 3
		return products.slice(begin, end)
	}

	return (
		<Container className="news">
			<p className="uptitle">
				WAITED, WAITED, AND FINALLY WAITED, EXCLUSIVE ONLY ON THE SITE UNTIL
				MONDAY!
			</p>
			<h1 className="block-title">NEWS</h1>
			<Box p={5}>
				<Grid container spacing={3}>
					<Grid
						item
						sx={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
						md={15}
					>
						<Box
							className="news-box"
							sx={{
								display: "flex",
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
		</Container>
	)
}

export default MenuList

//   import * as React from "react"
// import "./News.css"
// import Card from "@mui/material/Card"
// import CardActions from "@mui/material/CardActions"
// import CardContent from "@mui/material/CardContent"
// import CardMedia from "@mui/material/CardMedia"
// import Button from "@mui/material/Button"
// import Typography from "@mui/material/Typography"
// import { Container, Row } from "react-bootstrap"
// import { useState } from "react"

// const News = () => {
// 	let [num, setNum] = useState(0)
// 	let incNum = () => {
// 		if (num < 10) {
// 			setNum(Number(num) + 1)
// 		}
// 	}
// 	let decNum = () => {
// 		if (num > 0) {
// 			setNum(num - 1)
// 		}
// 	}
// 	let handleChange = (e) => {
// 		setNum(e.target.value)
// 	}

// 	return (
// 		<section className="news">
// 			<Container className="center-news">
// 				<Row className="block-news">
// 					<p className="uptitle">
// 						WAITED, WAITED, AND FINALLY WAITED, EXCLUSIVE ONLY ON THE SITE UNTIL
// 						MONDAY!
// 					</p>
// 					<h1 className="block-title">NEWS</h1>
// 					<Card className="card" sx={{ maxWidth: 300 }}>
// 						<CardMedia
// 							sx={{ height: 120 }}
// 							image="/static/images/cards/contemplative-reptile.jpg"
// 							title="some pizza"
// 						/>
// 						<CardContent>
// 							<Typography gutterBottom variant="h5" component="div">
// 								Peperoni
// 							</Typography>
// 							<Typography variant="body2" color="text.secondary">
// 								Lizards are a widespread group of squamate reptiles, with over
// 								6,000 species, ranging across all continents except Antarctica
// 							</Typography>
// 							<Typography variant="h6">12$</Typography>
// 						</CardContent>
// 						<CardActions className="cart-action1">
// 							<Button className="read-more" variant="contained">
// 								Read more
// 							</Button>
// 						</CardActions>
// 						<CardActions className="cart-action2">
// 							<div className="counter-unput">
// 								<div className="input-group">
// 									<div class="input-group-prepend">
// 										<button
// 											className="btn btn-outline-primary"
// 											type="button"
// 											onClick={decNum}
// 										>
// 											-
// 										</button>
// 									</div>
// 									<input
// 										type="text"
// 										className="form-control"
// 										value={num}
// 										onChange={handleChange}
// 									/>
// 									<div className="input-group-prepend">
// 										<button
// 											className="btn btn-outline-primary"
// 											type="button"
// 											onClick={incNum}
// 										>
// 											+
// 										</button>
// 									</div>
// 								</div>
// 							</div>
// 							<Button className="buy" variant="outlined">
// 								Text
// 							</Button>
// 						</CardActions>
// 					</Card>
// 					<Card className="card" sx={{ maxWidth: 300 }}>
// 						<CardMedia
// 							sx={{ height: 120 }}
// 							image="/static/images/cards/contemplative-reptile.jpg"
// 							title="some pizza"
// 						/>
// 						<CardContent>
// 							<Typography gutterBottom variant="h5" component="div">
// 								Peperoni
// 							</Typography>
// 							<Typography variant="body2" color="text.secondary">
// 								Lizards are a widespread group of squamate reptiles, with over
// 								6,000 species, ranging across all continents except Antarctica
// 							</Typography>
// 							<Typography variant="h6">12$</Typography>
// 						</CardContent>
// 						<CardActions className="cart-action1">
// 							<Button className="read-more" variant="contained">
// 								Read more
// 							</Button>
// 						</CardActions>
// 						<CardActions className="cart-action2">
// 							<div className="counter-unput">
// 								<div className="input-group">
// 									<div class="input-group-prepend">
// 										<button
// 											className="btn btn-outline-primary"
// 											type="button"
// 											onClick={decNum}
// 										>
// 											-
// 										</button>
// 									</div>
// 									<input
// 										type="text"
// 										className="form-control"
// 										value={num}
// 										onChange={handleChange}
// 									/>
// 									<div className="input-group-prepend">
// 										<button
// 											className="btn btn-outline-primary"
// 											type="button"
// 											onClick={incNum}
// 										>
// 											+
// 										</button>
// 									</div>
// 								</div>
// 							</div>
// 							<Button className="buy" variant="outlined">
// 								Text
// 							</Button>
// 						</CardActions>
// 					</Card>
// 					<Card className="card" sx={{ maxWidth: 300 }}>
// 						<CardMedia
// 							sx={{ height: 120 }}
// 							image="/static/images/cards/contemplative-reptile.jpg"
// 							title="some pizza"
// 						/>
// 						<CardContent>
// 							<Typography gutterBottom variant="h5" component="div">
// 								Peperoni
// 							</Typography>
// 							<Typography variant="body2" color="text.secondary">
// 								Lizards are a widespread group of squamate reptiles, with over
// 								6,000 species, ranging across all continents except Antarctica
// 							</Typography>
// 							<Typography variant="h6">12$</Typography>
// 						</CardContent>
// 						<CardActions className="cart-action1">
// 							<Button className="read-more" variant="contained">
// 								Read more
// 							</Button>
// 						</CardActions>
// 						<CardActions className="cart-action2">
// 							<div className="counter-unput">
// 								<div className="input-group">
// 									<div class="input-group-prepend">
// 										<button
// 											className="btn btn-outline-primary"
// 											type="button"
// 											onClick={decNum}
// 										>
// 											-
// 										</button>
// 									</div>
// 									<input
// 										type="text"
// 										className="form-control"
// 										value={num}
// 										onChange={handleChange}
// 									/>
// 									<div className="input-group-prepend">
// 										<button
// 											className="btn btn-outline-primary"
// 											type="button"
// 											onClick={incNum}
// 										>
// 											+
// 										</button>
// 									</div>
// 								</div>
// 							</div>
// 							<Button className="buy" variant="outlined">
// 								Text
// 							</Button>
// 						</CardActions>
// 					</Card>
// 				</Row>
// 			</Container>
// 		</section>
// 	)
// }

// export default News
