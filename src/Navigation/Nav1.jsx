import { FiHeart } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

import React from 'react'
import "./Nav.css";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';

const Nav1 = ({handlerInputClick,query}) => {
  return (
   <nav>
    <div className="container">
      <input type='text' onChange={handlerInputClick} value={query} placeholder='Enter your search' className='search-input' />
    </div>
    <div className='profile-conatiner'>
      <a href="#">
      <FiHeart className='nav-icons'/>
      </a>
      <a href="#">
      <FaShoppingCart  className='nav-icons'/>
      </a>
      <a href="#">
       <AiOutlineUser   className='nav-icons'/>
      </a>

    </div>
   </nav>
  )
}

export default Nav1