import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Users, Award, Globe } from 'lucide-react';
import heroImage from '@/assets/hero-mun.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Modern Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-16 w-16 h-16 bg-primary/20 rounded-full blur-md animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-32 right-16 w-20 h-20 bg-white/10 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-modern text-center text-white px-6">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8 animate-slide-down">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">First Edition • Premium Experience</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-slide-up">
            <span className="block text-gradient-primary">SYNQ</span>
            <span className="block text-2xl md:text-4xl lg:text-5xl font-normal text-white/90 mt-4">
              Empowering Young Minds Through
            </span>
            <span className="block text-gradient-accent mt-2">Debate & Diplomacy</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Student-led. Non-profit. Unforgettable experiences that shape tomorrow's leaders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={scrollToContact}
              className="btn-primary text-lg px-10 py-4 group"
            >
              Join SYNQ MUN 2024
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="ghost"
              className="btn-ghost text-lg px-8 py-4"
              onClick={scrollToAbout}
            >
              Discover More
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="card-glass p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mr-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <span className="text-4xl font-bold text-gradient-accent">30+</span>
              </div>
              <p className="text-white/80 font-medium">Passionate Team Members</p>
            </div>
            
            <div className="card-glass p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-3">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <span className="text-4xl font-bold text-gradient-primary">4</span>
              </div>
              <p className="text-white/80 font-medium">Diverse Committees</p>
            </div>
            
            <div className="card-glass p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mr-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <span className="text-4xl font-bold text-gradient-accent">1st</span>
              </div>
              <p className="text-white/80 font-medium">Premier Edition</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 glass rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;