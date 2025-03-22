
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full">
      <div className="min-h-screen py-24 pt-32 px-6 md:px-16 bg-neutral-100">
        <div className="animate-on-scroll opacity-0 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block caption bg-black/5 text-black/80 px-4 py-2 rounded-full mb-6">
              Get In Touch
            </div>
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Let's create something extraordinary together. Reach out to discuss
              your vision, and we'll bring it to life with precision and passion.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-black/5 p-3 rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-black/70">hello@bertani.com</p>
                  <p className="text-black/70">info@bertani.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-black/5 p-3 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <p className="text-black/70">+1 (555) 123-4567</p>
                  <p className="text-black/70">+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-black/5 p-3 rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Office</h3>
                  <p className="text-black/70">123 Design Avenue</p>
                  <p className="text-black/70">San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0">
            <form className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm mb-2 text-black/70">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-black/70">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm mb-2 text-black/70">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black/20"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm mb-2 text-black/70">Message</label>
                <textarea
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black/20 min-h-[150px]"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-black/90 transition-all duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
