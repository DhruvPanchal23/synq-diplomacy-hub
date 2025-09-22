import { Users, MessageCircle, Trophy, Heart, Target, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Critical Thinking",
      description: "Develop analytical skills through structured debate and diplomatic dialogue that challenges perspectives"
    },
    {
      icon: Users,
      title: "Global Community", 
      description: "Connect with passionate delegates and 30+ team members from across Gujarat and beyond"
    },
    {
      icon: Trophy,
      title: "Excellence Focused",
      description: "Every resource reinvested in students - we're non-profit with a purpose-driven mission"
    },
    {
      icon: Heart,
      title: "Student-Led Vision",
      description: "Built by students, for students - creating authentic peer learning experiences"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-modern">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Target className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Mission</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-primary">
            What is SYNQ?
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A revolutionary student-led initiative designed to empower the next generation of leaders
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                SYNQ is a <span className="text-gradient-primary font-semibold">student-led initiative</span> built with a singular vision — 
                to create platforms that help young minds flourish in <span className="text-gradient-primary font-semibold">knowledge, confidence, and experience</span>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether through <span className="text-gradient-primary font-semibold">Model United Nations conferences</span>, 
                Lok Sabha simulations, or other forums of dialogue and debate, we encourage students to 
                <span className="text-gradient-primary font-semibold"> think critically, speak fearlessly, and engage meaningfully</span> with the world around them.
              </p>

              <div className="card-modern p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gradient-primary mb-3">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      As a <strong className="text-foreground">non-profit organization</strong>, every resource flows back to students. 
                      We're powered by <strong className="text-foreground">30 passionate team members</strong> from across Gujarat, 
                      united in creating transformative educational experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-elevated p-6 group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                <div className="mb-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gradient-primary group-hover:text-primary transition-colors">
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
        <div className="mt-24 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-4xl md:text-5xl font-bold text-gradient-primary">30+</div>
              <p className="text-muted-foreground font-medium">Team Members</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl md:text-5xl font-bold text-gradient-accent">100%</div>
              <p className="text-muted-foreground font-medium">Non-Profit</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl md:text-5xl font-bold text-gradient-primary">1st</div>
              <p className="text-muted-foreground font-medium">Edition</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl md:text-5xl font-bold text-gradient-accent">Gujarat</div>
              <p className="text-muted-foreground font-medium">Based</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;