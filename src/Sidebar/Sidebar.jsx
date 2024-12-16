import React from 'react'
import './Sidebar.css';
import Category from './Category/Category';
import Price1 from './Price/Price1';
import Colors from './Colors/Colors';

const Sidebar = ({handerchange}) => {
  return <>
  <section className='sidebar'>
    <div className="logo-container">
        <h1>🛒</h1>
    </div>
    <Category handerchange={handerchange}/>
    <Price1 handerchange={handerchange}/>
    <Colors handerchange={handerchange}/>
  </section>
  </>
}

export default Sidebar