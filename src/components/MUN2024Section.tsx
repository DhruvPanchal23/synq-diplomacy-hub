import { Quote, Star, Users, Trophy, Crown, Zap } from 'lucide-react';

const MUN2024Section = () => {
  return (
    <section id="mun2024" className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-modern relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6">
            <Crown className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-white">Inaugural Conference</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            SYNQ MUN 2024
          </h2>
          <div className="w-32 h-1 bg-gradient-accent rounded-full mx-auto mb-8" />
          <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Setting New Standards of Excellence in Diplomatic Education
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Founders Note */}
          <div className="card-glass p-10 animate-slide-up border border-white/30">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mr-4">
                <Quote className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">A Note from Our Founders</h3>
            </div>
            
            <blockquote className="text-white/90 text-lg leading-relaxed mb-8 italic font-light">
              "We embarked on this journey with a simple belief — that young minds deserve platforms 
              where they can grow, challenge themselves, and create lasting memories. SYNQ MUN represents 
              our commitment to building something truly extraordinary for the next generation."
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-3 mx-auto">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <p className="text-white font-semibold">Raihan Ajmeri</p>
                <p className="text-accent text-sm">Co-Founder</p>
              </div>
              <div className="w-px h-16 bg-white/30" />
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-3 mx-auto">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <p className="text-white font-semibold">Mann Sindhi</p>
                <p className="text-accent text-sm">Co-Founder</p>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="card-glass p-8 border border-white/20 hover:bg-white/15 transition-all group">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-3">First Edition Excellence</h4>
                  <p className="text-white/80 leading-relaxed">Our inaugural conference promises an unmatched MUN experience that sets new benchmarks in diplomatic education and student engagement.</p>
                </div>
              </div>
            </div>

            <div className="card-glass p-8 border border-white/20 hover:bg-white/15 transition-all group">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-3">For All Skill Levels</h4>
                  <p className="text-white/80 leading-relaxed">Designed for both first-time delegates discovering MUN and seasoned participants seeking a premium, transformative experience.</p>
                </div>
              </div>
            </div>

            <div className="card-glass p-8 border border-white/20 hover:bg-white/15 transition-all group">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-3">Unforgettable Experience</h4>
                  <p className="text-white/80 leading-relaxed">Combining professionalism, mentorship, and energy — "The conference you'll always remember and the experience that shapes your future."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-24 text-center">
          <div className="card-glass p-12 border border-white/20 max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Trophy className="h-8 w-8 text-accent mr-3" />
              <h3 className="text-4xl font-bold text-white">Our Vision for Excellence</h3>
            </div>
            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
              SYNQ MUN 2024 isn't just a conference — it's a movement. We're creating a space where 
              diplomatic minds converge, where debates spark innovation, and where every delegate 
              leaves with memories that last a lifetime and skills that shape their future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MUN2024Section;