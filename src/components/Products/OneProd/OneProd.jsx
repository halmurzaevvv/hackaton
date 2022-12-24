import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { productContext } from '../../../Context/ProductContextProvider';

export default function OneProd({item}) {
    const { addProd } = useContext(productContext);
    const navigate = useNavigate();
    return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={item.img}
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {item.title}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        {item.type}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item.price}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">
        Delete
      </Button>
      <Button size="small">
        Edit
      </Button>
    </CardActions>
  </Card>
);
};