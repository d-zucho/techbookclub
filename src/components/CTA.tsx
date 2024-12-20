import Button from './Button'
import HeroRating from './HeroRating'
import MaxWidthWrapper from './MaxWidthWrapper'
import SectionHeader from './SectionHeader'

const CTA = () => {
  return (
    <section className='bg-neutral-900 py-14'>
      <MaxWidthWrapper>
        <div className=''>
          <SectionHeader className='text-neutral-50 text-center'>
            Ready to debug your reading list?
          </SectionHeader>
          <Button
            className='text-base font-semibold tracking-[-1px] text-white flex border-2 border-white w-full sm:w-fit mx-auto mt-10 mb-6'
            title='REVIEW MEMBERSHIP OPTIONS'
            icon='/images/icon-arrow-up.svg'
          />
          <div className='flex items-center justify-center'>
            <HeroRating className='text-white' />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default CTA
