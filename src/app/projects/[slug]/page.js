import { client } from './../../../../lib/sanityClient';
import AnimatedHeadline from '../../components/AnimatedHeadline';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import ProgressCircle from '../../components/ProgressCircle';
import FadeInBottom from '../../components/FadeInBottom';

export default async function ProjectPage({ params }) {
  const { slug } = await Promise.resolve(params); // Ensure compatibility with Next.js

  const projectQuery = `*[_type == "portfolio" && slug.current == $slug][0]{
    title,
    mainHeadline,
    innerServices,
    askSubHeading,
    askContent,
    deliverySubHeading,
    deliveryContent,
    takeawaySubHeading,
    takeawayContent,
    mainPicture {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          },
          lqip,
          palette
        }
      }
    },
    firstImageAsk {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          },
          lqip,
          palette
        }
      }
    },
      secondImageAsk {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          },
          lqip,
          palette
        }
      }
    },
    thirdImageAsk {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          },
          lqip,
          palette
        }
      }
    },
    firstImageDelivery {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          },
          lqip,
          palette
        }
      }
    },
    secondImageDelivery {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          },
          lqip,
          palette
        }
      }
    },
    thirdImageDelivery {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          },
          lqip,
          palette
        }
      }
    },
    firstImageTakeaway {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          },
          lqip,
          palette
        }
      }
    },
    secondImageTakeaway {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          },
          lqip,
          palette
        }
      }
    },
    thirdImageTakeaway {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          },
          lqip,
          palette
        }
      }
    },
  }`;

  const project = await client.fetch(projectQuery, { slug });

  console.log('Fetched Project Data:', project);

  if (!project) {
    console.error('No project found for slug:', slug);
    return <h1>Project Not Found</h1>;
  }

  return (
    <div className="lg:px-16 px-5 pb-20">
      <ProgressCircle />
      {/* Title and Main Headline */}
      <section className="md:py-60 pt-40 pb-20 flex-col md:flex-row flex">

        <h1 className="flex-1 uppercase font-bold md:mb-4 mb-20">
        <FadeInBottom>
          <span className="block relative before:block before:absolute before:w-5 before:h-5 before:bg-glorious before:border before:border-foreground before:left-0 pl-8 before:top-2/4 before:-translate-y-2/4 before:rounded-full">
            Case study
          </span>
          {project.title}
          </FadeInBottom>
        </h1>

        <div className="md:max-w-[60%] w-full">
          {project.mainHeadline && (
            <AnimatedHeadline tag="span" text={project.mainHeadline} />
          )}
        </div>
      </section>

      {/* Main Picture Section */}
      <section>
        {project.mainPicture?.asset && (
          <FadeInBottom delay={0.4} disableWhileInView>
          <figure className="relative overflow-hidden w-full">
            {/* Aspect Ratio Wrapper */}
            <div
              style={{
                paddingTop: `${
                  (project.mainPicture.asset.metadata.dimensions.height /
                    project.mainPicture.asset.metadata.dimensions.width) *
                  100
                }%`,
              }}
            ></div>

            {/* Background Color Overlay */}
            {project.mainPicture.asset.metadata.palette?.dominant?.background && (
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundColor:
                    project.mainPicture.asset.metadata.palette.dominant.background,
                }}
              ></div>
            )}

            {/* Image with next/image */}
            <Image
              src={project.mainPicture.asset.url}
              alt={project.title || 'Project Image'}
              width={project.mainPicture.asset.metadata.dimensions.width}
              height={project.mainPicture.asset.metadata.dimensions.height}
              placeholder="blur"
              blurDataURL={project.mainPicture.asset.metadata.lqip}
              quality={85}
              priority={false} // Set priority to false unless this is a critical image
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-out opacity-100"
            />
          </figure>
          </FadeInBottom>
        )}
      </section>

      <section className="md:pt-20 pt-10 md:pb-60 pb-32 flex flex-col md:flex-row">
      <div className='w-6/12 flex flex-col justify-between'>
        <p className="uppercase font-bold md:mb-4 mb-10 block relative before:block before:absolute before:border before:border-foreground  before:w-5 before:h-5 before:bg-glorious before:left-0 pl-8 before:top-2/4 before:-translate-y-2/4 before:rounded-full">
        The Ask
          </p>
        <div className="hidden md:flex flex-col lg:gap-8 gap-5">
          <p className='uppercase'>Services</p>
        <ul className="list-none">
            {project.innerServices.map((service, index) => (
              <li key={index} className="">
                {service}
              </li>
            ))}
          </ul>
          </div>
          </div>
          <div className="w-full max-w-5xl">
        <h2 className='mb-4 font-medium'>{project.askSubHeading}</h2>
        <div className="text-grey  leading-[2.5rem] case-content">
  <PortableText value={project.askContent} />
