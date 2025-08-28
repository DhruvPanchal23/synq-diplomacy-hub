import { Card, CardContent } from '@/components/ui/card';
import { Moon, Music, Sparkles, Eye, Users } from 'lucide-react';

const SocialsSection = () => {
  return (
    <section id="socials" className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Mysterious Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gold/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            When the Gavels Are Down...
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gold to-primary rounded-full mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-2xl mx-auto italic">
            The debates end, but the memories are just beginning
          </p>
        </div>

        {/* Mysterious Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* First World */}
          <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border-white/20 hover:border-gold/50 transition-all duration-500 group overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gold/30 to-gold/50 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">The First World</h3>
                  <p className="text-gold/90 text-lg font-medium mb-4 italic">
                    "Where grace walks hand-in-hand with celebration"
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    An evening of elegance and sophistication. Where diplomatic minds 
                    unwind in an atmosphere of refined celebration and meaningful connections.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Second World */}
          <Card className="bg-gradient-to-br from-primary/10 to-primary/20 backdrop-blur-md border-white/20 hover:border-primary/50 transition-all duration-500 group overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/50 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Music className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">The Second World</h3>
                  <p className="text-primary-light text-lg font-medium mb-4 italic">
                    "Where chaos turns into rhythm"
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    Energy unleashed, inhibitions released. A night where the 
                    diplomatic decorum gives way to pure, unadulterated celebration.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Central Mystery */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-md border-white/10 overflow-hidden">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-gold/20 to-primary/20 rounded-full mx-auto flex items-center justify-center mb-6">
                  <Eye className="h-12 w-12 text-white/80" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Two Nights. Two Worlds.</h3>
              </div>
              
              <div className="space-y-6 text-lg">
                <p className="text-white/90 italic">
                  "Two very different worlds await you..."
                </p>
                <p className="text-white/90 italic">
                  "One where grace walks hand-in-hand with celebration"
                </p>
                <p className="text-white/90 italic">
                  "The other where chaos turns into rhythm"
                </p>
                <div className="border-t border-white/20 pt-6 mt-8">
                  <p className="text-2xl text-gradient-gold font-bold">
                    The rest... you'll have to live to know.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Teaser Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="text-center space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/40 rounded-full mx-auto flex items-center justify-center">
              <Moon className="h-8 w-8 text-gold" />
            </div>
            <h4 className="text-white font-semibold">Two Unforgettable Nights</h4>
            <p className="text-white/70 text-sm">Experiences that will be talked about for years</p>
          </div>
          
          <div className="text-center space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full mx-auto flex items-center justify-center">
              <Users className="h-8 w-8 text-primary-light" />
            </div>
            <h4 className="text-white font-semibold">Exclusive for Delegates</h4>
            <p className="text-white/70 text-sm">Reserved only for SYNQ MUN participants</p>
          </div>
          
          <div className="text-center space-y-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/20 rounded-full mx-auto flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-white font-semibold">Vadodara's Finest</h4>
            <p className="text-white/70 text-sm">"The craziest socials Vadodara has ever seen"</p>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-white/90 italic max-w-3xl mx-auto">
            "Some experiences can't be described, only lived. SYNQ MUN socials are one of them."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;