
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building, Award, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: "150+", label: "Expert Engineers" },
    { icon: Building, value: "500+", label: "Projects Completed" },
    { icon: Award, value: "25+", label: "Years Experience" },
    { icon: Globe, value: "20+", label: "Countries Served" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About VolTech Solutions</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                For over 25 years, VolTech Solutions has been at the forefront of electrical engineering innovation. 
                We specialize in designing, manufacturing, and implementing cutting-edge electrical solutions that power 
                industries worldwide.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence, safety, and sustainability drives us to deliver solutions that not only 
                meet today's requirements but anticipate tomorrow's challenges. From small-scale installations to 
                large industrial complexes, we bring expertise and reliability to every project.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              <p className="text-gray-600">
                To provide innovative, reliable, and sustainable electrical engineering solutions that empower 
                businesses to achieve their goals while contributing to a cleaner, more efficient future.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Certified engineers and technicians</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">24/7 emergency support services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Cutting-edge technology and equipment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Comprehensive project management</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Engineering Team"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
