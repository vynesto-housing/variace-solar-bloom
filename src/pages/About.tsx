import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Eye, Heart, Users, Award, Zap, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'We are committed to creating a sustainable future through clean energy solutions that protect our planet for generations to come.'
    },
    {
      icon: Users,
      title: 'Innovation',
      description: 'We continuously push the boundaries of solar technology, bringing cutting-edge solutions to homes and businesses worldwide.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from product quality to customer service and installation expertise.'
    },
    {
      icon: Zap,
      title: 'Reliability',
      description: 'Our solar solutions are built to last, providing dependable clean energy that our customers can count on day after day.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former Tesla engineer with 15+ years in renewable energy',
      image: '/placeholder.svg'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'PhD in Electrical Engineering, solar innovation expert',
      image: '/placeholder.svg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      bio: 'Operations leader with 12+ years in clean tech',
      image: '/placeholder.svg'
    },
    {
      name: 'David Park',
      role: 'Lead Engineer',
      bio: 'Solar system design specialist and installation expert',
      image: '/placeholder.svg'
    }
  ];

  const stats = [
    { value: '50,000+', label: 'Solar Installations' },
    { value: '500MW+', label: 'Clean Energy Generated' },
    { value: '10+', label: 'Years of Experience' },
    { value: '99.5%', label: 'Customer Satisfaction' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Variace Solar</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're on a mission to accelerate the world's transition to sustainable energy 
            through innovative solar solutions that empower homes and businesses.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-solar rounded-full">
                  <Target className="h-8 w-8 text-solar-blue" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                To democratize access to clean, renewable energy by making solar power 
                affordable, reliable, and accessible to everyone. We believe that every 
                home and business should have the opportunity to reduce their carbon 
                footprint while saving money on energy costs.
              </p>
              <p className="text-lg text-muted-foreground">
                Through cutting-edge technology, exceptional service, and unwavering 
                commitment to sustainability, we're building a brighter, cleaner future 
                for our planet and the generations that will inherit it.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-card rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Zap className="h-24 w-24 text-solar-yellow mx-auto mb-4 animate-pulse" />
                  <p className="text-lg text-muted-foreground">Mission Video Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-solar-yellow-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video bg-gradient-card rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Eye className="h-24 w-24 text-solar-blue mx-auto mb-4 animate-pulse" />
                  <p className="text-lg text-solar-blue">Vision Video Coming Soon</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-solar-blue rounded-full">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-solar-blue">Our Vision</h2>
              </div>
              <p className="text-lg text-solar-blue/80 mb-6">
                A world powered entirely by clean, renewable energy where every building 
                is energy-independent and carbon-neutral. We envision communities that 
                generate more energy than they consume, creating a sustainable ecosystem 
                that benefits both people and the planet.
              </p>
              <p className="text-lg text-solar-blue/80">
                By 2030, we aim to be the leading force in residential and commercial 
                solar adoption, having helped millions of customers transition to clean 
                energy and contributed significantly to global carbon reduction goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every solution we deliver.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-solar rounded-full flex-shrink-0">
                      <value.icon className="h-8 w-8 text-solar-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Numbers that showcase our commitment to clean energy transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-solar-yellow mb-2">
                  {stat.value}
                </div>
                <div className="text-white/90 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate experts driving the clean energy revolution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="w-32 h-32 bg-gradient-solar rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-solar-blue">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-solar-blue font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-solar-yellow-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-solar-blue mb-6">
            Ready to Join the Solar Revolution?
          </h2>
          <p className="text-xl text-solar-blue/80 mb-8 max-w-2xl mx-auto">
            Let's work together to create a sustainable future. Start your solar journey today 
            and become part of the clean energy movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-solar-blue hover:bg-solar-blue/90 text-white font-semibold"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-solar-blue text-solar-blue hover:bg-solar-blue hover:text-white"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;