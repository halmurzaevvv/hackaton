import { MenuItem, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/img/logo.svg"
import "./NavBar.css"

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState("home")
	const [scrolled, setScrolled] = useState(false)

	const [anchorElNav, setAnchorElNav] = React.useState(null)
	const [anchorElUser, setAnchorElUser] = React.useState(null)

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

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
		{ name: "Home", link: "/home", id: 1 },
		{ name: "How we make pizza", link: "/make", id: 2 },
		{ name: "Menu", link: "/products", id: 3 },
		{ name: "Reviews", link: "/reviews", id: 4 },
		{ name: "Delivery", link: "/delivery", id: 5 },
		{ name: "Contacts", link: "/contacts", id: 6 },
	]

	return (
		<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
			<Container>
				<Navbar.Brand>
					<NavLink to="/">
						<img src={logo} alt="Logo" />
					</NavLink>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavLink
							to="/make"
							className={
								activeLink === "make" ? "active navbar-link" : "navbar-link"
							}
						>
							How we make pizza
						</NavLink>
						<NavLink
							to="/menu"
							href="#"
							className={
								activeLink === "menu" ? "active navbar-link" : "navbar-link"
							}
						>
							Menu
						</NavLink>
						<NavLink
							to="/reviews"
							href="#"
							className={
								activeLink === "reviews" ? "active navbar-link" : "navbar-link"
							}
						>
							Reviews
						</NavLink>
						<NavLink
							to="/delivery"
							href="#"
							className={
								activeLink === "delivery" ? "active navbar-link" : "navbar-link"
							}
						>
							Delivery
						</NavLink>
						<NavLink
							to="/contacts"
							href="#"
							className={
								activeLink === "contacts" ? "active navbar-link" : "navbar-link"
							}
						>
							Contacts
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
