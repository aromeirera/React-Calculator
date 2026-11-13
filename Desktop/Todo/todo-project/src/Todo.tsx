//import { useState } from 'react'
function Todo() {
  return (
    <>  
     <div className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-3xl bg-white px-12 py-6">
        <h1 className="mb-10 text-center text-9xl font-bold text-gray-300">todos</h1>
        <div className="relative mb-8">
          <input type="text" placeholder="Add todo..." className="w-full rounded-full border border-gray-100 px-8 py-4 pr-16 text-base shadow-lg outline-none"/>
          <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-green-700 px-2 text-xl font-bold text-white border-none ">+</button>
          <ul className="list-none">
           <li>
          <input type="checkbox" />
          {/* <span>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</span>
          <img src="src/trash-solid-full.svg" className="h-6 w-6"/> */}
          </li>
          </ul>

        </div>
      </div>
    </div>
    </>
  )
} 
export default Todo
