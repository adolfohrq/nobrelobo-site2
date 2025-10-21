import React from 'react'

const TrafficIcon: React.FC = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="32" fill="#ECC80B" fillOpacity="0.1"/>
      <path d="M32 20L32 44" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 28L32 20L40 28" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 36H40" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 40H40" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round"/>
      <path d="M28 32H36" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export default TrafficIcon 