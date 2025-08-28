import { Users, MessageCircle, Trophy, Heart } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Critical Thinking",
      description: "Develop analytical skills through structured debate and diplomatic dialogue"
    },
    {
      icon: Users,
      title: "Community Building", 
      description: "Connect with 30 passionate team members from across Gujarat"
    },
    {
      icon: Trophy,
      title: "Excellence Focused",
      description: "Every resource goes back to students - we're non-profit with a purpose"
    },
    {
      icon: Heart,
      title: "Student-Led Vision",
      description: "Built by students, for students - authentic peer learning experience"
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-crimson">
            What is SYNQ?
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto mb-8 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                SYNQ is a <strong className="text-primary">student-led initiative</strong> built with a single vision — 
                to create platforms that help young minds grow in <strong className="text-primary">knowledge, confidence, and experience</strong>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Whether through <strong className="text-primary">Model United Nations conferences</strong>, 
                Lok Sabha simulations, or other forums of dialogue and debate, we encourage students to 
                <strong className="text-primary"> think critically, speak fearlessly, and engage meaningfully</strong> with the world around them.
              </p>

              <div className="bg-card border border-primary/20 rounded-xl p-6 shadow-crimson">
                <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  As a <strong>non-profit organization</strong>, every resource goes back to the students. 
                  We're powered by <strong>30 passionate team members</strong> from across Gujarat, 
                  all united in creating unforgettable educational experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card border border-muted rounded-xl p-6 hover:shadow-crimson transition-all duration-300 hover:border-primary/30 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 crimson-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient-crimson mb-2">30+</div>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient-crimson mb-2">100%</div>
              <p className="text-muted-foreground">Non-Profit</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient-crimson mb-2">1st</div>
              <p className="text-muted-foreground">Edition</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient-crimson mb-2">Gujarat</div>
              <p className="text-muted-foreground">Based</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;