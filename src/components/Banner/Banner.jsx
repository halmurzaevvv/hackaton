import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"
// import headerImg from "../../assets/img/header-img.svg"
import "./Banner.css"

const Banner = () => {
	const [loopNum, setLoopNum] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)
	const toRotate = ["Real Neapolitan pizza", "from the wood oven"]
	const [text, setText] = useState("")
	const [delta, setDelta] = useState(200 - Math.random() * 100)
	const period = 1000

	useEffect(() => {
		let ticker = setInterval(() => {
			tick()
		}, delta)

		return () => clearInterval(ticker)
	}, [text])

	const tick = () => {
		let i = loopNum % toRotate.length
		let fullText = toRotate[i]
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1)

		setText(updatedText)

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2)
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true)
			setDelta(period)
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false)
			setLoopNum(loopNum + 1)
			setDelta(500)
		}
	}

	const pages = [
		{ name: "Cart", link: "/cart", id: 7 },
	  ];

	  const navigate = useNavigate();

	  function goToMenu() {
		navigate("/menu");
	  }

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<h1>
							{`Pizzeria Napoletana`}
							<br />
							<span className="wrap" style={{ fontSize: "40px" }}>
								{text}
								<br />
							</span>
						</h1>
						<p>Place your first order and get 10% off</p>
						<span className="tagline">PIZZERIA OPEN FROM 11 TO 21 HOURS</span>
						<button onClick={() => goToMenu()}>
							ORDER <ArrowRightCircle size={25} />
						</button>
					</Col>
					<Col className="headerImg" xs={12} md={6} xl={5}>
						<img
							src="https://www.pizzaupten.com/wp-content/uploads/2022/02/pizza.png"
							alt="Header Img"
						/>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Banner
