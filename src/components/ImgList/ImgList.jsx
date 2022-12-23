import * as React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import "./ImgList.css"

function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
			size * rows
		}&fit=crop&auto=format&dpr=2 2x`,
	}
}

export default function ImgList() {
	return (
		<section className="img-list">
			<ImageList
				// sx={{ width: 500, height: 450 }}
				variant="quilted"
				cols={4}
				rowHeight={300}
			>
				{itemData.map((item) => (
					<ImageListItem
						key={item.img}
						cols={item.cols || 1}
						rows={item.rows || 1}
					>
						<img
							{...srcset(item.img, 121, item.rows, item.cols)}
							alt={item.title}
							loading="lazy"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</section>
	)
}

const itemData = [
	{
		img: "https://besthqwallpapers.com/Uploads/8-3-2020/124121/thumb2-meat-pizza-fast-food-pizza-4k-baking.jpg",
		title: "pizza1",
	},
	{
		img: "https://wallpaperforu.com/wp-content/uploads/2020/08/food-wallpaper-20080219235822.jpg",
		title: "pizza2",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://img3.goodfon.com/wallpaper/nbig/3/cd/eda-picca-pizza-wallpapers.jpg",
		title: "pizza3",
		rows: 2,
		cols: 1,
	},
	{
		img: "https://images.alphacoders.com/151/151233.jpg",
		title: "pizza4",
	},
]
