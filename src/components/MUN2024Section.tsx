import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star, Users, Trophy } from 'lucide-react';

const MUN2024Section = () => {
  return (
    <section id="mun2024" className="section-padding hero-gradient">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            SYNQ MUN 2024
          </h2>
          <div className="w-32 h-1 bg-gold rounded-full mx-auto mb-8" />
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Setting New Standards of Excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Founders Note */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 animate-fade-in-up">
            <div className="flex items-center mb-6">
              <Quote className="h-8 w-8 text-gold mr-3" />
              <h3 className="text-2xl font-semibold text-white">A Note from Our Founders</h3>
            </div>
            
            <blockquote className="text-white/90 text-lg leading-relaxed mb-6 italic">
              "We embarked on this journey with a simple belief — that young minds deserve platforms 
              where they can grow, challenge themselves, and create lasting memories. SYNQ MUN is our 
              first step towards building something extraordinary."
            </blockquote>
            
            <div className="flex items-center space-x-6">
              <div>
                <p className="text-white font-semibold">Raihan Ajmeri</p>
                <p className="text-gold text-sm">Co-Founder</p>
              </div>
              <div className="w-px h-12 bg-white/30" />
              <div>
                <p className="text-white font-semibold">Mann Sindhi</p>
                <p className="text-gold text-sm">Co-Founder</p>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Star className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">First Edition Excellence</h4>
                  <p className="text-white/80">Our inaugural conference promises an unmatched MUN experience that sets new benchmarks.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">For All Skill Levels</h4>
                  <p className="text-white/80">Perfect for both first-time delegates and seasoned MUNners looking for a premium experience.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Trophy className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Unforgettable Experience</h4>
                  <p className="text-white/80">Combining professionalism, mentorship, and energy — "The conference you'll always remember."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Our Vision for Excellence</h3>
            <p className="text-xl text-white/90 leading-relaxed">
              SYNQ MUN 2024 isn't just a conference — it's a movement. We're creating a space where 
              diplomatic minds converge, where debates spark innovation, and where every delegate 
              leaves with memories that last a lifetime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MUN2024Section;