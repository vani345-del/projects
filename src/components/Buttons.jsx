import React from 'react'

const Buttons = ({onClickHander,value,title}) => {
  return (
    <button onClick={onClickHander} value={value} className='btns'>{title}</button>
  )
}

export default Buttons