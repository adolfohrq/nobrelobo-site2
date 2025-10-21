import React from 'react'

interface SectionDividerProps {
  className?: string
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  className = "" 
}) => {
  return (
    <div className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>
    </div>
  )
}

export default SectionDivider
