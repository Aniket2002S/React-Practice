import React, { useState } from 'react'
import Input1 from './component/Input1'
import Input2 from './component/Input2'
import Ans from './component/Ans'

const App = () => {
  const [Value1, setValue1] = useState(0)
  const [Value2, setValue2] = useState(0)
  return (
    <>
    <Input1 setValue1 = {setValue1}/>
    <Input2 setValue2 = {setValue2}/>
    <Ans prop1={Value1} prop2={Value2} />
    </>
  )
}

export default App