import FiveStarRating from './FiveStarRating'
import MaxWidthWrapper from './MaxWidthWrapper'

const Testimonials = () => {
  return (
    <section className='mb-20'>
      <MaxWidthWrapper>
        <FiveStarRating />
      </MaxWidthWrapper>
    </section>
  )
}

export default Testimonials
