import Avatars from '/images/image-avatars.webp'
import Star from '/images/icon-star.svg'
const HeroRating = () => {
  return (
    <div>
      <div className='flex items-center gap-4'>
        <img src={Avatars} alt='Avatars' className='w-[110px] h-10' />

        <div className='flex flex-col'>
          <div className='flex items-center'>
            <img src={Star} alt='' />
            <img src={Star} alt='' />
            <img src={Star} alt='' />
            <img src={Star} alt='' />
            <img src={Star} alt='' />
          </div>
          <p className='text-sm font-mono tracking-tighter text-neutral-700'>
            200+ developers already joined
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroRating
