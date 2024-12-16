import React from 'react'

const Input = ({handerchange,value,title,name,color}) =>{
  return (  
      <label className='sidebar-label-container'>
      <input onChange={handerchange}type='radio' value={value} name={name}/>
      <span className='checkmark' style={{backgroundColor:color}}></span>{title}
    </label>
    
  )
}
export default Input