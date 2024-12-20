import Avatars from '/images/image-avatars.webp'
import FiveStarRating from './FiveStarRating'
import { cn } from '../utils/cn'

interface HeroRatingProps {
  className?: string
}

const HeroRating = ({ className }: HeroRatingProps) => {
  return (
    <div>
      <div className='flex items-center gap-4'>
        <img src={Avatars} alt='Avatars' className='w-[110px] h-10' />

        <div className='flex flex-col'>
          <FiveStarRating />
          <p
            className={cn(
              'text-sm font-mono tracking-tighter text-neutral-700',
              className
            )}
          >
            200+ developers already joined
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroRating
