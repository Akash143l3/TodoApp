
export default function Contact() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-600 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-600 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                placeholder="john@example.com"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-600 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-600">
            Feel free to reach out to us via the following contact methods:
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <strong>Email:</strong> <a href="mailto:info@example.com">info@example.com</a>
            </li>
            <li>
              <strong>Phone:</strong> +1 (123) 456-7890
            </li>
            <li>
              <strong>Address:</strong> 123 Main Street, Cityville, State, Country
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
