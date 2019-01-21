import React from 'react'
import {Link} from 'react-router-dom'
export default function Logo() {
  return (
    <div className="col-lg-2 col-md-12">
		<Link to="/" className="d-inline-block margin-tb-5px"><img src="assets/img/logo-small.png" alt=""/></Link>
	
	</div>
  )
}
