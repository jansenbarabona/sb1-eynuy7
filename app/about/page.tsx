"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function AboutPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3',
      bio: 'With over 15 years of experience in the travel industry, Sarah founded Explore the World to connect travelers with authentic local experiences.',
      expertise: 'Sustainable Tourism, Business Strategy'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3',
      bio: 'Michael ensures smooth operations across all our destinations, leveraging his background in logistics and customer service.',
      expertise: 'Operations Management, Customer Experience'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Travel Expert',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1522&ixlib=rb-4.0.3',
      bio: "Emily's passion for cultural immersion and off-the-beaten-path adventures helps curate unique experiences for our clients.",
      expertise: 'Adventure Travel, Cultural Tours'
    },
  ]

  if (!isClient) {
    return null // or a loading spinner
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">About Explore the World</h1>
      
      <div className="mb-12">
        <Image
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3"
          alt="Explore the World"
          width={1200}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      <Tabs defaultValue="mission" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="mission">Our Mission</TabsTrigger>
          <TabsTrigger value="story">Our Story</TabsTrigger>
          <TabsTrigger value="values">Our Values</TabsTrigger>
        </TabsList>
        <TabsContent value="mission" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>Connecting travelers with authentic local experiences</CardDescription>
            </CardHeader>
            <CardContent>
              <p>At Explore the World, our mission is to bridge cultures and create unforgettable memories by connecting travelers with knowledgeable and passionate local guides. We believe that true understanding comes from immersive, personal experiences, and we're dedicated to making these connections possible for adventurers around the globe.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="story" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Our Story</CardTitle>
              <CardDescription>From a backpacker's dream to a global community</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Explore the World was born from a backpacker's desire to share the magic of authentic local experiences. What started as a small network of passionate travelers has grown into a global community of guides and adventurers, all united by the belief that the best way to explore the world is through the eyes of those who call it home.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="values" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Our Values</CardTitle>
              <CardDescription>The principles that guide our journey</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Authenticity: We prioritize genuine, local experiences.</li>
                <li>Sustainability: We promote responsible travel practices.</li>
                <li>Cultural Respect: We foster mutual understanding and appreciation.</li>
                <li>Adventure: We encourage stepping out of comfort zones.</li>
                <li>Community: We build lasting connections between travelers and locals.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 relative overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{member.bio}</p>
                <p className="font-semibold">Expertise:</p>
                <p>{member.expertise}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Join Our Community</h2>
        <p className="mb-6">Become part of our global network of travelers and guides. Start your journey today!</p>
        <Button size="lg">Sign Up Now</Button>
      </section>
    </div>
  )
}