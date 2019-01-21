import React from 'react'
import SearchComponent from './SearchComponent'
export default function BannerComponent() {
  return (
    <div className="banner padding-tb-20px background-overlay" style={{backgroundImage: " url('assets/img/banner_1.jpg')"}}>
		<div className="container">

			<div className="padding-tb-120px z-index-2 position-relative">
				<div className="text-center">
					<h1 className="text-white pull-l icon-large font-weight-500 margin-bottom-40px">+20,000</h1>
					<h3 className="text-white icon-large font-weight-100">Cooking Recipes</h3>
				</div>
				<SearchComponent/>				
			</div>
		</div>
		
	</div>
  )
}
