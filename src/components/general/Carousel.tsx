import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'
import ArrowIcon from '../icons/ArrowIcon'

interface CarouselProps {
  options?: EmblaOptionsType
  children: ReactNode
  className?: string
}

const Carousel: React.FC<CarouselProps> = ({ options, children, className = '' }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: true,
    ...options,
  })

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex -ml-4">{children}</div>
      </div>
      
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <button 
          aria-label="Serviço anterior" 
          onClick={scrollPrev}
          className={`w-12 h-12 rounded-full flex items-center justify-center transform rotate-180 transition-all duration-300 ${prevBtnEnabled ? 'bg-white hover:bg-white/90' : 'bg-white/50 cursor-not-allowed'}`}
        >
          <ArrowIcon />
        </button>
        
        <button 
          aria-label="Próximo serviço" 
          onClick={scrollNext}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${nextBtnEnabled ? 'bg-[#ECC80B] hover:bg-[#ECC80B]/90' : 'bg-[#ECC80B]/50 cursor-not-allowed'}`}
        >
          <ArrowIcon />
        </button>
        
        <div className="flex gap-2 ml-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex ? 'bg-[#ECC80B]' : 'bg-white/30'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel 