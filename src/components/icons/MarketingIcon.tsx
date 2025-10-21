import React from 'react'

const MarketingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 16C23.2 16 16 23.2 16 32C16 40.8 23.2 48 32 48C40.8 48 48 40.8 48 32C48 23.2 40.8 16 32 16Z" stroke="#0E0E0E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32 26V38" stroke="#0E0E0E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26 32H38" stroke="#0E0E0E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default MarketingIcon 