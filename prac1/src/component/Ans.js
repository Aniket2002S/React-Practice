import React from 'react'

const Ans = ({prop1 , prop2}) => {
    const answer =()=>{
        alert(`sum pf two number is ${prop1+prop2}`)
    }
  return (
    <>
    <input type="button" 
    onClick={answer}
    value="Sum" />
    <h4>Ans</h4>
    </>
  )
}

export default Ans