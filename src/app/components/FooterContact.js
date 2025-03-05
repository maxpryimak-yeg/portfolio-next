import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnDownRight } from '@awesome.me/kit-34cea924a0/icons/sharp/light';

export default function FooterContact() {

    return (
      
        <div className='w-full'>
          
        <div className="flex lg:flex-row flex-col lg:gap-80 justify-between lg:px-6 px-4 lg:py-20 py-12">

        <p className='xs-mono mb-6 lg:mb-0'>Say hello.</p>
        <div className=''>
        <h2 className='max-w-2xl lg:text-4xl lg:leading-12 text-2xl leading-8 mb-8 mb-8'>Ready to bring your vision to life? Whether you have a clear vision or just a spark of an idea, let&apos;s explore what drives you—together.</h2>
        <Link 
          href="mailto:hello@theglorious.agency" 
          className="btn btn-main"
        >
          <FontAwesomeIcon icon={faArrowTurnDownRight} />
          Let&apos;s Chat
        </Link>
        </div>
      </div>

      </div>
    );
  }