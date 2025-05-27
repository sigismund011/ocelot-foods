import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      title: "Farm to Table Spices"
    },
    {
      url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      title: "Premium Quality Turmeric"
    },
    {
      url: "https://images.unsplash.com/photo-1599909092372-3b5dc9675ac4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      title: "Exotic Saffron Collection"
    },
    {
      url: "https://images.unsplash.com/photo-1599909091216-60e22c44529c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      title: "Organic Spice Selection"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section with Slideshow */}
      <section className="relative h-[600px]">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("${image.url}")` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        ))}
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">{heroImages[currentImageIndex].title}</h1>
            <p className="text-xl mb-8">Experience the authentic flavors of nature with our premium spices and food products</p>
            <Link
              to="/products"
              className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Welcome to Ocelot Foods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Spice collection"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </motion.div>
            <div>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-600 mb-8"
              >
                There's much to see here. So, take your time, look around, and learn all there is to know about us. We hope you enjoy our site and make a purchase.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Link
                  to="/products"
                  className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-lg"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop All
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="African farm"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </motion.div>
            <div>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                Ocelot foods originated from West Africa Ghana in 2008, it started as a retailer and distributor of Grains (Maize, Millet, Wheat and Rice).
                The company sees itself to become Africa's largest grain and cereal distributors and retailers, responsible for adding value to the lives of farmers and the community they serve and contributing to the ethical success of those farmers and other organizations.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/our-story"
                  className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-lg"
                >
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Healthy food ingredients"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </motion.div>
            <div>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl text-gray-700 mb-8 leading-relaxed italic"
              >
                Creating a better healthy life through food to nourish people and the Planet flavors of our culinary heritage.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Grain of Selim Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Grain of Selim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1599909092372-3b5dc9675ac4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Grain of Selim spice"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </motion.div>
            <div>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                A stable in our grandmothers' kitchens and all over the world for centuries, cloves add a musky delicious flavor to everything from marinades, it is used for soups, stews tea, marinades, roasts, drinks, jerky seasoning, seasoning meat and for herbal tea which has a lot of benefits...
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/grain-of-selim"
                  className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-lg"
                >
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloves Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Cloves</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1608817576152-26bbdb00afb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Cloves spice"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </motion.div>
            <div>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                Ocelot Cloves have a Unique Natural deep flavored spice, Cloves are dried flower buds of the Syzygium aromaticum tree. Cloves have a warm peppery flavor...
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/cloves"
                  className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-lg"
                >
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Ginger Powder Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Ginger Powder</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1615485500704-8e990f9900f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Ginger Powder"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </motion.div>
            <div>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                Powdered Organic Dried Ginger roots. Ocelot Dried Powered Ginger has been used for centuries and is a stable in many kitchen and hand down recipes...
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/ginger-powder"
                  className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-lg"
                >
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest from Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1505714091216-22ba89c8b863?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "The Art of Spice Blending",
                date: "March 15, 2024"
              },
              {
                image: "https://images.unsplash.com/photo-1515594619429-0f12a702a5ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Sustainable Farming Practices",
                date: "March 10, 2024"
              },
              {
                image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "From Farm to Kitchen",
                date: "March 5, 2024"
              }
            ].map((post, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-emerald-600 text-sm mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
                  <Link
                    to="/blog"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;