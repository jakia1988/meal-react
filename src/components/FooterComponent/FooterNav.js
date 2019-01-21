import React from 'react'
import {HEADER_NAV} from '../../constents/globalNavigation';
import {Link} from 'react-router-dom'
const menuList  = HEADER_NAV.map((item,key)=>{
	return <li key={item.name} className="col-6  padding-tb-5px"><Link to={item.link} className="text-grey-2">{item.name}</Link></li>
})
export default function FooterNav() {
  return (
    <div className="col-lg-4  col-md-4 sm-mb-30px">
					<ul className="footer-menu-2 row margin-0px padding-0px list-unstyled">
					     {menuList}                
					</ul>
	</div>
  )
}
