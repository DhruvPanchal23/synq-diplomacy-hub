import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Award } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-crimson">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-crimson px-6 py-3 rounded-full mb-8 animate-slide-down">
              <span className="text-sm font-semibold text-gold">LET'S SYNQ TOGETHER</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
              <span className="block text-gradient-gold">SYNQ INC</span>
              <span className="block text-foreground text-4xl md:text-5xl font-normal mt-6">
                We Are Redefining the Circuit
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our promise: the finest debates, the craziest socials, and an experience you'll never forget.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/events">
                <Button size="lg" className="btn-primary text-lg">
                  Register for SYNQ MUN 2.0
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="btn-outline text-lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="glass-crimson p-6 rounded-xl hover:scale-105 transition-all">
                <Users className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-4xl font-bold text-gradient-gold mb-2">120+</div>
                <p className="text-muted-foreground">Delegates in 2024</p>
              </div>
              
              <div className="glass-crimson p-6 rounded-xl hover:scale-105 transition-all">
                <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-4xl font-bold text-gradient-gold mb-2">4</div>
                <p className="text-muted-foreground">Elite Committees</p>
              </div>
              
              <div className="glass-crimson p-6 rounded-xl hover:scale-105 transition-all">
                <Calendar className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-4xl font-bold text-gradient-gold mb-2">30+</div>
                <p className="text-muted-foreground">Team Members</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 glass-crimson rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-gold">
            What is SYNQ?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                SYNQ is a student-led initiative built with a single vision — to create platforms that help young minds grow in knowledge, confidence, and experience.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Whether through Model United Nations conferences, Lok Sabha simulations, or other forums of dialogue and debate, we encourage students to think critically, speak fearlessly, and engage meaningfully with the world around them.
              </p>
              <Link to="/about">
                <Button className="btn-gold">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="glass-crimson p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-gradient-gold">Our Promise</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <span className="text-muted-foreground">Non-profit organization - every resource goes back to students</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <span className="text-muted-foreground">Powered by 30+ passionate team members from across Gujarat</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <span className="text-muted-foreground">Premium experiences that redefine the circuit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Past Event Showcase */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-gold">
            SYNQ MUN 2024
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our inaugural conference brought together 120+ delegates for an unforgettable experience of debate, diplomacy, and celebration.
          </p>
          <Link to="/events">
            <Button size="lg" className="btn-primary">
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
