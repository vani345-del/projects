import React from 'react'
import './Colors.css';
import Input from '../../components/input';

const Colors = ({handerchange}) => {
  return (
    <div>
      <h2 className='sidebar-title color-title'>Colors</h2>
      <div>
      <label className='sidebar-label-container'>
          <input onChange={handerchange} type='radio' value='' name="test3"/>
          <span className='checkmark all'></span>All
        </label>
      <Input
      handerchange={handerchange}
      value='black'
      title='Black'
      name='test3'
      color='black'
      />
      <Input
      handerchange={handerchange}
      value='blue'
      title='Blue'
      name='test3'
      color='blue'
      />
      <Input
      handerchange={handerchange}
      value='red'
      title='Red'
      name='test3'
      color='red'
      />
      <Input
      handerchange={handerchange}
      value='green'
      title='Green'
      name='test3'
      color='green'
      />
      <label className='sidebar-label-container'>
          <input onChange={handerchange} type='radio' value='white'  name="test3"/>
          <span className='checkmark' style={{background:"white",border:"1px solid black"}}></span>White
        </label>
      </div> 
    </div>
  )
}

export default Colors