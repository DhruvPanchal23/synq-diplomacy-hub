import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Star, Users, Zap, Award, Heart } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: Star,
      title: 'Unmatched Quality of Debate',
      description: 'Rigorous research standards and expert moderation ensuring high-caliber discussions',
      highlight: 'Excellence First'
    },
    {
      icon: Award,
      title: 'Premium Venue & Hospitality',
      description: '4-star luxury at The Fern with world-class facilities and curated dining experiences',
      highlight: 'Luxury Experience'
    },
    {
      icon: Heart,
      title: 'Delegate-Centric Approach',
      description: 'Every decision made with delegate experience at the forefront, from logistics to socials',
      highlight: 'You Matter'
    },
    {
      icon: Zap,
      title: 'Electrifying Socials',
      description: 'Two unforgettable nights that will be talked about for years - "The craziest socials Vadodara has ever seen"',
      highlight: 'Legendary Nights'
    },
    {
      icon: Users,
      title: 'Experienced Team of 30',
      description: 'Passionate organizers from across Gujarat bringing expertise and enthusiasm to every detail',
      highlight: 'Expert Leadership'
    },
    {
      icon: CheckCircle,
      title: 'Non-Profit, Student-Driven',
      description: 'Every resource goes back to delegates. No corporate agenda, just pure educational value',
      highlight: 'Student First'
    }
  ];

  return (
    <section id="why-choose" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-crimson">
            Why SYNQ MUN is Different
          </h2>
          <div className="w-32 h-1 gold-gradient mx-auto mb-8 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We didn't just create another MUN conference. We reimagined what a premier 
            educational experience should look like.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-elegant transition-all duration-300 border-muted hover:border-primary/30 bg-card/70 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6 px-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 crimson-gradient rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="inline-block bg-gold/10 text-gold-dark px-3 py-1 rounded-full text-xs font-medium mb-3">
                      {feature.highlight}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-primary/20 shadow-crimson">
          <h3 className="text-3xl font-bold text-center mb-12 text-gradient-crimson">
            The SYNQ Difference
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Traditional MUN */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-muted-foreground text-center">
                Traditional MUN Conferences
              </h4>
              <ul className="space-y-4">
                {[
                  'Basic venue facilities',
                  'Limited hospitality options',
                  'Generic social events',
                  'Profit-driven organization',
                  'Standard committee formats',
                  'Minimal delegate support'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-muted-foreground/40 rounded-full mr-4 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* SYNQ MUN */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-gradient-crimson text-center">
                SYNQ MUN Experience
              </h4>
              <ul className="space-y-4">
                {[
                  '4-star luxury venue with premium amenities',
                  'Curated dining and world-class hospitality',
                  'Legendary socials that create lifelong memories',
                  'Non-profit, student-first approach',
                  'Contemporary, relevant committee agendas',
                  'Comprehensive delegate support and mentorship'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-hero-gradient rounded-2xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the first edition of what promises to be Gujarat's most memorable MUN conference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Register Now
              </button>
              <button 
                onClick={() => document.querySelector('#committees')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                View Committees
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;