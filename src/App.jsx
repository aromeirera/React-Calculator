import { useState } from "react"
function Calculator() {
  const [value,setValue]=useState(0)
  const [number,setNumber]=useState(0)
  const [sign,setSign]=useState(null)
  function handleClear(){
  setValue (0)
  }
  function clickHandle(e){
  setValue((value)=>Number(String(value)+e.target.innerText))
  }
  function operator(operatorSign){
    setNumber(value)
    setSign(operatorSign)
    setValue("")
  }
  function equalSign(){
    if (sign=== "+"){
      setValue(number+value)
    }else if(sign === "-"){
      setValue(number-value);
    }else if(sign === "÷"){
      setValue(number/value);
    }else if(sign === "×"){
      setValue(number*value)
    }
  }
  return (
    <div className="min-h-screen flex justify-center items-center p-4">

      <div className="w-full max-w-md">
        <div className="bg-gray-500 h-28 flex items-center justify-end pr-6">
          <span className="text-white text-6xl">{value}</span>
        </div>

        <div className="grid grid-cols-4 font-semibold">

          <button className=" h-28 border border-gray-400 text-3xl" onClick={handleClear}>AC</button>
          <button className=" h-28 border border-gray-400 text-3xl">+/-</button>
          <button className=" h-28 border border-gray-400 text-3xl">%</button>
          <button className="bg-orange-300 h-28 border border-gray-400 text-white text-3xl" onClick={()=>operator("÷")}>÷</button>

          <button className=" h-28 border border-gray-400 text-3xl" onClick={clickHandle}>7</button>
          <button className=" h-28 border border-gray-400 text-3xl" onClick={clickHandle}>8</button>
          <button className=" h-28 border border-gray-400 text-3xl" onClick={clickHandle}>9</button>
          <button className="bg-orange-300 h-28 border border-gray-400 text-white text-3xl" onClick={()=>operator("×")}>×</button>

          <button className=" h-28 border border-gray-400 text-3xl" onClick={clickHandle}>4</button>
          <button className=" h-28 border border-gray-400 text-3xl" onClick={clickHandle}>5</button>
          <button className=" h-28 border border-gray-400 text-3xl" onClick={clickHandle}>6</button>
          <button className="bg-orange-300 h-28 border border-gray-400 text-white text-3xl" onClick={()=>operator("-")}>-</button>

          <button className=" h-28 border border-gray-400 text-3xl" onClick={clickHandle}>1</button>
          <button className=" h-28 border border-gray-400 text-3xl" onClick={clickHandle}>2</button>
          <button className=" h-28 border border-gray-400 text-3xl" onClick={clickHandle}>3</button>
          <button className="bg-orange-300 h-28 border border-gray-400 text-white text-3xl" onClick={()=>operator("+")}>+</button>

          <button className=" h-28 border border-gray-400 text-3xl col-span-2" onClick={clickHandle}>0</button>
          <button className=" h-28 border border-gray-400 text-3xl" onClick={clickHandle}>.</button>
          <button className="bg-orange-300 h-28 border border-gray-400 text-white text-3xl" onClick={equalSign}>=</button>

        </div>
      </div>
    </div>
  )

} 

export default Calculator;