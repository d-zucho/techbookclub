import { cn } from '../utils/cn'

interface ButtonProps {
  title: string
  className?: string
  icon?: string
}

const Button = ({ title, icon, className }: ButtonProps) => {
  return (
    <>
      <button
        className={cn(
          'px-6 py-5 text-base uppercase rounded-lg tracking-[-1px] leading-[130%] text-neutral-900 border font-semibold border-neutral-900 sm:text-lg',
          className
        )}
      >
        <div className='w-full flex items-center justify-center'>
          <span>{title}</span>
          {icon && (
            <span className='ml-2'>
              <img src={icon} alt='' className='size-6' />
            </span>
          )}
        </div>
      </button>
    </>
  )
}

export default Button
