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
        'md:max-w-[1208px] mx-auto px-4 sm:px-8 md:px-16',
        className
      )}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
