import React from 'react'
import './Recommended.css'
import Buttons from '../components/Buttons'

const Recommended = ({handleClick}) => {
  return (
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-flex">
        <Buttons onClickHander={handleClick} value=''title='All Products'/>
        <Buttons onClickHander={handleClick} value='Nike'title='Nike'/>
        <Buttons onClickHander={handleClick} value='Adidas'title='Adidas'/>
        <Buttons onClickHander={handleClick} value='Puma'title='Puma'/>
        <Buttons onClickHander={handleClick} value='Vans'title='Vans'/>
      </div>
    </div>
  )
}

export default Recommended