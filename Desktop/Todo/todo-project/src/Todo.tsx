//import { useState } from 'react'
function Todo() {
  return (
    <>  
     <div className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-3xl bg-white px-12 py-6">
        <h1 className="mb-10 text-center text-9xl font-bold text-gray-300">todos</h1>
        <div className="relative mb-8">
            <input type="text" placeholder="Add todo..." className="w-full rounded-full border border-gray-100 bg-white px-8 py-4 pr-16 text-base shadow-lg outline-none"/>
            <button type="button" className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full border-none bg-teal-600 px-2 text-xl font-bold text-white">+</button>
          </div>
      </div>
    </div>
    </>
  )
} 
export default Todo
