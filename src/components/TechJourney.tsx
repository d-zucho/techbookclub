import MaxWidthWrapper from './MaxWidthWrapper'
import SectionHeader from './SectionHeader'

const steps: { step: number; title: string }[] = [
  {
    step: 1,
    title: 'Choose your membership tier',
  },
  {
    step: 2,
    title: 'Get your monthly book selection',
  },
  {
    step: 3,
    title: 'Join our discussion forums',
  },
  {
    step: 4,
    title: 'Attend exclusive meetups',
  },
]

const TechJourney = () => {
  return (
    <section className='hidden lg:block mb-32'>
      <MaxWidthWrapper className=''>
        <div className='grid-bg bg-salmon-50 rounded-xl py-20 relative overflow-hidden'>
          <div className='size-[684px] rounded-full  bg-[#9CC9DA] absolute -bottom-2/3 -right-1/3 blur-[300px] z-0' />
          <div className='py-20 z-10'>
            <SectionHeader className='text-center mb-16 relative z-10'>
              Your tech reading journey
            </SectionHeader>
            <div className='flex gap-12 px-4'>
              {steps.map((step) => (
                <div key={step.step} className='flex flex-1 gap-7 flex-col'>
                  <div className='flex items-center justify-between'>
                    <div className='w-10 h-10 border-2 border-neutral-900 flex items-center justify-center font-mono text-lg'>
                      {step.step}
                    </div>
                    {step.step < 4 && (
                      <img
                        src='/images/pattern-arrow.svg'
                        alt=''
                        className='w-[75px]'
                      />
                    )}
                  </div>
                  <p className='text-lg font-mono font-semibold tracking-[-1px]'>
                    {step.title}
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

export default TechJourney
