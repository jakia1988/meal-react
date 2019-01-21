import React from 'react'
import {  BrowserRouter as Router, Route } from 'react-router-dom';
/*Imports of all components here*/
import Layout from './layout'
import Home from './components/HomeComponent'



export default function AppRoutes() {
  return (
    <Router>
      <Layout>      
          <Route path='/' component={Home}/>          
      </Layout>
    </Router>     
  )
}
