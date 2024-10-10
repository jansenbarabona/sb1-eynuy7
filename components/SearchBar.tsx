"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { DateRange } from "react-day-picker"

export default function SearchBar() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 7))
  })

  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 w-full max-w-3xl">
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <Input 
          className="flex-grow" 
          placeholder="Select Destination" 
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full sm:w-[300px] justify-start text-left font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date range</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
        Search destinations
      </Button>
    </div>
  )
}