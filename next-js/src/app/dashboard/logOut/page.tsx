import React from 'react'

export default function LogOut() {
  return (
    <div className="bg-gray-100 w-screen min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-4xl font-bold mb-4">Logout</h1>
        <p className="text-gray-600 mb-8">Are you sure you want to log out?</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
