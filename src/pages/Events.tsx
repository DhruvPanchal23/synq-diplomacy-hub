import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  event_date: string;
  location: string;
  status: string;
  max_delegates: number;
  cover_image_url: string;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("event_date", { ascending: false });

    if (!error && data) {
      setEvents(data);
    }
    setLoading(false);
  };

  const upcomingEvents = events.filter((e) => e.status === "upcoming");
  const pastEvents = events.filter((e) => e.status === "past");

  const EventCard = ({ event }: { event: Event }) => (
    <div className="glass-crimson rounded-xl overflow-hidden hover:scale-105 transition-all">
      <div className="h-48 bg-gradient-primary" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gradient-gold">{event.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 text-accent" />
            {new Date(event.event_date).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent" />
            {event.location}
          </div>
          {event.max_delegates && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-accent" />
              Max {event.max_delegates} Delegates
            </div>
          )}
        </div>

        <Link to={`/events/${event.slug}`}>
          <Button className="btn-primary w-full">
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-crimson pt-24">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-12 text-gradient-gold">
          Our Events
        </h1>

        <Tabs defaultValue="upcoming" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 glass-crimson">
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Upcoming Events
            </TabsTrigger>
            <TabsTrigger value="past" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Past Events
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            {loading ? (
              <div className="text-center text-muted-foreground">Loading...</div>
            ) : upcomingEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center glass-crimson p-12 rounded-xl">
                <p className="text-xl text-muted-foreground mb-4">No upcoming events at the moment</p>
                <p className="text-muted-foreground">Check back soon for new announcements!</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="past">
            {loading ? (
              <div className="text-center text-muted-foreground">Loading...</div>
            ) : pastEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center glass-crimson p-12 rounded-xl">
                <p className="text-xl text-muted-foreground">No past events to display</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Events;
