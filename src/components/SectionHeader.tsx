import React from 'react'
import { cn } from '../utils/cn'

interface SectionHeaderProps {
  className?: string
  children: React.ReactNode
}

const SectionHeader = ({ children, className }: SectionHeaderProps) => {
  return (
    <h2
      className={cn(
        'font-semibold font-mono text-[34px] tracking-[-2px] sm:text-[50px] sm:tracking-[-4px] leading-[130%] text-neutral-900',
        className
      )}
    >
      {children}
    </h2>
  )
}

export default SectionHeader
