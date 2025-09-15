import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Layout from '@/components/Layout';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock blog posts data - in real app, this would come from your backend API
  useEffect(() => {
    const mockPosts: BlogPost[] = [
      {
        id: 1,
        title: 'The Future of Solar Energy: Trends to Watch in 2024',
        excerpt: 'Discover the latest innovations and trends shaping the solar energy industry this year.',
        content: 'Full article content here...',
        author: 'Sarah Johnson',
        date: '2024-01-15',
        readTime: '5 min read',
        category: 'industry',
        image: '/placeholder.svg',
        featured: true
      },
      {
        id: 2,
        title: 'How to Calculate Your Solar Savings',
        excerpt: 'Learn how to determine potential savings from installing solar panels on your home.',
        content: 'Full article content here...',
        author: 'Mike Chen',
        date: '2024-01-12',
        readTime: '7 min read',
        category: 'guides',
        image: '/placeholder.svg',
        featured: false
      },
      {
        id: 3,
        title: 'Solar Panel Maintenance: Essential Tips',
        excerpt: 'Keep your solar investment performing at its best with these maintenance guidelines.',
        content: 'Full article content here...',
        author: 'Emily Rodriguez',
        date: '2024-01-10',
        readTime: '4 min read',
        category: 'maintenance',
        image: '/placeholder.svg',
        featured: false
      },
      {
        id: 4,
        title: 'Understanding Net Metering and Solar Credits',
        excerpt: 'Everything you need to know about how solar credits and net metering work.',
        content: 'Full article content here...',
        author: 'David Park',
        date: '2024-01-08',
        readTime: '6 min read',
        category: 'finance',
        image: '/placeholder.svg',
        featured: true
      },
      {
        id: 5,
        title: 'Solar Energy vs Traditional Energy: Cost Comparison',
        excerpt: 'A detailed breakdown of costs between solar and traditional energy sources.',
        content: 'Full article content here...',
        author: 'Lisa Thompson',
        date: '2024-01-05',
        readTime: '8 min read',
        category: 'finance',
        image: '/placeholder.svg',
        featured: false
      },
      {
        id: 6,
        title: 'Best Solar Panel Brands for 2024',
        excerpt: 'Our expert review of the top solar panel manufacturers and their latest offerings.',
        content: 'Full article content here...',
        author: 'Mark Wilson',
        date: '2024-01-03',
        readTime: '10 min read',
        category: 'reviews',
        image: '/placeholder.svg',
        featured: false
      }
    ];
    setPosts(mockPosts);
  }, []);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'industry', name: 'Industry News' },
    { id: 'guides', name: 'How-To Guides' },
    { id: 'maintenance', name: 'Maintenance' },
    { id: 'finance', name: 'Finance & Savings' },
    { id: 'reviews', name: 'Reviews' }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Solar Blog</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Stay updated with the latest insights, tips, and trends in solar energy and clean technology.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover bg-gradient-card"
                    />
                    <Badge className="absolute top-4 left-4 bg-solar-yellow text-solar-blue">
                      Featured
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="outline" className="group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? 
                  "bg-solar-blue hover:bg-solar-blue/90 whitespace-nowrap" : 
                  "whitespace-nowrap"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover bg-gradient-card"
                  />
                  <Badge variant="secondary" className="absolute top-4 left-4 capitalize">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="outline" size="sm" className="group">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-solar-yellow-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-solar-blue mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-solar-blue/80 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest solar energy insights and industry updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-solar-blue/20 focus:outline-none focus:ring-2 focus:ring-solar-blue"
            />
            <Button 
              size="lg" 
              className="bg-solar-blue hover:bg-solar-blue/90 text-white font-semibold"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;