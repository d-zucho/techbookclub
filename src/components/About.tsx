import MaxWidthWrapper from './MaxWidthWrapper'
import AboutImage from '/images/image-not-average-desktop.webp'
import Circle from '/images/pattern-circle.png'

const About = () => {
  return (
    <section className='mb-32'>
      <MaxWidthWrapper>
        <div className='flex flex-col lg:flex-row gap-20'>
          {/* left */}
          <div className='lg:w-1/2'>
            <div className='flex flex-col gap-6'>
              <div>
                <h2 className='text-[34px] font-semibold font-mono tracking-[-2px] leading-[130%] sm:text-[50px]'>
                  Not your average
                  <span className='block'>
                    book{' '}
                    <span className='relative'>
                      club
                      <img
                        src={Circle}
                        alt=''
                        // className='absolute -top-1 lg:-top-3 sm:h-[65px] -left-2 h-[50px] lg:h-[80px] -right-3 w-[200px] max-w-sm'
                        className='absolute lg:max-w-sm  -right-4 lg:-right-3 -top-1 max-w-none max-h-[120%] lg:max-h-[140%]'
                      />
                    </span>
                  </span>
                  {/* <span className='opacity-0'>{' .'}</span> */}
                </h2>
              </div>
              <p className='text-neutral-700 font-inter text-xl tracking-tight leading-[140%] lg:font-normal'>
                Connect with a community that speaks your language - from{' '}
                <span className='font-semibold'>Python</span> to{' '}
                <span className='font-semibold'>TypeScript</span> and everything
                in between. Our discussions blend technical depth with practical
                applications.
              </p>
            </div>
          </div>
          {/* right */}
          <div className='max-w-[700px] lg:max-w-none mx-auto lg:mx-0 lg:w-1/2'>
            <img
              src={AboutImage}
              alt='About Us'
              className='rounded-[20px] w-full h-full object-cover'
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default About
