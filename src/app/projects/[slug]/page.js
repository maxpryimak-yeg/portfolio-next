import { client } from './../../../../lib/sanityClient';
import AnimatedHeadline from '../../components/AnimatedHeadline';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import FadeInBottom from '../../components/FadeInBottom';
import Navbar from '../../components/Navbar';

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
    <div>
      <Navbar />
      {/* Title and Main Headline */}
      <section className="lg:pt-32 lg:pb-40 pt-24 pb-20 border-b border-glorious_border lg:px-6 px-4 flex lg:flex-row flex-col">

        <h1 className="w-sm md:mb-4 lg:mb-20 mb-10 xs-mono ">
        <FadeInBottom>
          <span className="xs-mono pl-3 block relative before:absolute before:w-[5px] before:h-[5px] before:bg-foreground before:rounded-full before:left-0 before:top-1/2 before:-translate-y-1/2">
            Case study
          </span>
          {project.title}
          </FadeInBottom>
        </h1>

        <div className="flex-1">
          {project.mainHeadline && (
            <AnimatedHeadline tag="span" text={project.mainHeadline} />
          )}
          <FadeInBottom>
          {project.innerServices && project.innerServices.length > 0 && (
            <ul className="mt-10 list-none flex gap-2">
              {project.innerServices.map((service, index) => (
                <li className="badge" key={index}>
                  {service}
                </li>
              ))}
            </ul>
          )}
          </FadeInBottom>
        </div>
      </section>
      
      <section className="border-b border-glorious_border">
      <div className='flex lg:flex-row flex-col'>
        <div className="lg:w-md w-full lg:border-r border-glorious_border p-4 lg:p-6">
          
        <div className="sticky top-[91.5px] lg:pb-20 flex flex-col gap-4">
          <p className='section-title-md lg:mb-6 mb-3'>The Ask</p>
          <p className='font-medium'>{project.askSubHeading}</p>
          <PortableText value={project.askContent} />
          </div>
        </div>
        <div className="flex-1 p-4 lg:p-6 flex gap-4 flex-col">
          
          {project.firstImageAsk?.asset && (
            <div className="bg-[#e7e7e7]  p-2 lg:px-20 lg:py-12">
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
          </div>
        )}
          
          
          {project.secondImageAsk?.asset && (
            <div className="bg-[#e7e7e7]  p-2 lg:px-20 lg:py-12">
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
          </div>
        )}  
          
          
          {project.thirdImageAsk?.asset && (
            <div className="bg-[#e7e7e7]  p-2 lg:px-20 lg:py-12">
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
          </div>
        )}
          
        </div>
        </div>
      </section>
      <section>
      <div className='flex lg:flex-row flex-col'>
        <div className="lg:w-md w-full lg:border-r border-glorious_border p-4 lg:p-6">
          
          <div className="sticky top-[91.5px] lg:pb-20  flex flex-col gap-4">
          <p className='section-title-md lg:mb-6 mb-3'>The Delivery</p>
          <p className='font-medium'>{project.deliverySubHeading}</p>
          <PortableText value={project.deliveryContent} />
          </div>
        </div>
        <div className="flex-1 p-4 lg:p-6 flex gap-4 flex-col">
          
          {project.firstImageDelivery?.asset && (
            <div className="bg-[#e7e7e7]  p-2 lg:px-20 lg:py-12">
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
          </div>
        )}
          
          
          {project.secondImageDelivery?.asset && (
            <div className="bg-[#e7e7e7]  p-2 lg:px-20 lg:py-12">
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
          </div>
        )}
          
          
          {project.thirdImageDelivery?.asset && (
            <div className="bg-[#e7e7e7]  p-2 lg:px-20 lg:py-12">
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
          </div>
        )}
          
        </div>
        </div>
      </section>
      <section className='border-y border-glorious_border flex flex-col gap-5 lg:gap-8'>
        {project.firstImageTakeaway?.asset && (
          <figure className="relative overflow-hidden w-full lg:max-h-[800px] max-h-[380px]">
            {/* Aspect Ratio Wrapper */}
            <div
              className="lg:max-h-[800px] max-h-[380px]"
              style={{
                paddingTop: `${
                  (project.firstImageTakeaway.asset.metadata.dimensions.height /
                    project.firstImageTakeaway.asset.metadata.dimensions.width) *
                  100
                }%`,
                maxHeight: '100%'
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
              priority={false}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-out opacity-100 lg:max-h-[800px] max-h-[380px]"
            />
          </figure>
        )}
      </section>
      <section>
      <div className='flex lg:flex-row flex-col'>
        <div className="w-full lg:w-md border-r border-glorious_border p-4 lg:p-6">
          
          <div className="sticky top-[137.5px]">
          <p className='section-title-md'>Outcome</p>
          
          </div>
        </div>
        <div className="flex-1 p-4 lg:p-6 flex gap-4 flex-col lg:pb-20 pb-12">
        <h2 className='mb-4 text-4xl'>{project.takeawaySubHeading}</h2>
        <PortableText value={project.takeawayContent} />
        </div>
        </div>
      </section>
    </div>
  );
}