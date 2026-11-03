function Calculator() {
  return (
    <div className="min-h-screen flex justify-center items-center p-4">

      <div className="w-full max-w-md">
        <div className="bg-gray-500 h-28 flex items-center justify-end pr-6">
          <span className="text-white text-6xl">0</span>
        </div>

        <div className="grid grid-cols-4 font-semibold">

          <button className=" h-28 border border-gray-400 text-3xl">AC</button>
          <button className=" h-28 border border-gray-400 text-3xl">+/-</button>
          <button className=" h-28 border border-gray-400 text-3xl">%</button>
          <button className="bg-orange-300 h-28 border border-gray-400 text-white text-3xl">÷</button>

          <button className=" h-28 border border-gray-400 text-3xl">7</button>
          <button className=" h-28 border border-gray-400 text-3xl">8</button>
          <button className=" h-28 border border-gray-400 text-3xl">9</button>
          <button className="bg-orange-300 h-28 border border-gray-400 text-white text-3xl">×</button>

          <button className=" h-28 border border-gray-400 text-3xl">4</button>
          <button className=" h-28 border border-gray-400 text-3xl">5</button>
          <button className=" h-28 border border-gray-400 text-3xl">6</button>
          <button className="bg-orange-300 h-28 border border-gray-400 text-white text-3xl">-</button>

          <button className=" h-28 border border-gray-400 text-3xl">1</button>
          <button className=" h-28 border border-gray-400 text-3xl">2</button>
          <button className=" h-28 border border-gray-400 text-3xl">3</button>
          <button className="bg-orange-300 h-28 border border-gray-400 text-white text-3xl">+</button>

          <button className=" h-28 border border-gray-400 text-3xl col-span-2">0</button>
          <button className=" h-28 border border-gray-400 text-3xl">.</button>
          <button className="bg-orange-300 h-28 border border-gray-400 text-white text-3xl">=</button>

        </div>
      </div>
    </div>
  )
}

export default Calculator