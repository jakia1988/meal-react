import React from 'react'
import {HEADER_NAV} from '../../constents/globalNavigation';
import {Link} from 'react-router-dom'

const menuList  = HEADER_NAV.map((item,key)=>{
	return <li key={item.name}><Link to={item.link}>{item.name}</Link></li>
})

export default function Navigation() {
  return (
    <div className="col-lg-8 col-md-12 position-inherit">
		<ul id="menu-main" className="white-link dropdown-dark text-lg-center nav-menu link-padding-tb-17px">
			{menuList}
		</ul>
	</div>
  )
}
