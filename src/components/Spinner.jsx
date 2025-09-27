import React from 'react'

function Spinner() {
  return (
    <div class="flex flex-wrap gap-16 max-w-md mx-auto mt-12 items-center justify-center">
        <div class="spinner-3 w-10 h-10 rounded-full bg-cyan-100 relative">
        <div class="absolute w-full h-full bg-white-800 rounded-full animate-ping"></div>
        <div class="absolute w-full h-full bg-gray-800 rounded-full animate-ping delay-200"></div>
      </div>
    </div>
  )
}

export default Spinner