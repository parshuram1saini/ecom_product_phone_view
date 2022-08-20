import React from 'react'
import './SideNavbar.css'
function CartModal() {
  return (
    <>
    <div className="open-cart z-index_1">
      <h2>CART:</h2>
      <div className="ui divider"></div>
      <h3>You Cart is Empty</h3>
      <div className="ui divider"></div>
    </div>
    </>
  )
}

export default CartModal