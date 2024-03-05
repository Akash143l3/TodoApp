const trashItems = [
  'Item 1',
  'Item 2',
  'Item 3',
  // Add more items as needed
];

export default function Trash() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Trash Bin</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {trashItems.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">{item}</h2>
            <p className="text-gray-600 mb-4">This item is in the trash.</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          
            >
              Restore
            </button>
            <button
              className="ml-2 text-gray-700 hover:underline"
            >
              Permanently Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
