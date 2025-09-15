import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calculator, Wrench } from 'lucide-react';
import Layout from '@/components/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 8AM-6PM PST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@variace-solar.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Green Energy Ave',
      description: 'Solar City, SC 12345'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 8AM-6PM',
      description: 'Sat-Sun: 9AM-5PM'
    }
  ];

  const services = [
    {
      icon: MessageSquare,
      title: 'General Inquiries',
      description: 'Questions about our services and solar solutions'
    },
    {
      icon: Calculator,
      title: 'Free Quote',
      description: 'Get a personalized solar system quote'
    },
    {
      icon: Wrench,
      title: 'Technical Support',
      description: 'Support for existing customers and installations'
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to start your solar journey? Our experts are here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-2"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-2"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-2"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="mt-2"
                          placeholder="Solar installation inquiry"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-2 min-h-32"
                        placeholder="Tell us about your project and how we can help..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-solar-blue hover:bg-solar-blue/90 text-white font-semibold"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-card hover:shadow-hero transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-solar rounded-full flex-shrink-0">
                          <info.icon className="h-6 w-6 text-solar-blue" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-solar-blue font-medium mb-1">
                            {info.details}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    className="w-full justify-start bg-solar-yellow hover:bg-solar-yellow/90 text-solar-blue font-semibold"
                  >
                    <Calculator className="mr-3 h-5 w-5" />
                    Get Free Solar Quote
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full justify-start border-solar-green text-solar-green hover:bg-solar-green hover:text-white"
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-solar-yellow-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-solar-blue mb-4">How Can We Help?</h2>
            <p className="text-lg text-solar-blue/80 max-w-2xl mx-auto">
              Choose the type of support you need, and we'll connect you with the right expert.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardContent className="p-0">
                  <div className="mx-auto w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-solar-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Visit Our Showroom</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See our solar solutions up close and speak with our experts in person.
            </p>
          </div>
          
          <div className="aspect-video bg-gradient-card rounded-lg flex items-center justify-center shadow-card">
            <div className="text-center">
              <MapPin className="h-24 w-24 text-solar-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map Coming Soon</h3>
              <p className="text-muted-foreground">
                123 Green Energy Ave, Solar City, SC 12345
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;