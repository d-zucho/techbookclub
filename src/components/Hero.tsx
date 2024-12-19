import Button from './Button'
import MaxWidthWrapper from './MaxWidthWrapper'
import Logo from '/images/logo.svg'
import HeroRating from "./HeroRating.tsx";

const Hero = () => {
  return (
    <div className='hero-bg'>
      <MaxWidthWrapper>
        <div className='py-8'>
          <img src={Logo} alt='' />
        </div>

        {/* Hero */}
        <div className='py-8'>
          <h1 className='font-mono font-bold text-[38px] sm:text-[62px]  my-text-gradient bg-clip-text text-transparent'>
            Join the ultimate tech book club
          </h1>
          <p className='text-neutral-700 pt-6 font-inter text-xl tracking-tight'>
            Turn your reading time into learning time with fellow tech
            enthusiasts. Get curated recommendations, join vibrant discussions,
            and level up your skills one chapter at a time.
          </p>
          <Button
            title='Review membership options'
            className='bg-salmon-50 mt-8 mb-5'
            icon='/images/icon-arrow-down.svg'
          />
          <div>
            <div>
              <HeroRating />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Hero
