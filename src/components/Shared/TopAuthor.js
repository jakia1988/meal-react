import React from 'react'

export default function TopAuthor() {
  return (
    <div className="padding-tb-100px background-white">
    <div className="container">

        <div className="title text-center">
            <h2 className="font-weight-700 text-main-color"> Top Authors</h2>
            <div className="row justify-content-center margin-bottom-45px">
                <div className="col-md-7">
                    <p className="text-grey-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
            </div>
        </div>

        <div className="row">

            <div className="col-lg-2 col-md-3 text-center">
                <div className="hvr-float">
                    <div className="thum"><a href="#"><img className="border-radius-8 box-shadow" src="assets/img/authors-1.jpg" alt=""/></a></div>
                    <a className="h4 d-block margin-top-20px" href="#">Ali haleem</a>
                    <small className="text-grey-2">(145 Recipes)</small>
                </div>
            </div>


            <div className="col-lg-2 col-md-3 text-center">
                <div className="hvr-float">
                    <div className="thum"><a href="#"><img className="border-radius-8 box-shadow" src="assets/img/authors-2.jpg" alt=""/></a></div>
                    <a className="h4 d-block margin-top-20px" href="#">Salim Aldosery</a>
                    <small className="text-grey-2">(145 Recipes)</small>
                </div>
            </div>


            <div className="col-lg-2 col-md-3 text-center">
                <div className="hvr-float">
                    <div className="thum"><a href="#"><img className="border-radius-8 box-shadow" src="assets/img/authors-3.jpg" alt=""/></a></div>
                    <a className="h4 d-block margin-top-20px" href="#">Rabie Khair</a>
                    <small className="text-grey-2">(145 Recipes)</small>
                </div>
            </div>


            <div className="col-lg-2 col-md-3 text-center">
                <div className="hvr-float">
                    <div className="thum"><a href="#"><img className="border-radius-8 box-shadow" src="assets/img/authors-4.jpg" alt=""/></a></div>
                    <a className="h4 d-block margin-top-20px" href="#">Momen Alsho</a>
                    <small className="text-grey-2">(145 Recipes)</small>
                </div>
            </div>


            <div className="col-lg-2 col-md-3 text-center">
                <div className="hvr-float">
                    <div className="thum"><a href="#"><img className="border-radius-8 box-shadow" src="assets/img/authors-5.jpg" alt=""/></a></div>
                    <a className="h4 d-block margin-top-20px" href="#">M.Salman ali</a>
                    <small className="text-grey-2">(145 Recipes)</small>
                </div>
            </div>


            <div className="col-lg-2 col-md-3 text-center">
                <div className="hvr-float">
                    <div className="thum"><a href="#"><img className="border-radius-8 box-shadow" src="assets/img/authors-6.jpg" alt=""/></a></div>
                    <a className="h4 d-block margin-top-20px" href="#">Khalid Ziaad</a>
                    <small className="text-grey-2">(145 Recipes)</small>
                </div>
            </div>

        </div>

        <div className="text-center">
            <a href="#" className="btn box-shadow margin-top-50px padding-tb-10px btn-sm border-2 border-radius-30 btn-inline-block width-210px background-dark text-white">Show All Authors</a>
        </div>

    </div>
</div>
  )
}
