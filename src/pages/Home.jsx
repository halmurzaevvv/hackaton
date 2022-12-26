import React from "react"
import Banner from "../components/Banner/Banner"
import Description from "../components/Description/Description"
import News from "../components/News/News"
import ImgList from "../components/ImgList/ImgList"
import Footer from "../components/Footer/Footer"

const Home = () => {
	return (
		<div>
			<Banner />
			<Description />
			<News />
			<ImgList />
			<Footer />
		</div>
	)
}

export default Home
