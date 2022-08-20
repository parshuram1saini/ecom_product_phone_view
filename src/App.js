import React from 'react';
import ProductImage from './ecommercePhoneView/productImage/ProductImage';
import SideNavbar from "./ecommercePhoneView/SideNavbar/SideNavbar"
import ProductContent from "./ecommercePhoneView/ProductContent/ProductContent"

function App() {
  return (
    <div>
        <SideNavbar/>
        <ProductImage/>
        <ProductContent/>
    </div>
  )
}

export default App