

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>

      <div className="bg-white p-8 rounded shadow-md">
        <p className="text-gray-600 mb-4">
          Welcome to our website! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent vel tincidunt lectus. Vivamus vel turpis at tellus fermentum tincidunt. In hac
          habitasse platea dictumst.
        </p>

        <p className="text-gray-600 mb-4">
          Our mission is to provide high-quality products/services and create a positive
          experience for our users. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          viverra magna vel aliquam blandit.
        </p>

        <p className="text-gray-600 mb-4">
          Contact us if you have any questions or feedback. We appreciate your interest and
          support!
        </p>

        <h2 className="text-lg font-bold mb-2">Contact Information</h2>
        <ul className="list-disc text-gray-600">
          <li>Email: info@example.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 123 Main Street, Cityville, State, Country</li>
        </ul>
      </div>
    </div>
  );
}

