// components/ShortlistSidebar.tsx
import React from 'react';

type Props = {
  shortlistedListings: {
    id: string;
    title: string;
    price: number;
    location: string;
    tags: string[];
    imageUrl: string;
  }[];
  onRemove: (id: string) => void;
};

export default function ShortlistSidebar({ shortlistedListings, onRemove }: Props) {
  return (
    <aside className="w-full md:w-1/4 bg-white p-4 border-l shadow-md">
      <h3 className="text-lg font-bold mb-4">Shortlisted</h3>
      {shortlistedListings.length === 0 ? (
        <p className="text-sm text-gray-500">No items shortlisted.</p>
      ) : (
        <ul className="space-y-4">
          {shortlistedListings.map((item) => (
            <li key={item.id} className="flex items-start gap-3">
              <img
                src={item.imageUrl || '/placeholder.jpg'}
                alt={item.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="text-sm font-semibold">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.location}</p>
                <p className="text-xs font-medium text-blue-500">AED {item.price.toLocaleString()}</p>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-xs text-red-500 mt-1 hover:underline"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
