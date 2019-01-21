import React from 'react'
import {Link} from 'react-router-dom'
export default function LatestRecipe(props) {

  return (
    <div className="padding-tb-150px">
        <div className="container">
           <div className="title text-center">
               <h2 className="font-weight-700 text-main-color margin-bottom-45px">Latest Recipes</h2>
               
           </div>
   
           <div className="recipes-masonry">
             { props.recepie.map((item,key)=>{
                   return <div className="col-xl-3 col-lg-4 col-md-6 recipe-item margin-bottom-40px" key={item.idMeal}>
                        <div className="card border-0 box-shadow">
                            <div className="card-img-top"><a href={'meals/'+item.idMeal}><img src={item.strMealThumb} alt={item.strMeal}/></a></div>
                            <div className="padding-lr-20px padding-tb-20px">
                                <h5 className="margin-bottom-20px margin-top-10px">
                                <Link className="text-dark" to={'meals/'+item.idMeal}>{item.strMeal}</Link></h5>                         
                            
                                <hr/>
                                <div className="row no-gutters">
                                    <div className="col-4 text-left">{item.strYoutube !=="" ? <Link to="" className="text-red"><i className="fab fa-youtube"></i> Watch</Link> : <span style={{color: '#eee'}}><i className="fab fa-youtube"></i> Watch </span>} </div>
                                    <div className="col-8 text-right">{item.strArea}</div>
                                </div>
                            </div>
             {item.strTags !== "" ? <div className="background-light-grey border-top-1 border-grey padding-lr-20px" style={{lineHeight: 4}}>{item.strTags}</div> : "" }
                        </div>
                    </div>
                 }) 
             }          
             
          </div>
      
   </div></div>
  )
}






