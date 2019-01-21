
import React from 'react'

import Slider from "react-slick";

let settings = {
	dots: false,
	infinite: false,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	arrow: false
};	

export default function CategoryComponent(props) {	
  return (
	<Slider {...settings}  className="category-slider">
		{props.category.map((repo, index) => {
          return (  
			<div className="sm-mb-25px" key={repo.idCategory}>
				<a href={'category/'+repo.idCategory} className="d-block  background-main-color text-white hvr-float">
					<div className="thum"><img src={repo.strCategoryThumb} alt={repo.strCategory}/></div>
					<h4 className="text-center padding-15px">{repo.strCategory}</h4>
				</a>
			</div>
          )
        })}
	</Slider>
  )
}

