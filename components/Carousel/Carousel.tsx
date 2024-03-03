"use client"
import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import { 
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel"

function CarouselPlugin() {
/*   const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  ) */

  return (
    <Carousel
      // plugins={[plugin.current]}
      className="w-full overflow-hidden"
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
              <div className="relative flex items-center justify-center bg-black">
                <Image src="/images/bed-balcony.jpg" alt="room" width={1920} height={1200} className="object-cover opacity-50 "/>
                <h1 className="absolute top-1/2 text-3xl font-black text-white" >HOTEL</h1>
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