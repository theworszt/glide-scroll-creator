
import React from 'react';
import SmoothImage from '@/components/SmoothImage';

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
    }
  ];

  return (
    <div className="w-full">
      <div className="min-h-screen py-24 pt-32 px-6 md:px-16 bg-white">
        <div className="animate-on-scroll opacity-0 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block caption bg-black/5 text-black/80 px-4 py-2 rounded-full mb-6">
              Our Story
            </div>
            <h1 className="mb-6">About Us</h1>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              We are a team of passionate designers, developers, and strategists dedicated to creating
              exceptional digital experiences that leave a lasting impression.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto mb-24">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl font-medium mb-6">Our Philosophy</h2>
            <p className="text-lg text-black/70 mb-6">
              At Bertani, we believe that design should serve a purpose. Every element, every interaction,
              and every line of code is crafted with intention and precision. We strive to create work
              that not only looks beautiful but also delivers tangible results for our clients.
            </p>
            <p className="text-lg text-black/70">
              Our approach combines strategic thinking, creative innovation, and technical expertise
              to solve complex problems and create meaningful experiences that resonate with users.
              We're committed to excellence in everything we do.
            </p>
          </div>
          
          <div className="h-[400px] animate-on-scroll opacity-0">
            <SmoothImage 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
              alt="Team meeting"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-medium mb-6">Meet Our Team</h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              The talented individuals behind our success. Each member brings unique skills and perspectives
              that contribute to our collaborative approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="animate-on-scroll opacity-0 text-center">
                <div className="mb-4 overflow-hidden rounded-2xl h-[350px]">
                  <SmoothImage 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-black/70">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
