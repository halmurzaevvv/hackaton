import React, { useContext, useState } from "react"
import { productContext } from "../../../Context/ProductContextProvider"

const Add = () => {
	const { addProd } = useContext(productContext)

	const [prod, setProd] = useState({
		title: "",
		img: "",
		price: 0,
	})

	const collectInp = (e) => {
		if (e.target.name === "price") {
			let obj = { ...prod, [e.target.name]: Number(e.target.value) }
			setProd(obj)
		} else {
			let obj = { ...prod, [e.target.name]: e.target.value }
			setProd(obj)
		}
	}

	return <div></div>
}

export default Add
