import { Box, Container, Grid } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import { productContext } from "../../Context/ProductContextProvider"
import "./News.css"
import OnePizza from "../Menu/OnePizza/OnePizza"

const News = () => {
	const { products, getProducts } = useContext(productContext)

	const [page, setPage] = useState(1)

	useEffect(() => {
		getProducts()
	}, [])

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

export default News
