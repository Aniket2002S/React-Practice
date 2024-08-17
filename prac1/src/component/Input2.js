import React from 'react'

const Input2 = ({setValue2}) => {
  return (
    <>
    <h4>Enter No2 :</h4>
    <input type="number" 
    onChange={(e)=>setValue2(Number(e.target.value))}
    name="" id="" />
    </>
  )
}

export default Input2