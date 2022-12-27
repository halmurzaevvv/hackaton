import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { productContext } from "../../../Context/ProductContextProvider"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import { cartContext } from "../../../Context/CartContextProvider"
import { IconButton } from "@mui/material"
import "./OnePizza.css"
import { Nav } from "react-bootstrap"

export default function OnePizza({ item }) {
	const { deleteProduct } = useContext(productContext)
	const { addProductToCart, checkProductInCart } = useContext(cartContext)
	const navigate = useNavigate()

	let [num, setNum] = useState(0)
	let incNum = () => {
		if (num < 10) {
			setNum(Number(num) + 1)
		}
	}
	let decNum = () => {
		if (num > 0) {
			setNum(num - 1)
		}
	}
	let handleChange = (e) => {
		setNum(e.target.value)
	}

  function goToCart() {
    navigate("/cart");
  }

	return (
		<Card
			className="card"
			sx={{
				maxWidth: 300,
				m: "1vw",
			}}
		>
			<CardMedia
				className="card-image"
				component="img"
				height="130"
				image={item.img}
				alt="Some photo📷"
			/>
			<CardContent className="card-block">
				<Typography
					className="card-title"
					gutterBottom
					variant="h6"
					component="div"
				>
					{item.title}
				</Typography>
				<Typography
					className="card-type"
					gutterBottom
					variant="body2"
					component="div"
				>
					{item.type}
				</Typography>
				<Typography
					variant="body3"
					className="card-desc"
					color="text.secondary"
				>
					{item.desc}
				</Typography>
				<Typography className="card-price">{item.price}</Typography>
			</CardContent>
			<CardActions className="cart-action1">
				<Button className="read-more" variant="contained">
					Read more
				</Button>
			</CardActions>
			<CardActions className="cart-action2">
      <IconButton size="small" onClick={() => addProductToCart(item)}>
          <ShoppingCartIcon color={checkProductInCart(item.id) ? "primary" : ""} />
        </IconButton>
        <Nav.Link
        onClick={goToCart}>
				<Button className="buy" variant="outlined">
					BUY
				</Button>
        </Nav.Link>
			</CardActions>
		</Card>
	)
}
