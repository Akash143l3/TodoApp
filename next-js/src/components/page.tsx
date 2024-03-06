export default function Home() {
  return (
    <div className="bg-gray-100  w-full min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-gray-600 mb-8">Explore and enjoy the content we have for you.</p>
        <a href="/dashboard/contact" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Contact Us
        </a>
        <a href="/food" className="ml-4 text-gray-700 hover:underline">
          Explore our Food Menu
        </a>
      </div>
    </div>
  );
};