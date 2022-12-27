import { Container } from "@mui/system"
import React from "react"
import { Row } from "react-bootstrap"
import "./Footer.css"

const Footer = () => {
	return (
		<section className="footer">
			<Container className="center-footer">
				<Row className="block-footer" id="contacts">
					<h1 className="footer-title footers">Contact us</h1>
					<h3 className="footer-descr footers">
						We love our guests and are always happy to chat, subscribe to our
						social networks and always stay up to date.
					</h3>
					<a href="/">
						<img
							className="footer-icon footers"
							src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
							alt="#"
						/>
					</a>

					<p className="footers footer-contact">+996 995 444 111</p>
					<p className="footers footer-mail ">onetwothree@gmail.com</p>
					<p className="footers footer-bottom ">
						Offers of cooperation will be considered exclusively by mail
					</p>
				</Row>
			</Container>
		</section>
	)
}

export default Footer
