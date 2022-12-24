import { Box, Container, Grid } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { productContext } from '../../../Context/ProductContextProvider';
import OneProd from '../OneProd/OneProd';

const ProdList = () => {
    const { products, getProd, data } = useContext(productContext);

    useEffect(() => {
        getProd();
    }, []);
    
    return (
        <Container>
          <Box p={5}>
            <Grid container spacing={3}>
              <Grid
                item
                sx={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
                md={9}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    minHeight: "40vh",
                    mb: "3.5vh",
                  }}
                >
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      );
};

export default ProdList;