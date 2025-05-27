import React from 'react';

const Products = () => {
  const products = [
    {
      category: "Oils & Fats",
      items: [
        {
          name: "Coconut Oil",
          image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          description: "Pure, cold-pressed organic coconut oil"
        },
        {
          name: "Palm Oil",
          image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          description: "Premium quality red palm oil"
        }
      ]
    },
    {
      category: "Spices",
      items: [
        {
          name: "Grain of Selim",
          image: "https://images.unsplash.com/photo-1599909092372-3b5dc9675ac4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          description: "Traditional African spice with unique flavor"
        },
        {
          name: "Ginger Powder",
          image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          description: "Finely ground organic ginger root"
        },
        {
          name: "Dried Chilly Powder",
          image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          description: "Hot and aromatic chilly powder"
        },
        {
          name: "Cloves",
          image: "https://images.unsplash.com/photo-1608817576152-26bbdb00afb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          description: "Whole dried cloves with intense aroma"
        }
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        
        {products.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((product, productIndex) => (
                <div key={productIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-center">
                      <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;