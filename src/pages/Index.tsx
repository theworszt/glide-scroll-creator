
import React from 'react';
import HorizontalScroll from '@/components/HorizontalScroll';
import Section from '@/components/Section';
import SmoothImage from '@/components/SmoothImage';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Index = () => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileLayout />
  ) : (
    <DesktopLayout />
  );
};

const DesktopLayout = () => {
  return (
    <HorizontalScroll>
      <Section id="home" className="bg-black text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full items-center">
          <div className="animate-on-scroll opacity-0">
            <div className="mb-8">
              <div className="inline-block caption bg-white/10 text-white/80 px-4 py-2 rounded-full mb-6">
                Horizontal Scrolling Experience
              </div>
              <h1 className="mb-6">Crafting Digital <br />Excellence</h1>
              <p className="text-lg text-white/70 max-w-lg mb-8">
                Premium design meets intuitive functionality, creating digital products
                that inspire, engage, and perform flawlessly.
              </p>
              <button className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-white/90 transition-all duration-300">
                Explore Work
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          <div className="h-[70vh] animate-on-scroll opacity-0">
            <SmoothImage 
              src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1770&auto=format&fit=crop"
              alt="Elegant design"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </Section>

      <Section id="about" className="bg-neutral-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full items-center">
          <div className="h-[70vh] animate-on-scroll opacity-0 order-2 lg:order-1">
            <SmoothImage 
              src="https://images.unsplash.com/photo-1593642702909-dec73df255d7?q=80&w=1769&auto=format&fit=crop"
              alt="About us"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="animate-on-scroll opacity-0 order-1 lg:order-2">
            <div className="mb-8">
              <div className="inline-block caption bg-black/10 text-black/80 px-4 py-2 rounded-full mb-6">
                Our Philosophy
              </div>
              <h2 className="mb-6">Simplicity is the <br />Ultimate Sophistication</h2>
              <p className="text-lg text-black/70 max-w-lg mb-8">
                We believe that design should serve a purpose. Every element, every interaction,
                and every line of code is crafted with intention and precision.
              </p>
              <button className="group flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-black/90 transition-all duration-300">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      <Section id="work" className="bg-white" fullWidth>
        <div className="animate-on-scroll opacity-0">
          <div className="text-center mb-16 px-8">
            <div className="inline-block caption bg-black/5 text-black/80 px-4 py-2 rounded-full mb-6">
              Featured Projects
            </div>
            <h2 className="mb-6">Our Masterpieces</h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Discover a selection of our most impactful work, showcasing the perfect
              balance between aesthetics and functionality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16 lg:px-24">
          {[1, 2, 3].map((item) => (
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
      </Section>

      <Section id="services" className="bg-black text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 h-full items-center">
          <div className="animate-on-scroll opacity-0 lg:col-span-5">
            <div className="mb-8">
              <div className="inline-block caption bg-white/10 text-white/80 px-4 py-2 rounded-full mb-6">
                What We Offer
              </div>
              <h2 className="mb-6">Premium Services, <br />Exceptional Results</h2>
              <p className="text-lg text-white/70 max-w-lg mb-8">
                Our comprehensive suite of services is designed to transform your vision
                into reality, with meticulous attention to detail at every step.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['Strategy', 'Design', 'Development', 'Analytics'].map((service, index) => (
                <div 
                  key={service} 
                  className="animate-on-scroll opacity-0 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full mb-4">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2">{service}</h3>
                  <p className="text-white/60">
                    Comprehensive {service.toLowerCase()} solutions tailored to your specific needs and objectives.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact" className="bg-neutral-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full items-center">
          <div className="animate-on-scroll opacity-0">
            <div className="mb-8">
              <div className="inline-block caption bg-white/10 text-white/80 px-4 py-2 rounded-full mb-6">
                Get In Touch
              </div>
              <h2 className="mb-6">Ready to Start <br />Your Project?</h2>
              <p className="text-lg text-white/70 max-w-lg mb-8">
                Let's create something extraordinary together. Reach out to discuss
                your vision, and we'll bring it to life with precision and passion.
              </p>
              <button className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-white/90 transition-all duration-300">
                Contact Us
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0">
            <form className="grid grid-cols-1 gap-6 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div>
                <label className="block text-sm mb-2 text-white/70">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-white/70">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="hello@example.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-white/70">Message</label>
                <textarea
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30 min-h-[120px]"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg hover:bg-white/90 transition-all duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>
    </HorizontalScroll>
  );
};

const MobileLayout = () => {
  return (
    <div className="w-full">
      <div id="home" className="min-h-screen py-24 bg-black text-white px-6">
        <div className="animate-on-scroll opacity-0 pt-16">
          <div className="mb-8">
            <div className="inline-block caption bg-white/10 text-white/80 px-4 py-2 rounded-full mb-6">
              Horizontal Scrolling Experience
            </div>
            <h1 className="mb-6">Crafting Digital Excellence</h1>
            <p className="text-lg text-white/70 max-w-lg mb-8">
              Premium design meets intuitive functionality, creating digital products
              that inspire, engage, and perform flawlessly.
            </p>
            <button className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-white/90 transition-all duration-300">
              Explore Work
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
        <div className="mt-12 animate-on-scroll opacity-0">
          <SmoothImage 
            src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1770&auto=format&fit=crop"
            alt="Elegant design"
            className="w-full h-[50vh] object-cover rounded-2xl"
          />
        </div>
        <div className="flex justify-center mt-12">
          <ChevronDown className="w-6 h-6 animate-bounce text-white/50" />
        </div>
      </div>

      <div id="about" className="min-h-screen py-24 bg-neutral-100 px-6">
        <div className="animate-on-scroll opacity-0">
          <div className="mb-8">
            <div className="inline-block caption bg-black/10 text-black/80 px-4 py-2 rounded-full mb-6">
              Our Philosophy
            </div>
            <h2 className="mb-6">Simplicity is the Ultimate Sophistication</h2>
            <p className="text-lg text-black/70 max-w-lg mb-8">
              We believe that design should serve a purpose. Every element, every interaction,
              and every line of code is crafted with intention and precision.
            </p>
            <button className="group flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-black/90 transition-all duration-300">
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
        <div className="mt-12 animate-on-scroll opacity-0">
          <SmoothImage 
            src="https://images.unsplash.com/photo-1593642702909-dec73df255d7?q=80&w=1769&auto=format&fit=crop"
            alt="About us"
            className="w-full h-[50vh] object-cover rounded-2xl"
          />
        </div>
      </div>

      <div id="work" className="min-h-screen py-24 bg-white px-6">
        <div className="animate-on-scroll opacity-0">
          <div className="text-center mb-16">
            <div className="inline-block caption bg-black/5 text-black/80 px-4 py-2 rounded-full mb-6">
              Featured Projects
            </div>
            <h2 className="mb-6">Our Masterpieces</h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Discover a selection of our most impactful work, showcasing the perfect
              balance between aesthetics and functionality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {[1, 2, 3].map((item) => (
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

      <div id="services" className="min-h-screen py-24 bg-black text-white px-6">
        <div className="animate-on-scroll opacity-0">
          <div className="mb-12">
            <div className="inline-block caption bg-white/10 text-white/80 px-4 py-2 rounded-full mb-6">
              What We Offer
            </div>
            <h2 className="mb-6">Premium Services, Exceptional Results</h2>
            <p className="text-lg text-white/70 max-w-lg mb-8">
              Our comprehensive suite of services is designed to transform your vision
              into reality, with meticulous attention to detail at every step.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8">
          {['Strategy', 'Design', 'Development', 'Analytics'].map((service, index) => (
            <div 
              key={service} 
              className="animate-on-scroll opacity-0 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full mb-4">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-medium mb-2">{service}</h3>
              <p className="text-white/60">
                Comprehensive {service.toLowerCase()} solutions tailored to your specific needs and objectives.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div id="contact" className="min-h-screen py-24 bg-neutral-900 text-white px-6">
        <div className="animate-on-scroll opacity-0">
          <div className="mb-12">
            <div className="inline-block caption bg-white/10 text-white/80 px-4 py-2 rounded-full mb-6">
              Get In Touch
            </div>
            <h2 className="mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-white/70 max-w-lg mb-8">
              Let's create something extraordinary together. Reach out to discuss
              your vision, and we'll bring it to life with precision and passion.
            </p>
          </div>
        </div>
        
        <div className="animate-on-scroll opacity-0 mt-8">
          <form className="grid grid-cols-1 gap-6 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <div>
              <label className="block text-sm mb-2 text-white/70">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-white/70">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                placeholder="hello@example.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-white/70">Message</label>
              <textarea
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30 min-h-[120px]"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg hover:bg-white/90 transition-all duration-300 font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="py-8 bg-black text-white/70 text-center text-sm px-6">
        <div className="max-w-7xl mx-auto">
          <p>© 2023 Bertani. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
