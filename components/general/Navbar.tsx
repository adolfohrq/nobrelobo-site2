import React from "react"
import CustomLink from "../../src/components/ui/CustomLink"
import { Button } from "../ui/button"

export const Navbar = () => {
  return (
    <div className="border-b border-white/20 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <CustomLink href="/" className="text-white font-bold text-2xl">
          Vorix
        </CustomLink>
        
        <div className="hidden md:flex space-x-5 text-white">
          <CustomLink href="#" className="hover:text-white/80">Home</CustomLink>
          <CustomLink href="#" className="hover:text-white/80">Sobre</CustomLink>
          <CustomLink href="#" className="hover:text-white/80">Serviços</CustomLink>
          <CustomLink href="#" className="hover:text-white/80">Blog</CustomLink>
          <CustomLink href="#" className="hover:text-white/80">Contato</CustomLink>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-white p-2 rounded-full hover:bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <Button className="bg-[#ECC80B] hover:bg-[#D9B709] text-black rounded-full px-5">
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </div>
  )
} 