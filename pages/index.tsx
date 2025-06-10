// pages/index.tsx
import React, { useEffect, useState } from 'react';
import ListingCard from '@/components/ListingCard';
import ShortlistSidebar from '@/components/ShortlistSidebar';

type Listing = {
  id: string;
  title: string;
  price: number;
  location: string;
  tags: string[];
  imageUrl: string;
};

export default function Home() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [shortlist, setShortlist] = useState<Listing[]>([]);

  // Simulated sample data — replace with dynamic fetch later
  useEffect(() => {
    const sampleData: Listing[] = [
      {
        id: '1',
        title: 'Modern 1BHK Apartment',
        price: 4500,
        location: 'Dubai Marina',
        tags: ['bachelor', 'high rise'],
        imageUrl: '/property1.jpg',
      },
      {
        id: '2',
        title: 'Spacious 2BHK for Family',
        price: 8000,
        location: 'Mirdif',
        tags: ['family', 'parks', 'gardens'],
        imageUrl: '/property2.jpg',
      },
    ];
    setListings(sampleData);
  }, []);

  // Load shortlist from localStorage on page load
  useEffect(() => {
    const stored = localStorage.getItem('shortlist');
    if (stored) {
      setShortlist(JSON.parse(stored));
    }
  }, []);

  // Save shortlist to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('shortlist', JSON.stringify(shortlist));
  }, [shortlist]);

  const handleShortlist = (listing: Listing) => {
    if (!shortlist.find(item => item.id === listing.id)) {
      setShortlist([...shortlist, listing]);
    }
  };

  const handleRemoveShortlist = (id: string) => {
    setShortlist(shortlist.filter(item => item.id !== id));
  };

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <div className="flex-1 p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Latest Properties</h1>
        {listings.map(listing => (
          <ListingCard
            key={listing.id}
            {...listing}
            onShortlist={() => handleShortlist(listing)}
          />
        ))}
      </div>
      <ShortlistSidebar
        shortlistedListings={shortlist}
        onRemove={handleRemoveShortlist}
      />
    </main>
  );
}
