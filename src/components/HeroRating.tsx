import Avatars from '/images/image-avatars.webp'
import Star from '/images/icon-star.svg'
const HeroRating = () => {
  return (
    <div>
      <img src={Avatars} alt='s' />

      <div className='flex items-center'>
        <img src={Star} alt='' />
        <img src={Star} alt='' />
        <img src={Star} alt='' />
        <img src={Star} alt='' />
        <img src={Star} alt='' />
      </div>
    </div>
  )
}

export default HeroRating
