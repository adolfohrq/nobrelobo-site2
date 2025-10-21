import React from 'react'

const WebIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M22 42L12 32L22 22" fill="none" stroke="#C8C8CD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M42 22L52 32L42 42" fill="none" stroke="#C8C8CD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36 14L28 50" fill="none" stroke="#C8C8CD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default WebIcon 