import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sun, Zap, Leaf, Users, Award, TrendingUp } from 'lucide-react';
import Layout from '@/components/Layout';
import heroSolarSrc from '@/assets/hero-solar.jpg';

const Index = () => {
  const features = [
    {
      icon: Sun,
      title: 'Premium Solar Panels',
      description: 'High-efficiency panels that maximize energy production'
    },
    {
      icon: Zap,
      title: 'Smart Energy Storage',
      description: 'Advanced battery systems for 24/7 clean energy'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Reduce your carbon footprint and help save the planet'
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Happy Customers' },
    { value: '50MW+', label: 'Energy Generated' },
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '25yr', label: 'Warranty' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroSolarSrc} 
            alt="Solar panels on modern home" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-solar-blue/80 to-solar-green/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Powering Life,
              <span className="block bg-gradient-to-r from-solar-yellow to-solar-green bg-clip-text text-transparent">
                Shaping Tomorrow
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Transform your home with cutting-edge solar technology. Clean energy solutions 
              that reduce costs and protect our planet for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-solar-yellow hover:bg-solar-yellow/90 text-solar-blue font-semibold text-lg px-8 py-4 shadow-hero animate-glow"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-solar-blue font-semibold text-lg px-8 py-4"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Variace Solar?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading the clean energy revolution with innovative technology and unmatched reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-8 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="mx-auto w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="h-8 w-8 text-solar-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* CTA Section */}
      <section className="py-20 bg-solar-yellow-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-solar-blue mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-solar-blue/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to clean, 
            renewable energy. Get your free consultation today.
          </p>
          <Button 
            size="lg" 
            className="bg-solar-blue hover:bg-solar-blue/90 text-white font-semibold text-lg px-8 py-4 shadow-hero"
          >
            Start Your Solar Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
