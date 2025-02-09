import Link from 'next/link';
import FadeInBottom from './FadeInBottom';

export default function FooterContact() {

    return (
      
        <div className='w-full bg-foreground'>
          
        <div className='bg-background lg:px-8 lg:pb-10 px-5 pb-5 rounded-bl-[2.5rem] rounded-br-[2.5rem]'>
        <FadeInBottom>
        <div className="bg-[#167e64] text-white flex lg:flex-row flex-col lg:gap-80 lg:px-12  px-5  py-32 rounded-[2rem]">
            <h2 className="flex-1 w-full lg:text-[15rem] lg:leading-[15rem] max-w-screen-lg text-[7rem] leading-[7rem] mb-10 lg:mb-0">
              <Link 
                href="mailto:hello@theglorious.agency" 
                className="relative inline-block group"
              >
                Say hello.
                <span className="absolute -bottom-8 left-0 w-0 h-[3px] bg-white transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </h2>
        <div className=''>
        <p className='text-white max-w-2xl mb-10'>Ready to bring your vision to life? Whether you have a clear vision or just a spark of an idea, let's explore what drives you—together.</p>
        <Link href="mailto:hello@theglorious.agency" className="lg:text-[1.8rem] lg:leading-[1.8rem] text-2xl inline-block text-black md:py-7 md:px-8 px-6 py-5 rounded-full bg-glorious hover:bg-foreground hover:text-white transition-background duration-200">Let's Chat</Link>
        </div>
      </div>
      </FadeInBottom>
      </div>

      </div>
    );
  }