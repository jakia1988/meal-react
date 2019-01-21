import React from 'react'
import Navigation from './Navigation'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="background-main-color">
		<div className="container">
			<div className="header-output">
				<div className="header-in">

					<div className="row">
           <Logo/>
           <Navigation/>
                       
					</div>

				</div>
			</div>
		</div>
	</header>

  )
}
