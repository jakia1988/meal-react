import React from 'react'
import HeaderView from './HeaderComponent'
import Home from './HomeComponent'
import FooterView from './FooterComponent'
export default function Layout() {
  return (
    <div>
      <HeaderView/>
      <Home/>
      <FooterView/>
    </div>
  )
}
