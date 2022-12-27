import { Box, Container, Grid } from "@mui/material";
  import React, { useContext, useEffect, useState } from "react";
  import { useSearchParams } from "react-router-dom";
  import { productContext } from "../../Context/ProductContextProvider";
  import "./News.css"
  import OnePizza from "../Menu/OnePizza/OnePizza";
  
  const MenuList = () => {
	const { products, getProducts, fetchByParams } = useContext(productContext);
  
	const [searchParams, setSearchParams] = useSearchParams();
	const [search, setSearch] = useState(searchParams.get("q") || "");
	const [page, setPage] = useState(1);
	const count = Math.ceil(products.length / 3);
  
	useEffect(() => {
	  getProducts();
	}, []);
  
	useEffect(() => {
	  setSearchParams({
		q: search,
	  });
	  console.log(searchParams.toString());
	}, [search]);
  
	useEffect(() => {
	  getProducts();
	}, [searchParams]);
  
	function currentData() {
	  const begin = page - 1;
	  const end = begin + 3;
	  return products.slice(begin, end);
	}
  
	return (
	  <Container className="news">
		<Box p={5}>
		  <Grid  container spacing={3}>
			<Grid 
			  item
			  sx={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
			  md={15}
			>
			  <Box className="news-box"
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
	);
  };
  
  export default MenuList;
	