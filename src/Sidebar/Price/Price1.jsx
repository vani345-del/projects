import React from 'react'
import Input from '../../components/input'
import './Price.css'

const Price1 = ({handerchange}) => {
  return (
    <div className='ml'>
      <h2 className='sidebar-title price-title'>Prize</h2>
       <div>
      <label className='sidebar-label-container'>
          <input  onChange={handerchange} type='radio' value='' name="test2"/>
          <span className='checkmark'></span>All
        </label>

        <Input
        handerchange={handerchange}
        value={50}
        title='$0-50'
        name='test2'
        />
        <Input
        handerchange={handerchange}
        value={100}
        title='$50-100'
        name='test2'
        />
        <Input
        handerchange={handerchange}
        value={150}
        title='$100-150'
        name='test2'
        />
        <Input
        handerchange={handerchange}
        value={200}
        title='over $150'
        name='test2'
        />

        
        </div>
    </div>
  )
}

export default Price1