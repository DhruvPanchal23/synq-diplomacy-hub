import { Globe2, Users, MessageSquare, Trophy, BookOpen, Lightbulb } from 'lucide-react';

const WhatIsMunSection = () => {
  const benefits = [
    {
      icon: MessageSquare,
      title: "Public Speaking Mastery",
      description: "Develop confidence and eloquence through structured debates and diplomatic dialogue"
    },
    {
      icon: Lightbulb,
      title: "Critical Thinking",
      description: "Analyze complex global issues and develop innovative solutions to real-world problems"
    },
    {
      icon: Users,
      title: "Leadership Skills",
      description: "Learn to negotiate, collaborate, and lead diverse groups toward consensus"
    },
    {
      icon: Globe2,
      title: "Global Perspective",
      description: "Gain deep understanding of international relations and diplomatic processes"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-modern">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-6">
            <BookOpen className="h-4 w-4 text-accent-dark" />
            <span className="text-sm font-medium text-accent-dark">Educational Excellence</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-primary">
            What is Model UN?
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A transformative simulation where students become diplomats, shaping the future of global discourse
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <div className="card-modern p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <h3 className="text-2xl font-bold text-gradient-primary mb-4">The Experience</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Model United Nations is an immersive simulation of the real United Nations where students step into the shoes of diplomats, representing countries and tackling pressing global challenges.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through research, debate, and negotiation, participants develop crucial 21st-century skills while gaining deep insights into international relations and global governance.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="card-elevated p-6 text-center">
                  <div className="text-3xl font-bold text-gradient-primary mb-2">Research</div>
                  <p className="text-sm text-muted-foreground">Deep dive into global issues</p>
                </div>
                <div className="card-elevated p-6 text-center">
                  <div className="text-3xl font-bold text-gradient-accent mb-2">Debate</div>
                  <p className="text-sm text-muted-foreground">Articulate positions effectively</p>
                </div>
                <div className="card-elevated p-6 text-center">
                  <div className="text-3xl font-bold text-gradient-primary mb-2">Negotiate</div>
                  <p className="text-sm text-muted-foreground">Build consensus and compromise</p>
                </div>
                <div className="card-elevated p-6 text-center">
                  <div className="text-3xl font-bold text-gradient-accent mb-2">Resolve</div>
                  <p className="text-sm text-muted-foreground">Create impactful solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Benefits Grid */}
          <div className="grid gap-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="card-elevated p-8 group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gradient-primary group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <div className="card-modern p-12 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gradient-primary mb-6">
              Beyond the Classroom
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              Model UN goes far beyond traditional education, offering real-world skills, global perspectives, 
              and networks that last a lifetime. Join us to discover your potential as tomorrow's leader.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 bg-gradient-primary rounded-full px-8 py-3">
                <Globe2 className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Shape the Future of Diplomacy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsMunSection;