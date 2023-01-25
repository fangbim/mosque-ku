import React from 'react'

function InputDropdown() {
  return (
    <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-black bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Jawa Timur</option>
                <option>Jawa Barat</option>
                <option>Jawa Tengah</option>
                <option>Jakarta</option>
            </select>
        </div>
  )
}

export default InputDropdown