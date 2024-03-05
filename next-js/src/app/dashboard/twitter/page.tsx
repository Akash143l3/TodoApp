import React from 'react'

export default function Twitter() {
  return (
    <div className="bg-gray-100 w-screen min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-96">
        <div className="flex items-center mb-4">
          <img
            src="https://img.icons8.com/color/48/000000/twitter-circled.png"
            alt="Twitter Logo"
            className="w-8 h-8 mr-2"
          />
          <h1 className="text-2xl font-bold">Twitter</h1>
        </div>

        {/* Tweet Box */}
        <div className="mb-4">
          <textarea
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            placeholder="What's happening?"

          ></textarea>
          <div className="flex justify-end mt-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Tweet
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div>
          {/* Sample Tweet */}
          <div className="flex border-b py-4">
            <img
              src="https://img.icons8.com/ios/50/000000/user-male-circle.png"
              alt="User Avatar"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h2 className="font-bold">Akash B</h2>
              <p className="text-gray-600">@Akashbr41304 • 2h</p>
              <p className="mt-2">This is a sample tweet. #Foodie #React #TailwindCSS</p>
            </div>
          </div>

          {/* Add more tweets as needed */}
        </div>
      </div>
    </div>
  );
}

