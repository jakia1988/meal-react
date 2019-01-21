import React from 'react'
import {Link} from 'react-router-dom'
export default function FoodFeed() {
  return (
    <div className="instgram-feed">
		<div className="row no-gutters">
			<div className="col-md-2 col-6">
				<Link to=""><img src="assets/img/instgram-1.jpg" alt=""/></Link>
			</div>
			<div className="col-md-2 col-6">
				<Link to=""><img src="assets/img/instgram-2.jpg" alt=""/></Link>
			</div>
			<div className="col-md-2 col-6">
				<Link to=""><img src="assets/img/instgram-3.jpg" alt=""/></Link>
			</div>
			<div className="col-md-2 col-6">
				<Link to=""><img src="assets/img/instgram-4.jpg" alt=""/></Link>
			</div>
			<div className="col-md-2 col-6">
				<Link to=""><img src="assets/img/instgram-5.jpg" alt=""/></Link>
			</div>
			<div className="col-md-2 col-6">
				<Link to=""><img src="assets/img/instgram-6.jpg" alt=""/></Link>
			</div>
		</div>
	</div>
  )
}
