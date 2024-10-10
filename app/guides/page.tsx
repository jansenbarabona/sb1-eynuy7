"use client"

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Star, CheckCircle, CreditCard, MapPin, Plane, Ship, Bike, Camera, Mountain, Coffee, Book, Music, Umbrella, Utensils, ChevronLeft, ChevronRight } from 'lucide-react'
import ReactCountryFlag from "react-country-flag"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const guides = [
  {
    id: 1,
    name: "John Doe",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    specialty: "Mountain Trekking",
    description: "Experienced mountain guide with a passion for challenging treks and breathtaking views in the Himalayas.",
    price: 50,
    duration: "8 hours",
    country: "Nepal",
    countryCode: "NP",
    environment: ["Mountains", "Forests"],
    travelOptions: ["Hiking", "Camping"],
    rating: 4.8,
    adventureTypes: ["Hiking", "Camping", "Mountain Climbing"],
    languages: ["English", "Nepali"],
    experience: "10 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    specialty: "Cultural City Tours",
    description: "Knowledgeable guide specializing in the rich history and culture of European cities, particularly Rome and Florence.",
    price: 40,
    duration: "6 hours",
    country: "Italy",
    countryCode: "IT",
    environment: ["Urban", "Historical Sites"],
    travelOptions: ["Walking", "Public Transport"],
    rating: 4.9,
    adventureTypes: ["City Tours", "Museum Visits", "Food Tours"],
    languages: ["English", "Italian", "French"],
    experience: "8 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1096&q=80",
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1083&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1087&q=80"
    ]
  },
  {
    id: 3,
    name: "Carlos Rodriguez",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    specialty: "Amazon Rainforest Explorer",
    description: "Passionate guide offering immersive tours deep into the heart of the Amazon rainforest.",
    price: 65,
    duration: "Full day",
    country: "Brazil",
    countryCode: "BR",
    environment: ["Rainforest", "Rivers"],
    travelOptions: ["Boat", "Hiking"],
    rating: 4.7,
    adventureTypes: ["Wildlife Watching", "Jungle Trekking", "Indigenous Culture"],
    languages: ["English", "Portuguese", "Spanish"],
    experience: "12 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1574&q=80",
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
      "https://images.unsplash.com/photo-1447684808650-354ae64db5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
    ]
  },
  {
    id: 4,
    name: "Yuki Tanaka",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    specialty: "Tokyo Food Tours",
    description: "Culinary expert showcasing the best of Tokyo's diverse food scene, from street eats to Michelin-starred restaurants.",
    price: 55,
    duration: "4 hours",
    country: "Japan",
    countryCode: "JP",
    environment: ["Urban", "Markets", "Restaurants"],
    travelOptions: ["Walking", "Public Transport"],
    rating: 4.9,
    adventureTypes: ["Food Tours", "Cooking Classes", "Market Visits"],
    languages: ["English", "Japanese"],
    experience: "6 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: 5,
    name: "Sophie Dubois",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    specialty: "Paris Art and Architecture",
    description: "Art historian offering in-depth tours of Paris's world-renowned museums and architectural marvels.",
    price: 60,
    duration: "6 hours",
    country: "France",
    countryCode: "FR",
    environment: ["Urban", "Museums", "Historical Sites"],
    travelOptions: ["Walking", "Metro"],
    rating: 4.8,
    adventureTypes: ["Museum Tours", "Architecture Walks", "Art Workshops"],
    languages: ["English", "French", "Spanish"],
    experience: "9 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1420&q=80",
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1460904041914-f2b315f93560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: 6,
    name: "Ahmed Al-Fayed",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    specialty: "Desert Safari and Bedouin Culture",
    description: "Expert guide offering immersive desert experiences and insights into traditional Bedouin life.",
    price: 75,
    duration: "Full day",
    country: "United Arab Emirates",
    countryCode: "AE",
    environment: ["Desert", "Oasis"],
    travelOptions: ["4x4 Vehicle", "Camel"],
    rating: 4.9,
    adventureTypes: ["Desert Safari", "Cultural Experiences", "Stargazing"],
    languages: ["English", "Arabic"],
    experience: "15 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1414085245958-c23c46caf8d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: 7,
    name: "Maria Garcia",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    specialty: "Flamenco and Tapas Tours",
    description: "Passionate guide offering an authentic taste of Spanish culture through flamenco shows and tapas tours.",
    price: 45,
    duration: "5 hours",
    country: "Spain",
    countryCode: "ES",
    environment: ["Urban", "Theaters", "Restaurants"],
    travelOptions: ["Walking"],
    rating: 4.7,
    adventureTypes: ["Cultural Shows", "Food Tours", "Dance Lessons"],
    languages: ["English", "Spanish"],
    experience: "7 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1551107671-b3ce56b6c667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: 8,
    name: "Lars Andersen",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    specialty: "Nordic Fjords and Northern Lights",
    description: "Expert guide offering breathtaking tours of Norway's majestic fjords and Northern Lights viewing experiences.",
    price: 85,
    duration: "8 hours",
    country: "Norway",
    countryCode: "NO",
    environment: ["Fjords", "Arctic"],
    travelOptions: ["Boat", "Bus"],
    rating: 4.9,
    adventureTypes: ["Fjord Cruises", "Northern Lights Tours", "Winter Activities"],
    languages: ["English", "Norwegian", "German"],
    experience: "11 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1520769669658-f07657f5a307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: 9,
    name: "Aisha Patel",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    specialty: "Bollywood and Street Food Tours",
    description: "Energetic guide offering a vibrant exploration of Mumbai's Bollywood scene and mouthwatering street food.",
    price: 40,
    duration: "6 hours",
    country: "India",
    countryCode: "IN",
    environment: ["Urban", "Markets", "Film Studios"],
    travelOptions: ["Walking", "Tuk-tuk"],
    rating: 4.8,
    adventureTypes: ["Bollywood Tours", "Food Tours", "Cultural Experiences"],
    languages: ["English", "Hindi", "Marathi"],
    experience: "5 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
      "https://images.unsplash.com/photo-1517713982677-4b66332f98de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1625398407796-82650a8c135f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    ]
  },
  {
    id: 10,
    name: "Olivia Chen",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    specialty: "Great Wall Hiking",
    description: "Experienced hiker guiding adventurous treks along less-visited sections of the Great Wall of China.",
    price: 55,
    duration: "Full day",
    country: "China",
    countryCode: "CN",
    environment: ["Mountains", "Historical Sites"],
    travelOptions: ["Hiking", "Private Transfer"],
    rating: 4.9,
    adventureTypes: ["Hiking", "Historical Tours", "Photography"],
    languages: ["English", "Mandarin"],
    experience: "8 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1549893072-4bc678117f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
    ]
  },
  {
    id: 11,
    name: "Marco Rossi",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    specialty: "Tuscan Wine Tours",
    description: "Sommelier-led tours through the picturesque vineyards and historic cellars of Tuscany.",
    price: 70,
    duration: "7 hours",
    country: "Italy",
    countryCode: "IT",
    environment: ["Countryside", "Vineyards"],
    travelOptions: ["Private Van", "Walking"],
    rating: 4.8,
    adventureTypes: ["Wine Tasting", "Culinary Experiences", "Scenic Drives"],
    languages: ["English", "Italian", "French"],
    experience: "10 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: 12,
    name: "Leilani Kekoa",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    specialty: "Hawaiian Cultural and Nature Tours",
    description: "Native Hawaiian guide offering authentic cultural experiences and breathtaking nature tours.",
    price: 65,
    duration: "6 hours",
    country: "United States",
    countryCode: "US",
    environment: ["Beaches", "Volcanoes", "Rainforests"],
    travelOptions: ["Jeep", "Hiking"],
    rating: 4.9,
    adventureTypes: ["Cultural Experiences", "Volcano Tours", "Snorkeling"],
    languages: ["English", "Hawaiian"],
    experience: "12 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1542259009477-d625272157b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80"
    ]
  },
  {
    id: 13,
    name: "Hiroshi Tanaka",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80",
    specialty: "Kyoto Temple Circuit",
    description: "Buddhist scholar offering insightful tours of Kyoto's most significant and serene temples.",
    price: 60,
    duration: "6 hours",
    country: "Japan",
    countryCode: "JP",
    environment: ["Urban", "Temples", "Gardens"],
    travelOptions: ["Walking", "Bicycle"],
    rating: 4.9,
    adventureTypes: ["Temple Tours", "Meditation Sessions", "Tea Ceremonies"],
    languages: ["English", "Japanese"],
    experience: "15 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: 14,
    name: "Isabella Costa",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    specialty: "Rio Carnival and Samba Experience",
    description: "Vibrant guide offering insider access to Rio's famous Carnival and authentic samba experiences.",
    price: 80,
    duration: "5 hours",
    country: "Brazil",
    countryCode: "BR",
    environment: ["Urban", "Beaches", "Dance Halls"],
    travelOptions: ["Walking", "Private Transfer"],
    rating: 4.8,
    adventureTypes: ["Carnival Tours", "Dance Lessons", "Nightlife Tours"],
    languages: ["English", "Portuguese", "Spanish"],
    experience: "7 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1551523713-c1473aa01d9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80"
    ]
  },
  {
    id: 15,
    name: "Aleksandr Volkov",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    specialty: "Trans-Siberian Railway Adventure",
    description: "Experienced guide leading epic journeys across Russia on the legendary Trans-Siberian Railway.",
    price: 100,
    duration: "14 days",
    country: "Russia",
    countryCode: "RU",
    environment: ["Train", "Cities", "Wilderness"],
    travelOptions: ["Train", "Walking"],
    rating: 4.9,
    adventureTypes: ["Train Journeys", "Cultural Experiences", "Photography"],
    languages: ["English", "Russian"],
    experience: "10 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1550047510-a7d4052d4c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: 16,
    name: "Zara Thompson",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    specialty: "African Safari and Conservation",
    description: "Wildlife expert offering immersive safari experiences and insights into conservation efforts in East Africa.",
    price: 150,
    duration: "10 hours",
    country: "Kenya",
    countryCode: "KE",
    environment: ["Savanna", "National Parks"],
    travelOptions: ["4x4 Vehicle", "Walking"],
    rating: 4.9,
    adventureTypes: ["Wildlife Safaris", "Conservation Tours", "Photography"],
    languages: ["English", "Swahili"],
    experience: "12 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1504945005722-33670dcaf685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: 17,
    name: "Lukas Schmidt",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    specialty: "Berlin Street Art and Underground Culture",
    description: "Urban explorer showcasing Berlin's vibrant street art scene and alternative subcultures.",
    price: 45,
    duration: "4 hours",
    country: "Germany",
    countryCode: "DE",
    environment: ["Urban", "Art Spaces"],
    travelOptions: ["Walking", "Bicycle"],
    rating: 4.7,
    adventureTypes: ["Street Art Tours", "Alternative Culture", "Nightlife"],
    languages: ["English", "German"],
    experience: "6 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1459679749680-18eb1eb37418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1566149190185-1e5c69a1f99d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1501927023255-9063be98970c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    ]
  },
  {
    id: 18,
    name: "Amira Hassan",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    specialty: "Ancient Egypt and Nile Cruises",
    description: "Egyptologist offering in-depth tours of ancient sites and luxurious Nile River cruises.",
    price: 90,
    duration: "8 hours",
    country: "Egypt",
    countryCode: "EG",
    environment: ["Historical Sites", "River"],
    travelOptions: ["Walking", "Cruise Ship"],
    rating: 4.9,
    adventureTypes: ["Historical Tours", "River Cruises", "Archaeology"],
    languages: ["English", "Arabic", "French"],
    experience: "14 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: 19,
    name: "Sophia Papadopoulos",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    specialty: "Greek Island Hopping",
    description: "Local expert guiding tours through the stunning Cyclades islands, showcasing hidden gems and local culture.",
    price: 75,
    duration: "10 hours",
    country: "Greece",
    countryCode: "GR",
    environment: ["Islands", "Beaches", "Historical Sites"],
    travelOptions: ["Ferry", "Walking"],
    rating: 4.8,
    adventureTypes: ["Island Tours", "Beach Activities", "Cultural Experiences"],
    languages: ["English", "Greek", "German"],
    experience: "9 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1410&q=80",
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    ]
  },
  {
    id: 20,
    name: "Ravi Patel",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    specialty: "Yoga and Wellness Retreats in the Himalayas",
    description: "Experienced yoga instructor and wellness coach offering transformative retreats in the serene Himalayan foothills.",
    price: 85,
    duration: "7 days",
    country: "India",
    countryCode: "IN",
    environment: ["Mountains", "Ashrams"],
    travelOptions: ["Walking", "Private Transfer"],
    rating: 4.9,
    adventureTypes: ["Yoga Retreats", "Meditation", "Ayurvedic Experiences"],
    languages: ["English", "Hindi"],
    experience: "11 years",
    additionalImages: [
      "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1532798442725-41036acc7489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  }
]

const adventureIcons = {
  Hiking: <MapPin className="w-4 h-4" />,
  Camping: <Mountain className="w-4 h-4" />,
  "City Tours": <Coffee className="w-4 h-4" />,
  "Cultural Experiences": <Book className="w-4 h-4" />,
  "Food Tours": <Utensils className="w-4 h-4" />,
  Photography: <Camera className="w-4 h-4" />,
  "Boat Tours": <Ship className="w-4 h-4" />,
  "Bike Tours": <Bike className="w-4 h-4" />,
  "Air Tours": <Plane className="w-4 h-4" />,
  "Music Tours": <Music className="w-4 h-4" />,
  "Beach Activities": <Umbrella className="w-4 h-4" />,
  "Wildlife Safaris": <Camera className="w-4 h-4" />,
  "Desert Adventures": <Mountain className="w-4 h-4" />,
  "Historical Tours": <Book className="w-4 h-4" />,
  "Wine Tasting": <Coffee className="w-4 h-4" />,
  "Spiritual Journeys": <Book className="w-4 h-4" />,
  "Adventure Sports": <Mountain className="w-4 h-4" />,
  "Culinary Experiences": <Utensils className="w-4 h-4" />,
  "Art and Museums": <Camera className="w-4 h-4" />,
  "Nightlife Tours": <Music className="w-4 h-4" />
}

export default function GuidesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGuide, setSelectedGuide] = useState(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const filteredGuides = useMemo(() => {
    return guides.filter(guide => {
      const searchLower = searchTerm.toLowerCase()
      return (
        guide.name.toLowerCase().includes(searchLower) ||
        guide.specialty.toLowerCase().includes(searchLower) ||
        guide.country.toLowerCase().includes(searchLower) ||
        guide.environment.some(env => env.toLowerCase().includes(searchLower)) ||
        guide.travelOptions.some(option => option.toLowerCase().includes(searchLower))
      )
    })
  }, [searchTerm])

  const handleBookNow = (guide) => {
    setSelectedGuide(guide)
    setIsBookingOpen(true)
  }

  const handleProfileClick = (guide) => {
    setSelectedGuide(guide)
    setIsProfileOpen(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Expert Guides</h1>
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search by name, specialty, location, environment, or travel option..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md mx-auto"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides.map((guide) => (
          <Card key={guide.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-24 h-24">
                  <Image
                    src={guide.image}
                    alt={guide.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <ReactCountryFlag
                  countryCode={guide.countryCode}
                  svg
                  style={{
                    width: '2em',
                    height: '2em',
                    marginLeft: '0.5em'
                  }}
                  title={guide.country}
                />
              </div>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center cursor-pointer" onClick={() => handleProfileClick(guide)}>
                  {guide.name}
                  <CheckCircle className="w-5 h-5 text-blue-500 ml-2" />
                </CardTitle>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" />
                  <span>{guide.rating.toFixed(1)}</span>
                </div>
              </div>
              <CardDescription>{guide.specialty}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-2">{guide.description}</p>
              <div className="flex justify-between items-center mt-4">
                <Badge variant="secondary">${guide.price}/hour</Badge>
                <Badge variant="outline">{guide.duration}</Badge>
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold mb-1">Adventure Types:</p>
                <div className="flex flex-wrap gap-2">
                  {guide.adventureTypes.slice(0, 3).map((type, index) => (
                    <Badge key={index} variant="outline">
                      {adventureIcons[type] || null}
                      <span className="ml-1">{type}</span>
                    </Badge>
                  ))}
                  {guide.adventureTypes.length > 3 && (
                    <Badge variant="outline">+{guide.adventureTypes.length - 3} more</Badge>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => handleBookNow(guide)}>Book Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Booking Dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Booking Details</DialogTitle>
            <DialogDescription>
              Review your booking details and proceed to payment.
            </DialogDescription>
          </DialogHeader>
          {selectedGuide && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="guide" className="text-right">
                  Guide
                </Label>
                <Input id="guide" value={selectedGuide.name} className="col-span-3" readOnly />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="tour" className="text-right">
                  Tour
                </Label>
                <Input id="tour" value={selectedGuide.specialty} className="col-span-3" readOnly />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="duration" className="text-right">
                  Duration
                </Label>
                <Input id="duration" value={selectedGuide.duration} className="col-span-3" readOnly />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price
                </Label>
                <Input id="price" value={`$${selectedGuide.price} per hour`} className="col-span-3" readOnly />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="card" className="text-right">
                  Card Number
                </Label>
                <Input id="card" placeholder="1234 5678 9012 3456" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="expiry" className="text-right">
                  Expiry Date
                </Label>
                <Input id="expiry" placeholder="MM/YY" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="cvc" className="text-right">
                  CVC
                </Label>
                <Input id="cvc" placeholder="123" className="col-span-3" />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button type="submit">Confirm Booking</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Profile Dialog */}
      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>{selectedGuide?.name}</DialogTitle>
            <DialogDescription>{selectedGuide?.specialty}</DialogDescription>
          </DialogHeader>
          {selectedGuide && (
            <div className="grid gap-4 py-4">
              <Carousel className="w-full max-w-xs mx-auto">
                <CarouselContent>
                  {selectedGuide.additionalImages.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="flex aspect-square items-center justify-center p-6">
                          <Image src={img} alt={`${selectedGuide.name} tour ${index + 1}`} width={300} height={300} objectFit="cover" />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Experience</h3>
                  <p>{selectedGuide.experience}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Languages</h3>
                  <p>{selectedGuide.languages.join(", ")}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Adventure Types</h3>
                  <p>{selectedGuide.adventureTypes.join(", ")}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Countries Covered</h3>
                  <p>{selectedGuide.country}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}