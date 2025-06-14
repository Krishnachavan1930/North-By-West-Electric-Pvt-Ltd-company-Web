
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Settings, Wrench, BarChart3, Shield, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Power Distribution Systems",
      description: "Design and installation of comprehensive power distribution networks for industrial and commercial facilities.",
      features: ["Switchgear Design", "Load Analysis", "Power Quality Solutions"]
    },
    {
      icon: Settings,
      title: "Industrial Automation",
      description: "Advanced automation solutions to optimize your industrial processes and increase operational efficiency.",
      features: ["PLC Programming", "SCADA Systems", "Process Control"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Comprehensive maintenance services ensuring your electrical systems operate at peak performance.",
      features: ["Preventive Maintenance", "Emergency Repairs", "System Upgrades"]
    },
    {
      icon: BarChart3,
      title: "Energy Management",
      description: "Smart energy solutions to reduce costs and improve sustainability through efficient power management.",
      features: ["Energy Audits", "Efficiency Optimization", "Smart Monitoring"]
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description: "Ensuring all electrical installations meet safety standards and regulatory compliance requirements.",
      features: ["Safety Inspections", "Code Compliance", "Risk Assessment"]
    },
    {
      icon: Lightbulb,
      title: "Renewable Energy",
      description: "Sustainable energy solutions including solar, wind, and energy storage systems for the future.",
      features: ["Solar Solutions", "Energy Storage", "Grid Integration"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive electrical engineering solutions tailored to meet your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
