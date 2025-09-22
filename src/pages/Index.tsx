import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MUN2024Section from '@/components/MUN2024Section';
import WhatIsMunSection from '@/components/WhatIsMunSection';
import CommitteesSection from '@/components/CommitteesSection';
import VenueSection from '@/components/VenueSection';
import ExperienceSection from '@/components/ExperienceSection';
import SocialsSection from '@/components/SocialsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <MUN2024Section />
        <WhatIsMunSection />
        <CommitteesSection />
        <VenueSection />
        <ExperienceSection />
        <SocialsSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-gradient-dark text-white py-16">
        <div className="container-modern">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient-primary">SYNQ</h3>
                  <p className="text-sm text-white/60">Model United Nations</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                Empowering young minds through debate and diplomacy. 
                A student-led, non-profit initiative creating unforgettable educational experiences.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-gradient-accent text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform inline-block">About SYNQ</a></li>
                <li><a href="#committees" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform inline-block">Committees</a></li>
                <li><a href="#venue" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform inline-block">Venue</a></li>
                <li><a href="#experience" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform inline-block">Experience</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform inline-block">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-gradient-accent text-lg">Connect With Us</h4>
              <div className="space-y-4">
                <p className="text-white/70">Email: contact@synq.inc</p>
                <p className="text-white/70">Instagram: @synq.inc</p>
                <p className="text-white/70">Venue: The Fern, Akota, Vadodara</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-white/50">
              © 2024 SYNQ.inc. All rights reserved. | A student-led, non-profit initiative.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;