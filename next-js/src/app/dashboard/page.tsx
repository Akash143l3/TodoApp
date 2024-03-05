import React from 'react'

export default function Dashboard() {
  return (
    <div className="bg-gray-100 w-screen min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 ">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12">
        <div className="bg-white p-3 rounded shadow-md">
          <h2 className="text-lg font-bold mb-2">User Information</h2>
          <p className="text-gray-600 mb-4">Welcome, Akash !</p>
          <p className="text-gray-600">User ID: Akash143l3</p>
        </div>

        {/* Card 2: Recent Activity */}
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-bold mb-2">Recent Activity</h2>
          <ul className="pl-2 list-disc text-gray-600">
            <li>Completed task A</li>
            <li>Read article on React</li>
            <li>Updated profile information</li>
          </ul>
        </div>

        {/* Card 3: Quick Links */}
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="pl-2 list-disc text-blue-500">
            <li>
              <a href="/tasks" className="hover:underline">
                View Tasks
              </a>
            </li>
            <li>
              <a href="/messages" className="hover:underline">
                Inbox
              </a>
            </li>
            <li>
              <a href="/settings" className="hover:underline">
                Account Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}