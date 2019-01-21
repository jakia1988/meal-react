import React, { Component } from 'react'
import FooterView from './components/FooterComponent'
import HeaderView from './components/HeaderComponent'

export default class Layout extends Component {
  render() {
    return (
      <div>
          <HeaderView/>
            {this.props.children} 
          <FooterView/>

      </div>
    )
  }
}


