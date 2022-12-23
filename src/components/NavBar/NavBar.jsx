import { useEffect, useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import logo from "../../assets/img/logo.svg"
import "./NavBar.css"

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState("home")
	const [scrolled, setScrolled] = useState(false)

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

	const pages = [
		{ name: "HOME", link: "/about", id: 1 },
		{ name: "MAKE", link: "/contacts", id: 2 },
		{ name: "MENU", link: "/menu", id: 3 },
		{ name: "REVIEWS", link: "/reviews", id: 4 },
		{ name: "DELIVERY", link: "/delivery", id: 5 },
		{ name: "CONTACTS", link: "/contacts", id: 6 },
	]

	return (
		<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
			<Container>
				<Navbar.Brand href="#home">
					<img src={logo} alt="Logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link
							href="#"
							className={
								activeLink === "make" ? "active navbar-link" : "navbar-link"
							}
						>
							How we make pizza
						</Nav.Link>
						<Nav.Link
							href="#"
							className={
								activeLink === "menu" ? "active navbar-link" : "navbar-link"
							}
						>
							Menu
						</Nav.Link>
						<Nav.Link
							href="#"
							className={
								activeLink === "reviews" ? "active navbar-link" : "navbar-link"
							}
						>
							Reviews
						</Nav.Link>
						<Nav.Link
							href="#"
							className={
								activeLink === "delivery" ? "active navbar-link" : "navbar-link"
							}
						>
							Delivery
						</Nav.Link>
						<Nav.Link
							href="#"
							className={
								activeLink === "contacts" ? "active navbar-link" : "navbar-link"
							}
						>
							Contacts
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
