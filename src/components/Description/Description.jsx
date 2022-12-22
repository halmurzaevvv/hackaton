import React from "react"
import "./Description.css"
import { Col, Container, Row } from "react-bootstrap"

const Description = () => {
	return (
		<section className="descr">
			<Container className="center">
				<Row className="block">
					<h1 className="block-title">lorem LOREM</h1>
					<Col xs={12} md={6} xl={7} className="block-descr1 block-descr">
						<p className="num">01</p>
						<p className="text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
							fugiat, sequi debitis cumque ipsa aut.
						</p>
					</Col>
					<Col xs={12} md={6} xl={7} className="block-descr2 block-descr">
						<p className="num">02</p>
						<p className="text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
							fugiat, sequi debitis cumque ipsa aut.
						</p>
					</Col>
					<Col xs={12} md={6} xl={7} className="block-descr3 block-descr">
						<p className="num">03</p>
						<p className="text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
							fugiat, sequi debitis cumque ipsa aut.
						</p>
					</Col>
					<Col xs={12} md={6} xl={7} className="block-descr4 block-descr">
						<p className="num">04</p>
						<p className="text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
							fugiat, sequi debitis cumque ipsa aut.
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Description
