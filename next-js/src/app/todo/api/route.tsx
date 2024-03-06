// In-memory storage for titles and descriptions
const titleDescriptionStore = new Map();

// GET method for retrieving title and description by ID
// GET method for retrieving all titles and descriptions
export async function GET(request: any) {
  try {
    const allData = Array.from(titleDescriptionStore).map(([id, { title, description }]) => ({
      id,
      title,
      description,
    }));

    return new Response(JSON.stringify(allData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing GET request:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

// PUT method for updating title and description by ID
export async function PUT(request: any) {
  try {
    const { id } = request.params;
    const newData = await request.json();

    if (!id || !titleDescriptionStore.has(id)) {
      return new Response('Title and description not found', { status: 404 });
    }

    titleDescriptionStore.set(id, { ...titleDescriptionStore.get(id), ...newData });

    return new Response('Title and description updated successfully', { status: 200 });
  } catch (error) {
    console.error('Error processing PUT request:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

// DELETE method for deleting title and description by ID
export async function DELETE(request: any) {
  try {
    const { id } = request.params;

    if (!id || !titleDescriptionStore.has(id)) {
      return new Response('Title and description not found', { status: 404 });
    }

    titleDescriptionStore.delete(id);

    return new Response('Title and description deleted successfully', { status: 200 });
  } catch (error) {
    console.error('Error processing DELETE request:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

// POST method for creating a new title and description
export async function POST(request: any) {
  try {
    // Parse the incoming JSON data from the request body
    const { title, description } = await request.json();

    // Validate the input (you can add more validation as needed)
    if (!title || !description) {
      return new Response('Title and description are required.', { status: 400 });
    }

    // Generate a unique ID (you might want to use a more robust approach in production)
    const id = Math.random().toString(36).substring(7);

    // Save the new title and description to the in-memory store
    titleDescriptionStore.set(id, { title, description });

    // Send a success response with the created resource details
    const responseData = { id, title, description };
    return new Response(JSON.stringify(responseData), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Handle any errors that might occur during processing
    console.error('Error processing POST request:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
