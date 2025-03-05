'use client';

import { urlFor } from '../../../lib/sanityClient';
import Link from 'next/link';
import Image from 'next/image';

export default function HomepageWorkSection({ items }) {
  return (
    <div className="work-section-container">
      <div className="work-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-6">
        {items.map((item) => (
          <div key={item._id}>
            {item.slug?.current ? (
              <Link href={`/projects/${item.slug.current}`}>
                <SimpleContent item={item} />
              </Link>
            ) : (
              <SimpleContent item={item} />
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

function SimpleContent({ item }) {
  return (
    <div>
      {item.image && (
        <Image
          src={urlFor(item.image).url()}
          alt={item.title}
          width={800}
          height={533}
          className="w-full h-auto aspect-3/2 object-cover"
        />
      )}
      <h3 className="font-(family-name:--font-glorious) font-normal mt-4 text-xl font-bold">{item.title}</h3>
      <ul className="mt-2 flex gap-2">
        {item.industries?.map((industry, i) => (
          <li className="badge" key={`industry-${i}`}>{industry.label}</li>
        ))}
        {item.services?.map((service, i) => (
          <li className="badge" key={`service-${i}`}>{service.label}</li>
        ))}
      </ul>
    </div>
  );
}
