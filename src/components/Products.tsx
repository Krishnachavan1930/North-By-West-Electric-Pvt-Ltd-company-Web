
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Products = () => {
  const products = [
    {
      title: "Industrial Switchgear",
      description: "High-voltage switchgear solutions for industrial applications",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specs: ["Up to 36kV", "Arc-resistant design", "Modular construction"]
    },
    {
      title: "Power Transformers",
      description: "Efficient power transformers for various voltage levels",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specs: ["50Hz/60Hz", "Oil-filled design", "High efficiency"]
    },
    {
      title: "Control Panels",
      description: "Custom control panels for automation and monitoring",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specs: ["Custom design", "HMI interface", "Remote monitoring"]
    },
    {
      title: "Protection Relays",
      description: "Advanced protection systems for electrical networks",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specs: ["Digital technology", "Communication ready", "Self-diagnostic"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-leading electrical equipment designed for reliability and performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">{product.description}</p>
                <div className="space-y-1">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                      <span className="text-xs text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>
                <Button size="sm" variant="outline" className="w-full mt-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
