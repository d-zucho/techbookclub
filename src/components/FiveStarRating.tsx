import StarIcon from '/images/icon-star.svg'
const FiveStarRating = () => {
  return (
    <div className='flex items-center'>
      {Array.from({ length: 5 }).map((_, index) => (
        <img key={index} src={StarIcon} alt='' />
      ))}
    </div>
  )
}

export default FiveStarRating
