import { Badge, Button } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link, NavLink, useNavigate } from "react-router-dom"
import logo from "../../assets/img/logo-pizza.png"
import "./NavBar.css"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState("home")
	const [scrolled, setScrolled] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener("scroll", onScroll)

		return () => window.removeEventListener("scroll", onScroll)
	})

	function goToHome() {
		navigate("/?q=#home")
	}
	function goToMenu() {
		navigate("/menu")
	}
	function goToMake() {
		navigate("/make")
	}
	function goToReviews() {
		navigate("/reviews")
	}
	function goToContacts() {
		navigate("/?q=#contacts")
	}
	function goToCart() {
		navigate("/cart")
	}

	return (
		<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
			<Container>
				<Navbar.Brand>
					<Nav.Link href="#home" onClick={goToHome}>
						<img src={logo} alt="Logo" />
					</Nav.Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link
							onClick={goToMake}
							className={
								activeLink === "make" ? "active navbar-link" : "navbar-link"
							}
						>
							How we make pizza
						</Nav.Link>
						<Nav.Link
							onClick={goToMenu}
							className={
								activeLink === "menu" ? "active navbar-link" : "navbar-link"
							}
						>
							Menu
						</Nav.Link>
						<Nav.Link
							onClick={goToReviews}
							className={
								activeLink === "reviews" ? "active navbar-link" : "navbar-link"
							}
						>
							Reviews
						</Nav.Link>
						<Nav.Link
							href="#contacts"
							onClick={goToContacts}
							className={
								activeLink === "contacts" ? "active navbar-link" : "navbar-link"
							}
						>
							Contacts
						</Nav.Link>
						<Nav.Link
							onClick={goToCart}
							className={
								activeLink === "cart" ? "active navbar-link" : "navbar-link"
							}
						>
							<Button sx={{ my: -1, color: "#fff" }}>
								<Badge>
									<ShoppingCartIcon />
								</Badge>
							</Button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
