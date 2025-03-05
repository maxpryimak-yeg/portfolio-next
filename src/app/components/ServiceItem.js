'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnDownRight } from '@awesome.me/kit-34cea924a0/icons/sharp/light';

export default function ServiceItem({ title, description, isLast }) {
  return (
    <Link href="/contact" className="block">
      <div className={`p-4 lg:pr-10 ${!isLast ? 'border-b border-glorious_border' : ''}`}>
        <div className='overflow-hidden h-[66px] group flex items-start justify-between gap-10'>
          <div className='lg:group-hover:translate-y-[-50%] duration-300 flex flex-col flex-1'>
            <p className='h-[66px] flex items-center text-xl lg:text-2xl'>{title}</p>
            <div className='lg:flex hidden gap-6 items-center'>
              <p className='h-[66px] flex-1 text-xl lg:text-2xl flex items-center'>{title}</p>
              <p className="group-hover:opacity-100 opacity-0 duration-300 xs-mono max-w-xs">{description}</p>
            </div>
          </div>
          <div className='hidden opacity-100 group-hover:opacity-100 duration-300 lg:flex flex-col h-full justify-center'>
            <div className="overflow-hidden h-[26.5px] flex gap-4 items-start">
              <div className="flex flex-col group-hover:translate-y-[-50%] duration-300 opacity-0 group-hover:opacity-100">
                <div className="badge">Services</div>
                <div className="badge">Services</div>
              </div>
              <div className="flex flex-col group-hover:translate-y-[-50%] duration-300 opacity-0 group-hover:opacity-100">
                <div className="badge">
                  <FontAwesomeIcon icon={faArrowTurnDownRight} />
                  Learn More
                </div>
                <div className="badge">
                  <FontAwesomeIcon icon={faArrowTurnDownRight} />
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 