import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Star, Shield, Car, Utensils, Wifi } from 'lucide-react';
import venueImage from '@/assets/venue-hotel.jpg';

const VenueSection = () => {
  const amenities = [
    {
      icon: Star,
      title: '4-Star Luxury',
      description: 'Premium hospitality and world-class service'
    },
    {
      icon: Utensils,
      title: 'Curated Dining',
      description: 'Exceptional food and beverage experiences'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Complete security with professional staff'
    },
    {
      icon: Car,
      title: 'Ample Parking',
      description: 'Convenient parking facilities for all delegates'
    },
    {
      icon: Wifi,
      title: 'Modern Facilities',
      description: 'High-speed internet and AV equipment'
    },
    {
      icon: MapPin,
      title: 'Central Location',
      description: 'Prime Vadodara location with easy accessibility'
    }
  ];

  return (
    <section id="venue" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-crimson">
            Premium Venue Experience
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto mb-8 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience SYNQ MUN in the elegant setting of The Fern – An Ecotel Hotel, 
            where luxury meets functionality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Venue Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-gold/20 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform" />
            <div className="relative bg-card rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={venueImage}
                alt="The Fern Hotel - Conference Venue"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">The Fern – An Ecotel Hotel</h3>
                <p className="text-white/90 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Akota, Vadodara
                </p>
              </div>
            </div>
          </div>

          {/* Venue Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gradient-crimson">
                The Fern – An Ecotel Hotel
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Located in the heart of Akota, Vadodara, The Fern provides the perfect backdrop 
                for SYNQ MUN 2024. This 4-star luxury property combines elegance with functionality, 
                offering world-class conference facilities in a sophisticated environment.
              </p>
            </div>

            <div className="bg-card border border-primary/20 rounded-xl p-6 shadow-crimson">
              <h4 className="text-xl font-semibold mb-4 flex items-center text-primary">
                <Star className="h-5 w-5 mr-2" />
                Why The Fern?
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  World-class conference halls with state-of-the-art AV equipment
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  Premium hospitality ensuring delegate comfort throughout
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  Strategic Vadodara location with excellent connectivity
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  Eco-friendly practices aligned with sustainable values
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <Card 
              key={amenity.title}
              className="group hover:shadow-crimson transition-all duration-300 border-muted hover:border-primary/30 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 crimson-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <amenity.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {amenity.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Location Info */}
        <div className="mt-16 text-center">
          <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-gradient-crimson">Perfect Location</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Situated in central Vadodara, The Fern offers easy accessibility for delegates 
              traveling from across Gujarat and beyond. The venue combines convenience with 
              luxury, ensuring your MUN experience is nothing short of exceptional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;