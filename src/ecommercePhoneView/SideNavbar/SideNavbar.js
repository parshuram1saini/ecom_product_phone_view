import React, { useState } from "react";
// import { FaBeer } from 'react-icons/fa';
import * as Fcicon from "react-icons/fc";
import * as AiIcons from "react-icons/ai";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/avatar.png";
import CartModal from "./CartModal";
import "./SideNavbar.css";

function SideNavbar() {
  const [sidebar, setSidebar] = useState(false);
  const [cartmodal, setcartmodal] = useState(false);
  const openSidebar = () => {
    setSidebar(true);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };
  const cartModal = () => {
    if (cartmodal) setcartmodal(false);
    else {
      setcartmodal(true);
    }
  };
  return (
    <>
      <div className="p-relative">
        <div className="header-icon">
          <div className="d-flex w-50 space-between">
            <div className="d-flex align-center">
              <Fcicon.FcList onClick={() => openSidebar()} />
            </div>
            <img src={logo} alt="logo" className="logo-img w-available" />
          </div>
          <div className="d-flex justify-end space-evenly w-30">
            <img
              src={cart}
              alt="carticon"
              className="cart"
              onClick={() => cartModal()}
            />
            <img src={avatar} alt="avatar" className="avatar" />
          </div>
        </div>
        {sidebar && (
          <div className="sidebar w-60 h-100 p-absolute ">
            <div className="close-icon">
              <AiIcons.AiFillCloseCircle onClick={() => closeSidebar()} />
            </div>
            <nav>
              <ul className=" d-flex ul-style ">
                <li className="d-flex align-center">
                  <div className="d-flex ">
                    <Fcicon.FcCollect />
                  </div>
                  <h2 className="m-5 cursor-pointer">Collection</h2>
                </li>
                <li className="d-flex align-center">
                  <div className="d-flex align-center">
                    <Fcicon.FcBusinessman />
                  </div>
                  <h2 className="m-5 cursor-pointer">Men</h2>
                </li>
                <li className="d-flex  align-center">
                  <div className="">
                    <Fcicon.FcBusinesswoman />
                  </div>
                  <h2 className="m-5 cursor-pointer">Women</h2>
                </li>
                <li className="d-flex align-center">
                  <div className="">
                    <Fcicon.FcDecision />
                  </div>
                  <h2 className="m-5 cursor-pointer">About</h2>
                </li>
                <li className="d-flex  align-center">
                  <div className="">
                    <Fcicon.FcCallback />
                  </div>
                  <h2 className="m-5 cursor-pointer">Contact</h2>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
      <div>
        {cartmodal && (
          <div>
            <div className="fix-transparent" onClick={() => cartModal()}></div>
            <CartModal />
          </div>
        )}
      </div>
    </>
  );
}

export default SideNavbar;
