import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scale, Shield, Heart, Camera, Globe, Users, Trophy } from 'lucide-react';

const CommitteesSection = () => {
  const committees = [
    {
      id: 'lok-sabha',
      title: 'Lok Sabha',
      icon: Scale,
      description: 'Parliamentary simulation of India\'s lower house with real-world legislative challenges',
      agendas: [
        'Operation Sindoor deliberation',
        'One Nation, One Election evaluation'
      ],
      difficulty: 'Intermediate',
      color: 'from-primary to-primary-light'
    },
    {
      id: 'unsc',
      title: 'UN Security Council',
      subtitle: 'UNSC',
      icon: Shield,
      description: 'The premier international body addressing global security and peacekeeping challenges',
      agendas: [
        'Cyber Peacekeeping and AI Governance'
      ],
      difficulty: 'Advanced',
      color: 'from-primary-dark to-primary'
    },
    {
      id: 'unhrc',
      title: 'UN Human Rights Council',
      subtitle: 'UNHRC',
      icon: Heart,
      description: 'Protecting and promoting human rights across diverse cultural contexts',
      agendas: [
        'Gender equality vs cultural norms'
      ],
      difficulty: 'Intermediate',
      color: 'from-gold-dark to-gold'
    },
    {
      id: 'international-press',
      title: 'International Press',
      subtitle: 'IP',
      icon: Camera,
      description: 'Document, analyze, and report on the diplomatic proceedings across all committees',
      agendas: [
        'Journalism and Photography',
        'Live Conference Coverage'
      ],
      difficulty: 'All Levels',
      color: 'from-accent to-gold-light'
    }
  ];

  return (
    <section id="committees" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-crimson">
            Our Committees
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto mb-8 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Five diverse committees offering unique perspectives on global diplomacy, 
            governance, and international relations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {committees.map((committee, index) => (
            <Card 
              key={committee.id}
              className="group hover:shadow-elegant transition-all duration-300 border-muted hover:border-primary/30 animate-scale-in bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${committee.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                      <committee.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {committee.title}
                      </CardTitle>
                      {committee.subtitle && (
                        <p className="text-sm text-muted-foreground">({committee.subtitle})</p>
                      )}
                    </div>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`${
                      committee.difficulty === 'Advanced' ? 'bg-primary/10 text-primary' :
                      committee.difficulty === 'Intermediate' ? 'bg-gold/10 text-gold-dark' :
                      'bg-accent/10 text-accent-foreground'
                    } border-0`}
                  >
                    {committee.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {committee.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <Globe className="h-4 w-4 mr-2 text-primary" />
                    Agenda Items
                  </h4>
                  <ul className="space-y-1">
                    {committee.agendas.map((agenda, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {agenda}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Committee Benefits */}
        <div className="bg-card rounded-2xl p-8 border border-primary/20 shadow-crimson">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient-crimson">
            What Makes Our Committees Special?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 crimson-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Real-World Relevance</h4>
              <p className="text-sm text-muted-foreground">Contemporary issues that shape our world today</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 crimson-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Expert Moderation</h4>
              <p className="text-sm text-muted-foreground">Experienced chairs ensuring quality debate</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 crimson-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Recognition & Awards</h4>
              <p className="text-sm text-muted-foreground">Outstanding delegates receive prestigious awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitteesSection;