import React from 'react'

export default function DownloadApp() {
  return (
    <div className="padding-tb-100px">
		<div className="container">
			<div className="row">
				<div className="col-md-8">
					<div className="h2 text-grey-2 margin-bottom-12px margin-top-20px font-weight-300"><span className="text-dark">Download</span> Cook Note App</div>
				</div>
				<div className="col-md-4 text-lg-right">

					<a href="#" className="btn box-shadow padding-lr-30px  padding-tb-10px btn-sm border-2 border-radius-30 btn-inline-block background-main-color text-white margin-right-20px margin-tb-12px"><i className="fab fa-google-play"></i> Google Play</a>

					<a href="#" className="btn box-shadow padding-lr-30px  padding-tb-10px btn-sm border-2 border-radius-30 btn-inline-block background-dark text-white margin-tb-12px"><i className="fab fa-apple"></i>  App Store</a>

				</div>
			</div>
		</div>
	</div>
  )
}
