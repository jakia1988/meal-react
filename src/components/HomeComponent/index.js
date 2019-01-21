import React, { Component } from 'react'
import axios from 'axios';
import {API} from '../../constents/secretApi';
import {withRouter} from 'react-router';
import { bindActionCreators } from 'redux';
import {initApplication} from '../../actions/application'

import Loader from '../Shared/Loader'
import BannerComponent from './BannerComponent'
import CategoryComponent from './CategoryComponent'
import LatestRecipe from '../Shared/LatestRecipe'
import FoodFeed from '../Shared/FoodFeed'

import { connect } from 'react-redux';


class Home extends Component {
 constructor(props){
   super(props);
   this.state = {
      category: [],
      recepie: [],
      isRender : true

   }
   this.props.record()
   
 }
 componentDidMount(){
   this.getCategory()
   console.log('home',this.props.home)
 }

 getCategory = async ()=>{
    const response = await axios.get(API('categories.php'))
    this.setState({category: response.data.categories, isRender:false}) 
    this.getRecipe()
 }
 getRecipe = async ()=>{
  const response = await axios.get(API('latest.php'))
  this.setState({recepie: response.data.meals, isRender:false}) 
 }
  render() {
    return (
      <div>
        <BannerComponent/>
         {!this.state.isRender ? <CategoryComponent category={this.state.category} /> : <Loader/>}
         {!this.state.isRender ? <LatestRecipe  recepie={this.state.recepie}/> : <Loader/>}
         <FoodFeed/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    record :  bindActionCreators(initApplication, dispatch)
  }
}

function mapStateToProps(state){
	return {
    home: state
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home));