</div>
        </div>
      </section>

      <section className='flex flex-col lg:gap-8 gap-5'>
        {project.firstImageAsk?.asset && (
          <figure className="relative overflow-hidden w-full">
            {/* Aspect Ratio Wrapper */}
            <div
              style={{
                paddingTop: `${
                  (project.firstImageAsk.asset.metadata.dimensions.height /
                    project.firstImageAsk.asset.metadata.dimensions.width) *
                  100
                }%`,
              }}
            ></div>

            {/* Background Color Overlay */}
            {project.firstImageAsk.asset.metadata.palette?.dominant?.background && (
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundColor:
                    project.firstImageAsk.asset.metadata.palette.dominant.background,
                }}
              ></div>
            )}

            {/* Image with next/image */}
            <Image
              src={project.firstImageAsk.asset.url}
              alt={project.title || 'Project Image'}
              width={project.firstImageAsk.asset.metadata.dimensions.width}
              height={project.firstImageAsk.asset.metadata.dimensions.height}
              placeholder="blur"
              blurDataURL={project.firstImageAsk.asset.metadata.lqip}
              quality={85}
              priority={false} // Set priority to false unless this is a critical image
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-out opacity-100"
            />
          </figure>
        )}
        <div className='flex gap-5 lg:gap-8 flex-col md:flex-row'>
        {project.secondImageAsk?.asset && (
          <figure className="relative overflow-hidden w-full">
            {/* Aspect Ratio Wrapper */}
            <div
              style={{
                paddingTop: `${
                  (project.secondImageAsk.asset.metadata.dimensions.height /
                    project.secondImageAsk.asset.metadata.dimensions.width) *
                  100
                }%`,
              }}
            ></div>

            {/* Background Color Overlay */}
            {project.secondImageAsk.asset.metadata.palette?.dominant?.background && (
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundColor:
                    project.secondImageAsk.asset.metadata.palette.dominant.background,
                }}
              ></div>
            )}

            {/* Image with next/image */}
            <Image
              src={project.secondImageAsk.asset.url}
              alt={project.title || 'Project Image'}
              width={project.secondImageAsk.asset.metadata.dimensions.width}
              height={project.secondImageAsk.asset.metadata.dimensions.height}
              placeholder="blur"
              blurDataURL={project.secondImageAsk.asset.metadata.lqip}
              quality={85}
              priority={false} // Set priority to false unless this is a critical image
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-out opacity-100"
            />
          </figure>
        )}
         {project.thirdImageAsk?.asset && (
          <figure className="relative overflow-hidden w-full">
            {/* Aspect Ratio Wrapper */}
            <div
              style={{
                paddingTop: `${
                  (project.thirdImageAsk.asset.metadata.dimensions.height /
                    project.thirdImageAsk.asset.metadata.dimensions.width) *
                  100
                }%`,
              }}
            ></div>

            {/* Background Color Overlay */}
            {project.thirdImageAsk.asset.metadata.palette?.dominant?.background && (
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundColor:
                    project.thirdImageAsk.asset.metadata.palette.dominant.background,
                }}
              ></div>
            )}

            {/* Image with next/image */}
            <Image
              src={project.thirdImageAsk.asset.url}
              alt={project.title || 'Project Image'}
              width={project.thirdImageAsk.asset.metadata.dimensions.width}
              height={project.thirdImageAsk.asset.metadata.dimensions.height}
              placeholder="blur"
              blurDataURL={project.thirdImageAsk.asset.metadata.lqip}
              quality={85}
              priority={false} // Set priority to false unless this is a critical image
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-out opacity-100"
            />
          </figure>
        )}
        </div>
      </section>
      <section className="md:pt-20 pt-10 md:pb-60 pb-32 flex flex-col md:flex-row">
        <div className='w-6/12'>
        <p className="uppercase font-bold md:mb-4 mb-10 block relative before:block before:absolute before:border before:border-foreground  before:w-5 before:h-5 before:bg-glorious before:left-0 pl-8 before:top-2/4 before:-translate-y-2/4 before:rounded-full">
        The Delivery
        </p>
          </div>
        <div className="w-full max-w-5xl">
        <h2 className='mb-4 font-medium'>{project.deliverySubHeading}</h2>
        <div className="text-grey  leading-[2.5rem] case-content">
  <PortableText value={project.deliveryContent} />
