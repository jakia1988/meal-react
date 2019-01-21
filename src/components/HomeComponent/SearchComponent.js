import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class SearchComponent extends Component {
  render() {
    return (
        <div className="margin-top-45px">
        <div className="row justify-content-center margin-tb-60px">
            <div className="col-lg-8">
                <div className="listing-search">
                    <form className="row no-gutters">
                        <div className="col-md-4">
                            <div className="keywords">
                                <input className="listing-form first" type="text" placeholder="Keywords..." />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="categories dropdown">
                                <span className="listing-form d-block text-nowrap" id="dropdownMenu2" >All Categories</span>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item text-up-small" type="button">Fish</button>
                                    <button className="dropdown-item text-up-small" type="button">Cocktails</button>
                                    <button className="dropdown-item text-up-small" type="button">Salads</button>
                                    <button className="dropdown-item text-up-small" type="button">Asian</button>
                                    <button className="dropdown-item text-up-small" type="button">Fish</button>
                                    <button className="dropdown-item text-up-small" type="button">Cocktails</button>
                                    <button className="dropdown-item text-up-small" type="button">Salads</button>
                                    <button className="dropdown-item text-up-small" type="button">Asian</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <Link className="listing-bottom background-second-color box-shadow" to="/">Search Now</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
