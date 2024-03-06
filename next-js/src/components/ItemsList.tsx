// components/ItemsList.tsx
"use client"
import { useState, useEffect } from 'react';

interface Item {
  id: number;
  title: string;
  description: string;
}

const ItemsList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // Fetch items on component mount
    fetch('/api') // Updated endpoint
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.title}</strong> - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