</div>
        </div>
      </section>
      <section className='flex flex-col gap-5 lg:gap-8'>
        {project.firstImageDelivery?.asset && (
          <figure className="relative overflow-hidden w-full">
            {/* Aspect Ratio Wrapper */}
            <div
              style={{
                paddingTop: `${
                  (project.firstImageDelivery.asset.metadata.dimensions.height /
                    project.firstImageDelivery.asset.metadata.dimensions.width) *
                  100
                }%`,
              }}
            ></div>

            {/* Background Color Overlay */}
            {project.firstImageDelivery.asset.metadata.palette?.dominant?.background && (
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundColor:
                    project.firstImageDelivery.asset.metadata.palette.dominant.background,
                }}
              ></div>
            )}

            {/* Image with next/image */}
            <Image
              src={project.firstImageDelivery.asset.url}
              alt={project.title || 'Project Image'}
              width={project.firstImageDelivery.asset.metadata.dimensions.width}
              height={project.firstImageDelivery.asset.metadata.dimensions.height}
              placeholder="blur"
              blurDataURL={project.firstImageDelivery.asset.metadata.lqip}
              quality={85}
              priority={false} // Set priority to false unless this is a critical image
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-out opacity-100"
            />
          </figure>
        )}
        <div className='flex gap-5 lg:gap-8 flex-col md:flex-row'>
         {project.secondImageDelivery?.asset && (
          <figure className="relative overflow-hidden w-full">
            {/* Aspect Ratio Wrapper */}
            <div
              style={{
                paddingTop: `${
                  (project.secondImageDelivery.asset.metadata.dimensions.height /
                    project.secondImageDelivery.asset.metadata.dimensions.width) *
                  100
                }%`,
              }}
            ></div>

            {/* Background Color Overlay */}
            {project.secondImageDelivery.asset.metadata.palette?.dominant?.background && (
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundColor:
                    project.secondImageDelivery.asset.metadata.palette.dominant.background,
                }}
              ></div>
            )}

            {/* Image with next/image */}
            <Image
              src={project.secondImageDelivery.asset.url}
              alt={project.title || 'Project Image'}
              width={project.secondImageDelivery.asset.metadata.dimensions.width}
              height={project.secondImageDelivery.asset.metadata.dimensions.height}
              placeholder="blur"
              blurDataURL={project.secondImageDelivery.asset.metadata.lqip}
              quality={85}
              priority={false} // Set priority to false unless this is a critical image
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-out opacity-100"
            />
          </figure>
        )}
        {project.thirdImageDelivery?.asset && (
          <figure className="relative overflow-hidden w-full">
            {/* Aspect Ratio Wrapper */}
            <div
              style={{
                paddingTop: `${
                  (project.thirdImageDelivery.asset.metadata.dimensions.height /
                    project.thirdImageDelivery.asset.metadata.dimensions.width) *
                  100
                }%`,
              }}
            ></div>

            {/* Background Color Overlay */}
            {project.thirdImageDelivery.asset.metadata.palette?.dominant?.background && (
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundColor:
                    project.thirdImageDelivery.asset.metadata.palette.dominant.background,
                }}
              ></div>
            )}

            {/* Image with next/image */}
            <Image
              src={project.thirdImageDelivery.asset.url}
              alt={project.title || 'Project Image'}
              width={project.thirdImageDelivery.asset.metadata.dimensions.width}
              height={project.thirdImageDelivery.asset.metadata.dimensions.height}
              placeholder="blur"
              blurDataURL={project.thirdImageDelivery.asset.metadata.lqip}
              quality={85}
              priority={false} // Set priority to false unless this is a critical image
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-out opacity-100"
            />
          </figure>
        )}
        </div>
      
      </section>
      <section className="md:pt-20 pt-10 md:pb-60 pb-32 flex flex-col md:flex-row">
        <div className='w-6/12'>
        <p className="uppercase font-bold md:mb-4 mb-10 block relative before:block before:absolute before:border before:border-foreground  before:w-5 before:h-5 before:bg-glorious before:left-0 pl-8 before:top-2/4 before:-translate-y-2/4 before:rounded-full">
        Outcome
        </p>
          </div>
        <div className="w-full max-w-5xl">
        <h2 className='mb-4 font-medium'>{project.takeawaySubHeading}</h2>
        <div className="text-grey  leading-[2.5rem] case-content">
  <PortableText value={project.takeawayContent} />
