import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users, Download, ArrowLeft } from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  event_end_date: string;
  location: string;
  venue_details: string;
  max_delegates: number;
  registration_fee: number;
}

interface Committee {
  id: string;
  name: string;
  agenda: string;
  description: string;
}

interface Document {
  id: string;
  title: string;
  file_url: string;
  file_name: string;
}

const EventDetail = () => {
  const { slug } = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [committees, setCommittees] = useState<Committee[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEventData();
  }, [slug]);

  const fetchEventData = async () => {
    const { data: eventData } = await supabase
      .from("events")
      .select("*")
      .eq("slug", slug)
      .single();

    if (eventData) {
      setEvent(eventData);

      const { data: committeesData } = await supabase
        .from("committees")
        .select("*")
        .eq("event_id", eventData.id);

      const { data: documentsData } = await supabase
        .from("documents")
        .select("*")
        .eq("event_id", eventData.id);

      if (committeesData) setCommittees(committeesData);
      if (documentsData) setDocuments(documentsData);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-crimson pt-24 flex items-center justify-center">
        <div className="text-2xl text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-crimson pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Event not found</h1>
          <Link to="/events">
            <Button className="btn-primary">Back to Events</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-crimson pt-24">
      <div className="container mx-auto px-6 py-12">
        <Link to="/events" className="inline-flex items-center gap-2 text-accent hover:text-accent-light mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </Link>

        {/* Event Header */}
        <div className="glass-crimson p-8 rounded-xl mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-gold">
            {event.title}
          </h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p className="font-semibold">{new Date(event.event_date).toLocaleDateString()}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">{event.location}</p>
              </div>
            </div>
            
            {event.max_delegates && (
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Max Delegates</p>
                  <p className="font-semibold">{event.max_delegates}</p>
                </div>
              </div>
            )}
          </div>

          <Link to="/register">
            <Button size="lg" className="btn-primary w-full md:w-auto">
              Register Now
            </Button>
          </Link>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="about" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8 glass-crimson">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="committees">Committees</TabsTrigger>
            <TabsTrigger value="venue">Venue</TabsTrigger>
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <div className="glass-crimson p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-gradient-gold">About This Event</h2>
              <p className="text-lg text-muted-foreground whitespace-pre-wrap">
                {event.description}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="committees">
            <div className="space-y-6">
              {committees.length > 0 ? (
                committees.map((committee) => (
                  <div key={committee.id} className="glass-crimson p-8 rounded-xl">
                    <h3 className="text-2xl font-bold mb-3 text-gradient-gold">{committee.name}</h3>
                    <p className="text-accent font-semibold mb-4">Agenda: {committee.agenda}</p>
                    {committee.description && (
                      <p className="text-muted-foreground">{committee.description}</p>
                    )}
                  </div>
                ))
              ) : (
                <div className="glass-crimson p-8 rounded-xl text-center">
                  <p className="text-muted-foreground">Committees will be announced soon.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="venue">
            <div className="glass-crimson p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-gradient-gold">Venue Details</h2>
              <p className="text-lg text-muted-foreground whitespace-pre-wrap">
                {event.venue_details || "Venue details will be announced soon."}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="downloads">
            <div className="space-y-4">
              {documents.length > 0 ? (
                documents.map((doc) => (
                  <div key={doc.id} className="glass-crimson p-6 rounded-xl flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">{doc.title}</h3>
                      <p className="text-sm text-muted-foreground">{doc.file_name}</p>
                    </div>
                    <a href={doc.file_url} download target="_blank" rel="noopener noreferrer">
                      <Button className="btn-gold">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </a>
                  </div>
                ))
              ) : (
                <div className="glass-crimson p-8 rounded-xl text-center">
                  <p className="text-muted-foreground">No documents available yet.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EventDetail;
