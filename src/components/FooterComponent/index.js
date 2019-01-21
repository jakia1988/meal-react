import React from 'react'
import FooterLogo from './FooterLogo'
import FooterNav from './FooterNav'
import CopyRight from './CopyRight'
export default function FooterView() {
  return (
   <div> <footer className="padding-top-100px padding-bottom-70px background-dark">
		<div className="container">
			<div className="row">
              <FooterLogo/>
              <FooterNav/>
              
            </div>
		</div>
	</footer>
    <CopyRight/>
    </div>
  )
}
