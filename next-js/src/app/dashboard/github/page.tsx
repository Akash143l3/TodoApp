import React from 'react'

export default function Github() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-4xl font-bold mb-4">My GitHub Page</h1>
        <p className="text-gray-600 mb-8">
          Welcome to my GitHub page! Here, you can find my projects and contributions.
        </p>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
}