// components/ListingCard.tsx
import React from 'react';

type Props = {
  listing: {
    id: string;
    title: string;
    price: number;
    location: string;
    tags: string[];
    imageUrl: string;
  };
  shortlisted: boolean;
  onToggleShortlist: (id: string) => void;
};

export default function ListingCard({ listing, shortlisted, onToggleShortlist }: Props) {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <img
        src={listing.imageUrl || '/placeholder.jpg'}
        alt={listing.title}
        className="w-full h-48 object-cover rounded mb-2"
      />
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold">{listing.title}</h2>
          <p className="text-sm text-gray-600">{listing.location}</p>
          <p className="font-bold text-blue-600">AED {listing.price.toLocaleString()}</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {listing.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-200 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => onToggleShortlist(listing.id)}
          className={`ml-2 text-xl ${shortlisted ? 'text-yellow-400' : 'text-gray-400'}`}
        >
          ★
        </button>
      </div>
    </div>
  );
}
