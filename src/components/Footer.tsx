import MaxWidthWrapper from './MaxWidthWrapper'

const Footer = () => {
  return (
    <footer className='bg-neutral-900'>
      <MaxWidthWrapper className=''>
        <div className='border-t border-white/5 text-white flex justify-between py-6'>
          <div>
            <p className='font-mono tracking-[-1px] leading-[120%]'>
              &copy; 2024 - Tech Book Club
            </p>
          </div>
          <div className='flex gap-6'>
            <img src='/images/logo-bluesky.svg' alt='' />
            <img src='/images/logo-linkedin.svg' alt='' />
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
