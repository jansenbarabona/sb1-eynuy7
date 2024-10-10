"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import ReactCountryFlag from "react-country-flag"
import { ChevronLeft, MapPin } from 'lucide-react'

// Expanded mock data for countries and cities
const countries = [
  { name: 'United States', code: 'US', cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'] },
  { name: 'United Kingdom', code: 'GB', cities: ['London', 'Manchester', 'Birmingham', 'Glasgow', 'Liverpool', 'Leeds', 'Sheffield', 'Edinburgh', 'Bristol', 'Leicester'] },
  { name: 'France', code: 'FR', cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille'] },
  { name: 'Germany', code: 'DE', cities: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig'] },
  { name: 'Italy', code: 'IT', cities: ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo', 'Genoa', 'Bologna', 'Florence', 'Bari', 'Catania'] },
  { name: 'Spain', code: 'ES', cities: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Málaga', 'Murcia', 'Palma', 'Las Palmas', 'Bilbao'] },
  { name: 'Canada', code: 'CA', cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Ottawa', 'Edmonton', 'Mississauga', 'Winnipeg', 'Quebec City', 'Hamilton'] },
  { name: 'Australia', code: 'AU', cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Newcastle', 'Canberra', 'Wollongong', 'Logan City'] },
  { name: 'Japan', code: 'JP', cities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Sapporo', 'Nagoya', 'Kobe', 'Fukuoka', 'Kawasaki', 'Saitama'] },
  { name: 'Brazil', code: 'BR', cities: ['São Paulo', 'Rio de Janeiro', 'Salvador', 'Brasília', 'Fortaleza', 'Belo Horizonte', 'Manaus', 'Curitiba', 'Recife', 'Porto Alegre'] },
  { name: 'India', code: 'IN', cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad', 'Pune', 'Jaipur', 'Surat'] },
  { name: 'China', code: 'CN', cities: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Tianjin', 'Xi\'an', 'Hangzhou', 'Wuhan', 'Chongqing'] },
  { name: 'Mexico', code: 'MX', cities: ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana', 'León', 'Juárez', 'Zapopan', 'Mérida', 'San Luis Potosí'] },
  { name: 'Netherlands', code: 'NL', cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven', 'Tilburg', 'Groningen', 'Almere', 'Breda', 'Nijmegen'] },
  { name: 'South Korea', code: 'KR', cities: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Suwon', 'Ulsan', 'Changwon', 'Goyang'] },
  { name: 'Argentina', code: 'AR', cities: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'La Plata', 'San Miguel de Tucumán', 'Mar del Plata', 'Salta', 'Santa Fe', 'San Juan'] },
  { name: 'South Africa', code: 'ZA', cities: ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth', 'Bloemfontein', 'Nelspruit', 'Kimberley', 'Polokwane', 'Pietermaritzburg'] },
  { name: 'Sweden', code: 'SE', cities: ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Västerås', 'Örebro', 'Linköping', 'Helsingborg', 'Jönköping', 'Norrköping'] },
  { name: 'Turkey', code: 'TR', cities: ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Adana', 'Gaziantep', 'Konya', 'Antalya', 'Kayseri', 'Mersin'] },
  { name: 'Thailand', code: 'TH', cities: ['Bangkok', 'Nonthaburi', 'Nakhon Ratchasima', 'Chiang Mai', 'Hat Yai', 'Udon Thani', 'Pak Kret', 'Khon Kaen', 'Pattaya', 'Songkhla'] }
]

export default function DestinationSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredCities = selectedCountry
    ? selectedCountry.cities.filter(city =>
        city.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : []

  const handleCountrySelect = (country) => {
    setSelectedCountry(country)
    setSearchTerm('')
  }

  const handleCitySelect = (city) => {
    console.log(`Selected ${city}, ${selectedCountry.name}`)
    setIsOpen(false)
    setSelectedCountry(null)
    setSearchTerm('')
    // Here you would typically navigate to a page for the selected city
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full md:w-auto">Search Destinations</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {selectedCountry ? (
              <div className="flex items-center">
                <Button variant="ghost" size="sm" onClick={() => setSelectedCountry(null)} className="mr-2">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                Cities in {selectedCountry.name}
              </div>
            ) : (
              'Select a Country'
            )}
          </DialogTitle>
        </DialogHeader>
        <Input
          type="text"
          placeholder={selectedCountry ? "Search cities..." : "Search countries..."}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />
        <ScrollArea className="h-[300px] w-full rounded-md border p-4">
          {selectedCountry ? (
            filteredCities.map((city, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start mb-2"
                onClick={() => handleCitySelect(city)}
              >
                <MapPin className="mr-2 h-4 w-4" />
                {city}
              </Button>
            ))
          ) : (
            filteredCountries.map((country) => (
              <Button
                key={country.code}
                variant="ghost"
                className="w-full justify-start mb-2"
                onClick={() => handleCountrySelect(country)}
              >
                <ReactCountryFlag
                  countryCode={country.code}
                  svg
                  style={{
                    width: '1em',
                    height: '1em',
                    marginRight: '0.5em'
                  }}
                  title={country.name}
                />
                {country.name}
              </Button>
            ))
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}