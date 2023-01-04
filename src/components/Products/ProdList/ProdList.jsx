import { Box, Container, Grid, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productContext } from "../../../Context/ProductContextProvider";
import OneProd from "../OneProd/OneProd";
import "./ProdList.css";

const ProdList = () => {
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
    <Container className="prod-list">
      <Box p={1}>
        <Grid container spacing={3}>
          <Grid
            item
            sx={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
            md={12}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                minHeight: "40vh",
                mb: "3.5vh",
              }}
            >
              {products ? (
                currentData().map((item) => (
                  <OneProd item={item} key={item.id} />
                ))
              ) : (
                <h2>Loading...</h2>
              )}
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
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProdList;
