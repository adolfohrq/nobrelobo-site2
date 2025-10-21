import React from 'react'

const ProjectIcon: React.FC = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="32" fill="#ECC80B" fillOpacity="0.1"/>
      <path d="M22 26H42V42C42 43.1046 41.1046 44 40 44H24C22.8954 44 22 43.1046 22 42V26Z" stroke="#ECC80B" strokeWidth="2"/>
      <path d="M22 26V22C22 20.8954 22.8954 20 24 20H40C41.1046 20 42 20.8954 42 22V26" stroke="#ECC80B" strokeWidth="2"/>
      <path d="M28 20V26" stroke="#ECC80B" strokeWidth="2"/>
      <path d="M36 20V26" stroke="#ECC80B" strokeWidth="2"/>
      <path d="M26 32L30 36L38 28" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default ProjectIcon 