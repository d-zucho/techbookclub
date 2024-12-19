import MaxWidthWrapper from './MaxWidthWrapper'
import PriceOption from './PriceOption'
import SectionHeader from './SectionHeader'

const optionList = [
  {
    id: 1,
    title: 'Starter',
    price: 19,
    features: ['1 book/month', 'Online forums'],
    buttonText: 'Subscribe Now',
  },
  {
    id: 2,
    title: 'Pro',
    price: 29,
    features: ['2 books/month', 'Virtual meetups'],
    buttonText: 'Subscribe Now',
  },
  {
    id: 3,
    title: 'Enterprise',
    price: 'Custom',
    features: ['Team access', 'Private sessions'],
    buttonText: 'Talk to Us',
  },
]

const MembershipOptions = () => {
  return (
    <section className='mb-32'>
      <MaxWidthWrapper>
        <div>
          <SectionHeader className='text-center'>
            Membership Options
          </SectionHeader>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {optionList.map((option, index) => (
            <PriceOption
              key={option.id}
              index={index}
              option={option}
              className={
                option.id !== 2 ? 'lg:my-5' : 'grid-bg bg-salmon-50 relative'
              }
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default MembershipOptions
