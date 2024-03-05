import React from 'react'

export default function Notification() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Notifications</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-lg font-bold mb-2">New Message Received</h2>
          <p className="text-gray-600 mb-4">You have a new message from a friend.</p>
          <button className="text-blue-500 hover:underline">View Message</button>
        </div>

        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-lg font-bold mb-2">Event Reminder</h2>
          <p className="text-gray-600 mb-4">Don't forget about the upcoming event this weekend.</p>
          <button className="text-blue-500 hover:underline">View Details</button>
        </div>

        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-lg font-bold mb-2">New Follower</h2>
          <p className="text-gray-600 mb-4">You have a new follower on your social media account.</p>
          <button className="text-blue-500 hover:underline">Follow Back</button>
        </div>

      </div>
    </div>
  );
};