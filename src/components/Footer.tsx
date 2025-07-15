import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">
                <span className="text-blue-400">Urooj</span> Akmal
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Computer Science graduate passionate about software development and AI. 
                Let's build innovative solutions together through technology.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:uroojakmal8@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Machine Learning</li>
                <li>Web Development</li>
                <li>Data Analysis</li>
                <li>Software Engineering</li>
                <li>Technical Consulting</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="flex items-center justify-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Urooj Akmal
            </p>
            <p className="mt-2 text-sm">
              © 2024 Urooj Akmal Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;