</div>
        </div>
      </section>
      <section className='flex flex-col gap-5 lg:gap-8'>
        {project.firstImageTakeaway?.asset && (
          <figure className="relative overflow-hidden w-full">
            {/* Aspect Ratio Wrapper */}
            <div
              style={{
                paddingTop: `${
                  (project.firstImageTakeaway.asset.metadata.dimensions.height /
                    project.firstImageTakeaway.asset.metadata.dimensions.width) *
                  100
                }%`,
              }}
            ></div>

            {/* Background Color Overlay */}
            {project.firstImageTakeaway.asset.metadata.palette?.dominant?.background && (
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundColor:
                    project.firstImageTakeaway.asset.metadata.palette.dominant.background,
                }}
              ></div>
            )}

            {/* Image with next/image */}
            <Image
              src={project.firstImageTakeaway.asset.url}
              alt={project.title || 'Project Image'}
              width={project.firstImageTakeaway.asset.metadata.dimensions.width}
              height={project.firstImageTakeaway.asset.metadata.dimensions.height}
              placeholder="blur"
              blurDataURL={project.firstImageTakeaway.asset.metadata.lqip}
              quality={85}
              priority={false} // Set priority to false unless this is a critical image
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-out opacity-100"
            />
          </figure>
        )}
        <div className='flex gap-5 lg:gap-8 flex-col md:flex-row'>
        {project.secondImageTakeaway?.asset && (
          <figure className="relative overflow-hidden w-full">
            {/* Aspect Ratio Wrapper */}
            <div
              style={{
                paddingTop: `${
                  (project.secondImageTakeaway.asset.metadata.dimensions.height /
                    project.secondImageTakeaway.asset.metadata.dimensions.width) *
                  100
                }%`,
              }}
            ></div>

            {/* Background Color Overlay */}
            {project.secondImageTakeaway.asset.metadata.palette?.dominant?.background && (
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundColor:
                    project.secondImageTakeaway.asset.metadata.palette.dominant.background,
                }}
              ></div>
            )}

            {/* Image with next/image */}
            <Image
              src={project.secondImageTakeaway.asset.url}
              alt={project.title || 'Project Image'}
              width={project.secondImageTakeaway.asset.metadata.dimensions.width}
              height={project.secondImageTakeaway.asset.metadata.dimensions.height}
              placeholder="blur"
              blurDataURL={project.secondImageTakeaway.asset.metadata.lqip}
              quality={85}
              priority={false} // Set priority to false unless this is a critical image
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-out opacity-100"
            />
          </figure>
        )}
         {project.thirdImageTakeaway?.asset && (
          <figure className="relative overflow-hidden w-full">
            {/* Aspect Ratio Wrapper */}
            <div
              style={{
                paddingTop: `${
                  (project.thirdImageTakeaway.asset.metadata.dimensions.height /
                    project.thirdImageTakeaway.asset.metadata.dimensions.width) *
                  100
                }%`,
              }}
            ></div>

            {/* Background Color Overlay */}
            {project.thirdImageTakeaway.asset.metadata.palette?.dominant?.background && (
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundColor:
                    project.thirdImageTakeaway.asset.metadata.palette.dominant.background,
                }}
              ></div>
            )}

            {/* Image with next/image */}
            <Image
              src={project.thirdImageTakeaway.asset.url}
              alt={project.title || 'Project Image'}
              width={project.thirdImageTakeaway.asset.metadata.dimensions.width}
              height={project.thirdImageTakeaway.asset.metadata.dimensions.height}
              placeholder="blur"
              blurDataURL={project.thirdImageTakeaway.asset.metadata.lqip}
              quality={85}
              priority={false} // Set priority to false unless this is a critical image
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-out opacity-100"
            />
          </figure>
        )}
        </div>
      </section>
    </div>
  );
}