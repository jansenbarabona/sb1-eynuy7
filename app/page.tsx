import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import DestinationSearch from '@/components/DestinationSearch'

const images = [
  "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
]

const popularDestinations = [
  { name: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=2073&ixlib=rb-4.0.3" },
  { name: "Tokyo", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1971&ixlib=rb-4.0.3" },
  { name: "New York", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
  { name: "Rome", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1996&ixlib=rb-4.0.3" },
  { name: "Sydney", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
  { name: "Rio de Janeiro", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
  { name: "Cape Town", image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3" },
  { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
  { name: "Amsterdam", image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
  { name: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=2038&ixlib=rb-4.0.3" },
  { name: "Santorini", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
  { name: "Machu Picchu", image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
  { name: "Kyoto", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
  { name: "Barcelona", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
  { name: "Marrakech", image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
  { name: "Venice", image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
  { name: "London", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
  { name: "Prague", image: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
  { name: "Istanbul", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3" },
  { name: "Bangkok", image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&q=80&w=2050&ixlib=rb-4.0.3" },
  { name: "Petra", image: "https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?auto=format&fit=crop&q=80&w=2108&ixlib=rb-4.0.3" },
  { name: "Reykjavik", image: "https://images.unsplash.com/photo-1504541891213-1b1dfdadb739?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
  { name: "Havana", image: "https://images.unsplash.com/photo-1500759285222-a95626b934cb?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
  { name: "Queenstown", image: "https://images.unsplash.com/photo-1589871973318-9ca1258faa5d?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3" },
  { name: "Dubrovnik", image: "https://images.unsplash.com/photo-1555990538-ae836afbaf4f?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3" }
]

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="relative w-full h-screen">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-screen">
                  <Image
                    src={src}
                    alt={`Explore the world ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
                    <h1 className="text-5xl font-bold mb-6 text-center">Welcome to Explore the World</h1>
                    <p className="text-xl mb-8 text-center max-w-2xl">
                      Discover hidden gems and create unforgettable memories with our expert local guides.
                    </p>
                    <Link href="/guides">
                      <Button size="lg" className="text-lg px-8 py-6 mb-8">Start Your Adventure</Button>
                    </Link>
                    <DestinationSearch />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      
      <div className="w-full bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Destinations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-2 rounded-full overflow-hidden shadow-lg shadow-blue-300 hover:shadow-blue-400 transition-shadow duration-300">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-center font-semibold">{destination.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}