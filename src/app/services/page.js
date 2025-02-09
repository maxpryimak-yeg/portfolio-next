import Navbar from '../components/Navbar';

export default function ServicesPage() {
    return (
      <div>
        <Navbar />
        <main className="px-16">
        <div className="py-16">
        <p className="text-[4rem] leading-[5.6rem] max-w-[100rem]">
        Crafting websites and solutions that bring ideas to life and help businesses grow in the digital world
        </p>
      </div>
      <section className="flex mt-40">
          <div className="flex-1"><h2 className="text-[1.5rem] uppercase font-medium ">1. Design</h2></div>
          <div className="flex-1"><p className="text-grey text-[1.8rem] leading-[2.5rem] max-w-screen-lg">
          For us, every project is a chance to build something meaningful. We craft websites that go beyond aesthetics, blending function with purpose to elevate each brand’s story. At The Glorious Agency, we’re driven by a shared goal—helping our clients thrive in a digital world that’s always evolving.</p></div>
         </section>
        </main>
      </div>
    );
  }