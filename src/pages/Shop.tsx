import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Filter } from 'lucide-react';
import Layout from '@/components/Layout';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  features: string[];
  inStock: boolean;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock products data - in real app, this would come from your backend API
  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: 1,
        name: 'Premium Solar Panel 400W',
        price: 599,
        originalPrice: 699,
        rating: 4.8,
        reviews: 124,
        image: '/placeholder.svg',
        category: 'panels',
        features: ['High Efficiency', '25 Year Warranty', 'Weather Resistant'],
        inStock: true
      },
      {
        id: 2,
        name: 'Smart Energy Storage Battery',
        price: 2999,
        originalPrice: 3499,
        rating: 4.9,
        reviews: 87,
        image: '/placeholder.svg',
        category: 'storage',
        features: ['10kWh Capacity', 'Smart Monitoring', 'Backup Power'],
        inStock: true
      },
      {
        id: 3,
        name: 'Solar Inverter 5kW',
        price: 899,
        rating: 4.7,
        reviews: 156,
        image: '/placeholder.svg',
        category: 'inverters',
        features: ['High Efficiency', 'WiFi Monitoring', 'Grid-Tie Ready'],
        inStock: true
      },
      {
        id: 4,
        name: 'Complete Home Solar Kit',
        price: 12999,
        originalPrice: 15999,
        rating: 4.9,
        reviews: 43,
        image: '/placeholder.svg',
        category: 'kits',
        features: ['Everything Included', 'Professional Installation', '30 Year Warranty'],
        inStock: false
      },
      {
        id: 5,
        name: 'Portable Solar Generator',
        price: 1299,
        rating: 4.6,
        reviews: 78,
        image: '/placeholder.svg',
        category: 'portable',
        features: ['Portable Design', 'Multiple Outlets', 'Emergency Ready'],
        inStock: true
      },
      {
        id: 6,
        name: 'Solar Panel Mounting System',
        price: 299,
        rating: 4.5,
        reviews: 92,
        image: '/placeholder.svg',
        category: 'accessories',
        features: ['Universal Fit', 'Easy Installation', 'Corrosion Resistant'],
        inStock: true
      }
    ];
    setProducts(mockProducts);
  }, []);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'panels', name: 'Solar Panels' },
    { id: 'storage', name: 'Energy Storage' },
    { id: 'inverters', name: 'Inverters' },
    { id: 'kits', name: 'Complete Kits' },
    { id: 'portable', name: 'Portable' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Solar Shop</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover our premium collection of solar panels, energy storage systems, 
            and accessories for your clean energy journey.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 overflow-x-auto">
            <Filter className="h-5 w-5 text-muted-foreground flex-shrink-0" />
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

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover bg-gradient-card"
                  />
                  {product.originalPrice && (
                    <Badge className="absolute top-4 left-4 bg-solar-yellow text-solar-blue">
                      Sale
                    </Badge>
                  )}
                  {!product.inStock && (
                    <Badge variant="destructive" className="absolute top-4 right-4">
                      Out of Stock
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-solar-yellow fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-solar-blue">
                      ${product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1 mb-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1 h-1 bg-solar-green rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full bg-solar-blue hover:bg-solar-blue/90 text-white"
                    disabled={!product.inStock}
                  >
                    {product.inStock ? (
                      <>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </>
                    ) : (
                      'Notify When Available'
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-solar-yellow-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-solar-blue mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-lg text-solar-blue/80 mb-6 max-w-2xl mx-auto">
            Our solar experts are here to help you find the perfect solution for your energy needs.
          </p>
          <Button 
            size="lg" 
            className="bg-solar-blue hover:bg-solar-blue/90 text-white font-semibold"
          >
            Get Expert Consultation
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;