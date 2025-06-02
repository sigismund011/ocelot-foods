import React from 'react';

const Story = () => {
  const products = [
    'Dried Abrol Pepper',
    'Dried Ginger roots',
    'Grain of Selim',
    'Cloves',
    'Gari',
    'Dried Powdered Yam',
    'Palm Oil',
    'Coconut Oil',
    'Shea Butter',
    'Canned Tomatoes Paste',
    'Canned Fish',
    'Spaghetti'
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Story</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/images/our-story.jpg"
              alt="Farmers in the field"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The company sees itself to become Africa's largest grain and cereal distributors and retailers, responsible for adding value to the lives of farmers and the community they serve and contributing to the ethical success of those farmers and other organizations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The Company is proud of the values with which it conducts business. It has and will continue to uphold the highest levels of business ethics and personal integrity in all types of transactions and interactions.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Product Range</h2>
          <p className="text-gray-600 mb-8 text-center">
            The company has since grown and expanded with a wide range of consumable products including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm text-center"
              >
                <span className="text-gray-800">{product}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/our-mission.jpg"
              alt="Spice processing"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p className="text-gray-600 leading-relaxed">
              At Ocelot Foods, we remain committed to our mission of connecting farmers with commercial consumers, bridging gaps in the market, and ensuring fair and ethical business practices. Our growth is a testament to our dedication to quality, sustainability, and community development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;