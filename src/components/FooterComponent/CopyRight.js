import React from 'react'
const GetFullyear = ()=>{
	return new Date().getFullYear()
}

export default function CopyRight() {
  return (
    <div className="padding-tb-10px background-main-color">
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<div className="text-white margin-tb-15px text-center text-lg-left">
						Cook Note | @ <GetFullyear/> All copy rights reserved
					</div>
				</div>
			
			</div>
		</div>
	</div>
  )
}
