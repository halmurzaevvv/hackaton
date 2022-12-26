import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { productContext } from "../../../Context/ProductContextProvider";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { cartContext } from "../../../Context/CartContextProvider";
import { IconButton } from "@mui/material";
import "./OnePizza.css";

export default function OnePizza({ item }) {
  const { deleteProduct } = useContext(productContext);
  const { addProductToCart, checkProductInCart } = useContext(cartContext);
  const navigate = useNavigate();

  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <Card
      sx={{
        maxWidth: 305,
        m: "1vw",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={item.img}
        alt="Some photo📷"
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
      <CardActions className="cart-action1">
        <Button className="read-more" variant="contained">
          Read more
        </Button>
      </CardActions>
      <CardActions className="cart-action2">
        <div className="counter-unput">
          <div className="input-group">
            <div class="input-group-prepend">
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={decNum}
              >
                -
              </button>
            </div>
            <input
              type="text"
              className="form-control"
              value={num}
              onChange={handleChange}
            />
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={incNum}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <Button className="buy" variant="outlined">
          Text
        </Button>
      </CardActions>
    </Card>
  );
}
