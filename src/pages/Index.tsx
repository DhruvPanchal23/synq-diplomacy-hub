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
      <footer className="bg-slate-900 text-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 crimson-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient-crimson">SYNQ</h3>
                  <p className="text-sm text-white/60">Model United Nations</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Empowering young minds through debate and diplomacy. 
                A student-led, non-profit initiative creating unforgettable educational experiences.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-gold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About SYNQ</a></li>
                <li><a href="#committees" className="text-white/80 hover:text-white transition-colors">Committees</a></li>
                <li><a href="#venue" className="text-white/80 hover:text-white transition-colors">Venue</a></li>
                <li><a href="#experience" className="text-white/80 hover:text-white transition-colors">Experience</a></li>
                <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-gold">Connect With Us</h4>
              <div className="space-y-2 text-sm">
                <p className="text-white/80">Email: contact@synq.inc</p>
                <p className="text-white/80">Instagram: @synq.inc</p>
                <p className="text-white/80">Venue: The Fern, Akota, Vadodara</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2024 SYNQ.inc. All rights reserved. | A student-led, non-profit initiative.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;