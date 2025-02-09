'use client';

import { urlFor } from '../../../lib/sanityClient';
import Image from 'next/image';

export default function Portfolio({ portfolioItems }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => {
          const imageUrl = item.image ? urlFor(item.image).url() : null;
  
          return (
            <div key={item._id} className="rounded-lg overflow-hidden shadow-md">
              <h2 className="text-lg font-semibold p-4">{item.title}</h2>
              <p className="text-gray-600 px-4">{item.description}</p>
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={item.title}
                  width={1200}
                  height={800}
                  className="object-cover w-full h-auto"
                  priority={index === 0} // Add priority for the first image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }
  
