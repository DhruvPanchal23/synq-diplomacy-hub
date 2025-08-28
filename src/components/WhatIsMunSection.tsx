import { Card, CardContent } from '@/components/ui/card';
import { Globe, MessageCircle, Users, Lightbulb, Briefcase, Award } from 'lucide-react';

const WhatIsMunSection = () => {
  const benefits = [
    {
      icon: MessageCircle,
      title: 'Public Speaking',
      description: 'Develop confidence and eloquence in formal speaking environments'
    },
    {
      icon: Lightbulb,
      title: 'Critical Thinking',
      description: 'Analyze complex global issues from multiple perspectives'
    },
    {
      icon: Users,
      title: 'Negotiation Skills',
      description: 'Master the art of diplomatic compromise and consensus building'
    },
    {
      icon: Briefcase,
      title: 'Research Abilities',
      description: 'Conduct thorough analysis of international policies and positions'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Research',
      description: 'Study your assigned country\'s policies, history, and stance on committee topics'
    },
    {
      step: '02', 
      title: 'Debate',
      description: 'Engage in formal discussions, present position papers, and defend your country\'s interests'
    },
    {
      step: '03',
      title: 'Negotiate',
      description: 'Work with other delegates to draft resolutions and find diplomatic solutions'
    },
    {
      step: '04',
      title: 'Resolve',
      description: 'Vote on proposals and work towards consensus on pressing global issues'
    }
  ];

  return (
    <section id="what-is-mun" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-crimson">
            What is Model United Nations?
          </h2>
          <div className="w-32 h-1 gold-gradient mx-auto mb-8 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A simulation of the real United Nations where students become diplomats, 
            tackling global challenges through research, debate, and negotiation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* MUN Explanation */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 crimson-gradient rounded-xl flex items-center justify-center">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gradient-crimson">Diplomatic Simulation</h3>
                <p className="text-muted-foreground">Real UN procedures, real global issues</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Model United Nations is an educational simulation where students step into the shoes of 
                <strong className="text-primary"> world diplomats</strong> to debate pressing global issues. 
                Participants represent different countries in various UN committees, from the Security Council 
                to specialized agencies.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Through <strong className="text-primary">research, debate, and negotiation</strong>, 
                delegates work to understand complex international relations while developing crucial 
                21st-century skills. It's not just about winning — it's about understanding the world 
                and your place in it.
              </p>

              <div className="bg-card border border-primary/20 rounded-xl p-6 shadow-crimson">
                <h4 className="text-lg font-semibold text-primary mb-3">Why MUN Matters</h4>
                <p className="text-muted-foreground">
                  MUN goes <strong>far beyond the classroom</strong> — it's where future leaders, diplomats, 
                  and changemakers discover their voice and learn to navigate our interconnected world.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title}
                className="group hover:shadow-crimson transition-all duration-300 border-muted hover:border-primary/30 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 crimson-gradient rounded-lg mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* MUN Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gradient-crimson">
            The MUN Experience
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={step.step}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto flex items-center justify-center shadow-crimson group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2" />
                  )}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Impact */}
        <div className="bg-hero-gradient rounded-2xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Award className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6">More Than a Competition</h3>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              MUN creates global citizens who understand that every issue has multiple perspectives, 
              every solution requires compromise, and every voice matters in shaping our shared future.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-gold mb-2">500K+</div>
                <p className="text-white/80">Students Worldwide</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold mb-2">100+</div>
                <p className="text-white/80">Countries Participating</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold mb-2">75+</div>
                <p className="text-white/80">Years of MUN History</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsMunSection;