
import React from 'react';
import Section from '@/components/Section';
import { ArrowRight } from 'lucide-react';
import SmoothImage from '@/components/SmoothImage';

const Projects = () => {
  return (
    <div className="w-full">
      <div className="min-h-screen py-24 pt-32 px-6 md:px-16 bg-white">
        <div className="animate-on-scroll opacity-0 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block caption bg-black/5 text-black/80 px-4 py-2 rounded-full mb-6">
              Our Portfolio
            </div>
            <h1 className="mb-6">Projects</h1>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Explore our diverse portfolio of work across various industries. Each project represents our commitment to excellence and innovation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item} 
              className="animate-on-scroll opacity-0 glass-card bg-neutral-100 hover:bg-neutral-50 transition-all duration-500 group cursor-pointer"
            >
              <div className="h-64 mb-6 overflow-hidden rounded-xl">
                <SmoothImage 
                  src={`https://images.unsplash.com/photo-167${item}698129-ba12f8b9273a?q=80&w=1769&auto=format&fit=crop`}
                  alt={`Project ${item}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Project Title {item}</h3>
              <p className="text-black/60 mb-4">Branding, Web Design, Development</p>
              <div className="flex items-center text-sm font-medium">
                View Project
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
