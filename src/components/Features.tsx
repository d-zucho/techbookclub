import MaxWidthWrapper from './MaxWidthWrapper'
import FeaturesImage from '/images/image-read-together-desktop.webp'
import CheckIcon from '/images/icon-check.svg'

const featuresList = [
  {
    id: 1,
    text: 'Monthly curated tech reads selected by industry experts',
  },
  {
    id: 2,
    text: 'Virtual and in-person meetups for deep-dive discussions',
  },
  {
    id: 3,
    text: 'Early access to new tech book releases',
  },
  {
    id: 4,
    text: 'Author Q&A sessions with tech thought leaders',
  },
]

const Features = () => {
  return (
    <section className='py-32'>
      <MaxWidthWrapper>
        <div className='flex flex-col-reverse lg:flex-row gap-20 items-center'>
          {/* left */}
          <div className='w-full flex max-w-[700px] mx-auto lg:w-1/2'>
            <img
              src={FeaturesImage}
              alt='Features'
              className='rounded-[20px] min-w-[20rem] w-full'
            />
          </div>
          {/* right */}
          <div className='w-full lg:w-1/2'>
            <h2 className='font-semibold font-mono text-[34px] tracking-[-2px] sm:text-[50px] sm:tracking-[-4%] leading-[130%] text-neutral-900'>
              <span className='block'>Read together,</span>
              <span className='block'>grow together</span>
            </h2>
            <div className='mt-6 sm:mt-8 space-y-4 sm:space-y-6'>
              {featuresList.map((feature) => (
                <div key={feature.id} className='flex items-center gap-4'>
                  <img src={CheckIcon} alt='feature' className='size-7' />
                  <p className='text-neutral-700 text-xl leading-[140%] tracking-tight font-inter'>
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Features
