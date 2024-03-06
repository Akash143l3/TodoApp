// components/ImageUpload.js
"use client"

import { useState, ChangeEvent } from 'react';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
    setUploadedImage(null); // Clear previous uploaded image
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        return;
      }

      const formData = new FormData();
      formData.append('image', selectedFile);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setUploadedImage(result.filePath);
        console.log('Image uploaded:', result);
      } else {
        console.error('Error uploading image:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };



  return (
    <div className="my-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-2"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Upload Image
      </button>

      {uploadedImage && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Uploaded Image Preview:</h2>
          <img src={uploadedImage} alt="Uploaded" className="mt-2 max-w-full" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
