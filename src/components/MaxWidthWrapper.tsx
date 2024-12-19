import React from 'react'
import { cn } from '../utils/cn'

interface MaxWidthWrapperProps {
  children: React.ReactNode
  className?: string
}

const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        'max-w-[343px] sm:max-w-[704px] md:max-w-[1196px] mx-auto px-4 sm:px-8 md:px-16',
        className
      )}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
