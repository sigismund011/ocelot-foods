import React from 'react';
import { Users, Leaf, Heart, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: "Community First",
      description: "We prioritize building strong relationships with our farmers and customers."
    },
    {
      icon: <Leaf className="h-8 w-8 text-emerald-600" />,
      title: "Sustainability",
      description: "Our farming practices are designed to protect and preserve the environment."
    },
    {
      icon: <Heart className="h-8 w-8 text-emerald-600" />,
      title: "Quality",
      description: "We maintain the highest standards in all our products and processes."
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: "Trust",
      description: "Transparency and honesty are at the core of everything we do."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Michael Chen",
      role: "Head of Production",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Quality Control Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        
        <div className="mb-16">
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            At Ocelot Foods, we're passionate about bringing the finest quality spices and food products from farm to table. Our commitment to excellence drives everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our team. If you share our values and vision for sustainable, quality food products, we'd love to hear from you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;