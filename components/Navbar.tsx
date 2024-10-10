"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun, User, LogOut, Globe, CreditCard, Phone, Camera, Bell, Upload } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Mock user data (replace with actual user data in a real application)
  const userData = {
    name: "John Doe",
    country: "United States",
    countryCode: "US",
    idNumber: "ID123456",
    contactNumber: "+1 234 567 8900",
    profileImage: "/path/to/profile-image.jpg", // Replace with actual path or leave empty for fallback
    walletBalance: 1000
  }

  // Mock notifications (replace with actual notifications in a real application)
  const notifications = [
    {
      id: 1,
      message: "New guide available in Paris!",
      time: "2 hours ago"
    }
  ]

  const handleLogout = () => {
    // Implement actual logout logic here
    console.log('Logging out...')
    router.push('/login')
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      // Implement actual file upload logic here
      console.log('Uploading file:', file.name)
      // You would typically send this file to your server or a file storage service
    }
  }

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Explore the World</Link>
        <div className="flex items-center space-x-4">
          <Link href="/guides" className="hover:underline">Our Guides</Link>
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/become-member">
            <Button variant="outline" size="sm">
              Become a Member
            </Button>
          </Link>
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <Badge variant="destructive" className="absolute -top-1 -right-1 px-1 py-0.5 text-xs">
                    {notifications.length}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <DropdownMenuItem key={notification.id} className="flex flex-col items-start">
                    <span className="font-medium">{notification.message}</span>
                    <span className="text-sm text-muted-foreground">{notification.time}</span>
                  </DropdownMenuItem>
                ))
              ) : (
                <DropdownMenuItem>No new notifications</DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage src={userData.profileImage} alt={userData.name} />
                  <AvatarFallback>{userData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Profile</h4>
                  <div className="flex flex-col items-center space-y-2">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={userData.profileImage} alt={userData.name} />
                      <AvatarFallback>{userData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Camera className="h-4 w-4 mr-2" /> Change Photo
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Update Profile Picture</DialogTitle>
                          <DialogDescription>
                            Upload a new profile picture and manage your wallet.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="flex items-center gap-4">
                            <Input id="picture" type="file" onChange={handleFileUpload} />
                            <Button size="sm">
                              <Upload className="h-4 w-4 mr-2" /> Upload
                            </Button>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-medium">Wallet Balance</h4>
                            <p>${userData.walletBalance.toFixed(2)}</p>
                            <Button variant="outline">Withdraw</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <p className="text-sm">{userData.name}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4" />
                    <p className="text-sm">{userData.country}</p>
                    <Image
                      src={`https://flagcdn.com/w20/${userData.countryCode.toLowerCase()}.png`}
                      width={20}
                      height={15}
                      alt={`${userData.country} flag`}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-4 w-4" />
                    <p className="text-sm">{userData.idNumber}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <p className="text-sm">{userData.contactNumber}</p>
                  </div>
                </div>
                <Button className="w-full" variant="destructive" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  )
}

export default Navbar