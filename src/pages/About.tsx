
import React from 'react';
import { NavBar } from '@/components/NavBar';
import SmoothImage from '@/components/SmoothImage';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const About = () => {
  const team = [
    {
      name: 'Alex Morgan',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1770&auto=format&fit=crop'
    },
    {
      name: 'Sam Chen',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1627161683077-e34782c24d81?q=80&w=1803&auto=format&fit=crop'
    },
    {
      name: 'Jordan Taylor',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1776&auto=format&fit=crop'
    },
    {
      name: 'Emma Wilson',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <NavBar />
      
      <div className="pt-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column - About Us Content */}
          <div className="animate-on-scroll opacity-0">
            <h1 className="text-5xl font-bold mb-12">About us</h1>
            
            <div className="space-y-6">
              <div className="h-2 w-full bg-black"></div>
              <div className="h-2 w-full bg-black"></div>
              <div className="h-2 w-full bg-black"></div>
              <div className="h-2 w-full bg-black"></div>
              <div className="h-2 w-full bg-black"></div>
              <div className="h-2 w-full bg-black"></div>
              <div className="h-2 w-full bg-black"></div>
              <div className="h-2 w-full bg-black"></div>
            </div>
            
            <p className="text-lg text-black/70 mt-12">
              At RDV, we believe that design should serve a purpose. Every element, every interaction,
              and every line of code is crafted with intention and precision. We strive to create work
              that not only looks beautiful but also delivers tangible results for our clients.
            </p>
            
            <p className="text-lg text-black/70 mt-6">
              Our approach combines strategic thinking, creative innovation, and technical expertise
              to solve complex problems and create meaningful experiences that resonate with users.
              We're committed to excellence in everything we do.
            </p>
          </div>
          
          {/* Right Column - Team Carousel */}
          <div className="animate-on-scroll opacity-0">
            <Carousel className="w-full">
              <CarouselContent>
                {team.map((member, index) => (
                  <CarouselItem key={member.name}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg h-[350px] md:h-[450px]">
                        <SmoothImage 
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-6 space-y-1">
                        <div className="h-2 w-full bg-black"></div>
                        <div className="h-2 w-1/2 bg-black"></div>
                        <div className="h-2 w-3/4 bg-black"></div>
                      </div>
                      <div className="mt-8">
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-black/70">{member.role}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2" />
              <CarouselNext className="absolute right-2 top-1/2" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
