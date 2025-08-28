import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Gift, Users, Coffee, Camera, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Trophy,
      title: 'Best Delegate Awards',
      description: 'Cash prizes + Trophy for outstanding performance',
      highlight: 'Cash + Trophy',
      color: 'from-primary to-primary-light'
    },
    {
      icon: Award,
      title: 'High Commendation',
      description: 'Medal + Gift package for exceptional delegates',
      highlight: 'Medal + Gift',
      color: 'from-gold-dark to-gold'
    },
    {
      icon: Gift,
      title: 'Complete Delegate Kit',
      description: 'Everything you need for the perfect MUN experience',
      highlight: 'Full Essentials',
      color: 'from-accent to-gold-light'
    },
    {
      icon: Coffee,
      title: 'Premium Hospitality',
      description: 'Curated food and beverages throughout the conference',
      highlight: 'Gourmet Experience',
      color: 'from-primary-dark to-primary'
    },
    {
      icon: Camera,
      title: 'Professional Photography',
      description: 'Capture every memorable moment of your MUN journey',
      highlight: 'Memory Keepers',
      color: 'from-gold to-gold-light'
    },
    {
      icon: Users,
      title: 'Certificates for All',
      description: 'Recognition certificate for every participating delegate',
      highlight: 'Universal Recognition',
      color: 'from-primary-light to-gold'
    }
  ];

  return (
    <section id="experience" className="section-padding hero-gradient">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Designed for Delegates
          </h2>
          <div className="w-32 h-1 bg-gold rounded-full mx-auto mb-8" />
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Every aspect of SYNQ MUN is crafted with delegate experience at its heart. 
            From awards to amenities, we ensure excellence in every detail.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <Card 
              key={experience.title}
              className="group bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${experience.color} rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <experience.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-gold font-medium text-sm mb-3">
                      {experience.highlight}
                    </p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Highlights */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Awards Breakdown */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Trophy className="h-6 w-6 mr-3 text-gold" />
              Award Categories
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-white font-medium">Best Delegate</span>
                <span className="text-gold font-semibold">Cash + Trophy</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-white font-medium">Outstanding Delegate</span>
                <span className="text-gold font-semibold">Medal + Certificate</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-white font-medium">High Commendation</span>
                <span className="text-gold font-semibold">Medal + Gift</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-white font-medium">Participation</span>
                <span className="text-gold font-semibold">Certificate</span>
              </div>
            </div>
          </div>

          {/* Delegate Kit Contents */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Gift className="h-6 w-6 mr-3 text-gold" />
              Delegate Kit Includes
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Conference Handbook',
                'Writing Materials',
                'Name Placard',
                'Welcome Package',
                'Committee Guides',
                'SYNQ Merchandise',
                'Networking Cards',
                'Refreshment Vouchers'
              ].map((item, i) => (
                <div key={i} className="flex items-center text-white/90">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for the Ultimate MUN Experience?
            </h3>
            <p className="text-white/90 mb-6">
              Join hundreds of delegates in an unforgettable conference where every detail 
              is designed to elevate your diplomatic journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;