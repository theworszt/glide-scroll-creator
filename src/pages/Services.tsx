
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Strategy',
      description: 'We develop comprehensive strategies that align with your business goals and objectives.',
      details: ['Market Research', 'Competitive Analysis', 'Brand Positioning', 'User Experience Strategy']
    },
    {
      title: 'Design',
      description: 'Our design approach balances aesthetics with functionality to create memorable experiences.',
      details: ['UI/UX Design', 'Web Design', 'Mobile App Design', 'Brand Identity']
    },
    {
      title: 'Development',
      description: 'We build robust, scalable solutions using the latest technologies and best practices.',
      details: ['Frontend Development', 'Backend Development', 'E-commerce Solutions', 'CMS Integration']
    },
    {
      title: 'Analytics',
      description: 'Data-driven insights help optimize performance and drive continuous improvement.',
      details: ['Performance Monitoring', 'User Behavior Analysis', 'Conversion Optimization', 'SEO Audits']
    }
  ];

  return (
    <div className="w-full">
      <div className="min-h-screen py-24 pt-32 px-6 md:px-16 bg-neutral-100">
        <div className="animate-on-scroll opacity-0 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block caption bg-black/5 text-black/80 px-4 py-2 rounded-full mb-6">
              What We Offer
            </div>
            <h1 className="mb-6">Services</h1>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Our comprehensive suite of services is designed to transform your vision into reality,
              with meticulous attention to detail at every step.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="animate-on-scroll opacity-0 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-black/5 rounded-full mb-4">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-2xl font-medium mb-3">{service.title}</h3>
              <p className="text-black/70 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              
              <button className="group flex items-center text-sm font-medium">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
