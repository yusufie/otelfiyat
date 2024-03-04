"use client"
import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import sliderData from "@/lib/sliders.json"

import { 
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel"

function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full overflow-hidden"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {sliderData.map((slide: any) => (
          <CarouselItem key={slide._id}>
            <div className="relative flex items-center justify-center bg-black">
              <Image src={slide.image} alt={slide.title} width={1920} height={1200} className="object-cover opacity-50" />
              <h1 className="absolute top-1/2 text-3xl font-black text-white">{slide.title}</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-8 z-50" />
      <CarouselNext className="absolute top-1/2 right-8 z-50" />
    </Carousel>
  )
}

export default CarouselPlugin