import FiveStarRating from './FiveStarRating'
import MaxWidthWrapper from './MaxWidthWrapper'

const Testimonials = () => {
  return (
    <section className='mb-32'>
      <MaxWidthWrapper className='lg:text-center lg:flex lg:flex-col lg:justify-center'>
        <div className='lg:flex lg:justify-center'>
          <FiveStarRating />
        </div>
        <div>
          <p className='text-[24px] font-semibold text-neutral-900 tracking-[-1px] leading-[110%] sm:text-[34px] my-8'>
            "This book club transformed my technical reading from a solitary
            activity into an enriching community experience. The discussions are
            gold!"
          </p>
        </div>
        <p className='font-inter text-xl tracking-tight leading-[140%]'>
          Sarah Chen, Software Architect
        </p>
      </MaxWidthWrapper>
    </section>
  )
}

export default Testimonials
