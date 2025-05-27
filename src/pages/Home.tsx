import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

import slideshow1 from '../../images/slideshow-1.jpg';
import slideshow2 from '../../images/slideshow-2.jpg';
import slideshow3 from '../../images/slideshow-3.jpg';
import slideshow4 from '../../images/slideshow-4.jpg';
import slideshow5 from '../../images/blog 4.jpg';
import grain4 from '../../images/blog-1.jpg';
import cloves from '../../images/cloves.jpg';
import grainOfSelimImage from '../../images/grain-of-selim.jpg';
import ginger from '../../images/ginger.jpg';
import welcomeImage from '../../images/welcome.jpg';
import ourStoryImage from '../../images/our-story.jpg';
import ourMissionImage from '../../images/our-mission.jpg';
import logo from '../../images/logo.jpg';

const Home = () => {
  const heroImages = [
    { url: slideshow1, title: "Farm to Table Spices" },
    { url: slideshow2, title: "Premium Quality Turmeric" },
    { url: slideshow3, title: "Exotic Saffron Collection" },
    { url: slideshow4, title: "Organic Spice Selection" },
    { url: slideshow5, title: "Authentic Flavors of Nature" }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <img src={logo} alt="Ocelot Foods Logo" className="h-16 w-auto mx-auto" />
      </div>
      {/* Hero Section with Slideshow */}
      <section className="relative h-[90vh] min-h-[600px] max-h-[900px]">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={image.url} alt={image.title} className="absolute inset-0 w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-black bg-opacity-50" />
            </div>
          ))}
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">{heroImages[currentImageIndex].title}</h1>
            <p className="text-xl mb-8">Experience the authentic flavors of nature with our premium spices and food products</p>
            <Link to="/products" className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section with Animation */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center py-12 bg-white">
        <motion.h2 className="text-4xl font-bold text-gray-800 mb-8" animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          Welcome to Ocelot Foods
        </motion.h2>
        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} src={welcomeImage} alt="Welcome" className="rounded-lg shadow-xl mb-8 max-w-4xl h-[400px] object-cover object-center mx-auto" />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-lg text-gray-600 mb-8 text-center">
          There's much to see here. So, take your time, look around, and learn all there is to know about us. We hope you enjoy our site and make a purchase.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          <Link to="/products" className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-lg">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Shop All
          </Link>
        </motion.div>
      </motion.div>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} src={ourStoryImage} alt="Our Story" className="rounded-lg shadow-xl max-w-md h-[500px] object-cover object-center" />
          <div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-8">
              Our Story
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ocelot foods originated from West Africa Ghana in 2008, it started as a retailer and distributor of Grains (Maize, Millet, Wheat and Rice).
              The company sees itself to become Africa's largest grain and cereal distributors and retailers, responsible for adding value to the lives of farmers and the community they serve and contributing to the ethical success of those farmers and other organizations.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <Link to="/our-story" className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-lg">
                Read More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} src={ourMissionImage} alt="Our Mission" className="rounded-lg shadow-xl max-w-md h-[500px] object-cover object-center" />
          <div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-8">
              Our Mission
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-2xl text-gray-700 mb-8 leading-relaxed italic">
              Creating a better healthy life through food to nourish people and the Planet flavors of our culinary heritage.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Grain of Selim Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} src={grainOfSelimImage} alt="Grain of Selim spice" className="rounded-lg shadow-xl max-w-md h-[500px] object-cover" />
          <div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-8">
              Grain of Selim
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg text-gray-600 mb-8 leading-relaxed">
              A stable in our grandmothers' kitchens and all over the world for centuries, cloves add a musky delicious flavor to everything from marinades, it is used for soups, stews tea, marinades, roasts, drinks, jerky seasoning, seasoning meat and for herbal tea which has a lot of benefits...
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <Link to="/grain-of-selim" className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-lg">
                Read More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { image: grain4, title: "Organic Turmeric", description: "Premium ground turmeric with high curcumin content" },
              { image: cloves, title: "Saffron Threads", description: "Hand-picked premium quality saffron" },
              { image: ginger, title: "Black Peppercorns", description: "Organic black peppercorns with intense aroma" }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link to="/products" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
    </div>
  );
};

export default Home;
