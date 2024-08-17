import React from 'react'

const Input1 = ({setValue1}) => {
  return (
    <>
    <h4>Enter No1</h4>
    <input type="number" 
    onChange={(e)=> setValue1(Number(e.target.value))}
    name="" id="" />
    </>
  )
}

export default Input1