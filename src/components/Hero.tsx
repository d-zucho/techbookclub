import Button from './Button'
import MaxWidthWrapper from './MaxWidthWrapper'
import Logo from '/images/logo.svg'
import HeroRating from './HeroRating.tsx'
import HeroImage from '/images/image-hero-desktop.webp'

const Hero = () => {
  return (
    <section className='hero-bg relative w-full overflow-clip'>
      <div className='size-[684px] rounded-full  bg-[#9CC9DA] absolute -bottom-1/2 -right-1/3 blur-[200px]'></div>
      <MaxWidthWrapper>
        <div className='py-8'>
          <img src={Logo} alt='' />
        </div>

        {/* Hero */}
        <div className='py-8'>
          <div className='flex items-center justify-between flex-col lg:flex-row lg:justify-between gap-4'>
            <div className='lg:w-[50%] text-center lg:text-left'>
              <h1 className='font-mono font-bold text-[38px] sm:text-[48px] md:text-[62px]  my-text-gradient bg-clip-text text-transparent'>
                Join the ultimate tech book club
              </h1>
              <p className='text-neutral-700 pt-6 font-inter text-xl tracking-tight md:max-w-prose lg:max-w-[85%]'>
                Turn your reading time into learning time with fellow tech
                enthusiasts. Get curated recommendations, join vibrant
                discussions, and level up your skills one chapter at a time.
              </p>
              <Button
                title='Review membership options'
                className='bg-salmon-50 mt-8 mb-5 hover:bg-gradient-2 transition-all duration-1000'
                icon='/images/icon-arrow-down.svg'
              />
              <div>
                <div className='flex justify-center lg:justify-start'>
                  <HeroRating />
                </div>
              </div>
            </div>

            {/* right side */}
            <div className='lg:w-[50%] '>
              <img
                src={HeroImage}
                alt=''
                className='rounded-3xl min-w-[340px] lg:max-w-[90%] mx-auto lg:mx-0 max-w-lg'
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
