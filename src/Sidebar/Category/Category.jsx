import React from 'react'
import './Category.css'
import Input from '../../components/Input'


const Category = ({handerchange}) => {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>
      <div>
        <label className='sidebar-label-container'>
          <input onChange={handerchange}type='radio' value='' name="test"/>
          <span className='checkmark'></span>All
        </label>
        <Input
        handerchange={handerchange}
        value="sneakers"
        title='Sneakers'
        name='test'
        />
        <Input
        handerchange={handerchange}
        value="flats"
        title='Flats'
        name='test'
        />
        <Input
        handerchange={handerchange}
        value="sandals"
        title='Sandals'
        name='test'
        />
        <Input
        handerchange={handerchange}
        value="heels"
        title='Heels'
        name='test'
        />
        <Input
        handerchange={handerchange}
        value="sneakers"
        title='Sneakers'
        name='test'
        />
      
        
      </div>
    </div>
  )
}

export default Category