import { Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-crimson">
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gradient-gold">
            About SYNQ INC
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A student-led non-profit redefining educational experiences through debate, diplomacy, and meaningful dialogue.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-crimson p-8 rounded-xl text-center hover:scale-105 transition-all">
              <Target className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gradient-gold">Our Mission</h3>
              <p className="text-muted-foreground">
                To create platforms that help young minds grow in knowledge, confidence, and experience through meaningful engagement with global issues.
              </p>
            </div>
            
            <div className="glass-crimson p-8 rounded-xl text-center hover:scale-105 transition-all">
              <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gradient-gold">Our Values</h3>
              <p className="text-muted-foreground">
                Non-profit, student-driven, and committed to excellence. Every resource goes directly back to creating unforgettable experiences.
              </p>
            </div>
            
            <div className="glass-crimson p-8 rounded-xl text-center hover:scale-105 transition-all">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gradient-gold">Our Team</h3>
              <p className="text-muted-foreground">
                Powered by 30+ passionate students from across Gujarat, united by a vision to redefine the circuit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-gold">
            Meet the Founders
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="glass-crimson p-8 rounded-xl text-center hover:scale-105 transition-all">
              <div className="w-32 h-32 bg-gradient-gold rounded-full mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-2">Raihan Ajmeri</h3>
              <p className="text-accent mb-4">Co-Founder</p>
              <p className="text-muted-foreground">
                Visionary leader dedicated to creating transformative educational experiences for students across Gujarat.
              </p>
            </div>
            
            <div className="glass-crimson p-8 rounded-xl text-center hover:scale-105 transition-all">
              <div className="w-32 h-32 bg-gradient-gold rounded-full mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-2">Mann Sindhi</h3>
              <p className="text-accent mb-4">Co-Founder</p>
              <p className="text-muted-foreground">
                Passionate about empowering young minds through debate and dialogue on the global stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-24 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-gold">
            The Core Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              "Dhruv Panchal - Head of Social Media & Design",
              ...Array(29).fill("Team Member")
            ].map((member, index) => (
              <div key={index} className="glass-crimson p-4 rounded-lg text-center hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">{member}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
