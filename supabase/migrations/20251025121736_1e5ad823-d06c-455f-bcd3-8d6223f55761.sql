-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create app_role enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, role)
);

-- Create events table
CREATE TABLE public.events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  event_date DATE NOT NULL,
  event_end_date DATE,
  location TEXT NOT NULL,
  venue_details TEXT,
  status TEXT DEFAULT 'upcoming',
  max_delegates INTEGER,
  registration_fee DECIMAL(10,2),
  cover_image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create committees table
CREATE TABLE public.committees (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_id UUID REFERENCES public.events(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  agenda TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create registrations table
CREATE TABLE public.registrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  event_id UUID REFERENCES public.events(id) ON DELETE CASCADE NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  institution TEXT,
  committee_preference TEXT,
  payment_status TEXT DEFAULT 'unpaid',
  payment_amount DECIMAL(10,2),
  registration_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create documents table
CREATE TABLE public.documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_id UUID REFERENCES public.events(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_size INTEGER,
  uploaded_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.committees ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  );
$$;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- RLS Policies for user_roles
CREATE POLICY "Admins can view all roles"
  ON public.user_roles FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage roles"
  ON public.user_roles FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for events
CREATE POLICY "Anyone can view published events"
  ON public.events FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage events"
  ON public.events FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for committees
CREATE POLICY "Anyone can view committees"
  ON public.committees FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage committees"
  ON public.committees FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for registrations
CREATE POLICY "Users can view their own registrations"
  ON public.registrations FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all registrations"
  ON public.registrations FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Authenticated users can create registrations"
  ON public.registrations FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can update registrations"
  ON public.registrations FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete registrations"
  ON public.registrations FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for documents
CREATE POLICY "Anyone can view documents"
  ON public.documents FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage documents"
  ON public.documents FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Create trigger function for profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE PLPGSQL
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.email
  );
  
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER
LANGUAGE PLPGSQL
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Add updated_at triggers
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.events
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.registrations
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();