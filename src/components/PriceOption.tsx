import { cn } from '../utils/cn'
import Button from './Button'

interface PriceOptionProps {
  className?: string

  index: number
  option: {
    id: number
    title: string
    price: number | string
    features: string[]
    buttonText: string
  }
}

const PriceOption = ({ index, className, option }: PriceOptionProps) => {
  return (
    <div
      className={cn(
        'p-6 border rounded-lg w-full flex flex-col overflow-hidden',
        className
      )}
    >
      <div>
        <h3 className='font-semibold text-[24px] tracking-[-1px] leading-[110%]'>
          {option.title}
        </h3>
        <p className='font-semibold text-[34px] text-neutral-900'>
          {typeof option.price === 'number'
            ? `$${option.price}/`
            : option.price}
          {option.id < 3 && (
            <span className='text-neutral-700 text-xl'>/month</span>
          )}
        </p>
      </div>
      {/* divider */}
      <div className='w-full border-t-2 border-neutral-200 my-6' />

      {/* featires */}
      <div className='space-y-3'>
        {option.features.map((feature, index) => (
          <div key={index} className='flex gap-3'>
            <img src='/images/icon-check.svg' alt='' />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* button */}
      <Button
        className='mt-8 uppercase bg-salmon-50 font-mono font-semibold lg:text-lg z-10 shadow-md'
        title={option.buttonText}
      />
      {index === 1 && (
        <div className='size-[200px] bg-blue-400 rounded-full absolute -bottom-1/3 -right-1/3 blur-[150px] z-0' />
      )}
    </div>
  )
}

export default PriceOption
