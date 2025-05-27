import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const GingerPowder = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link 
          to="/"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        <article>
          <h1 className="text-4xl font-bold mb-8">Ginger Powder</h1>
          <img
            src="https://images.unsplash.com/photo-1615485500704-8e990f9900f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt="Ginger Powder"
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Powdered Organic Dried Ginger roots.
            </p>

            <p className="text-lg leading-relaxed">
              Ocelot Dried Powered Ginger has been used for centuries and is a stable in many kitchen and hand down recipes. Ginger adds a sweet and spicey flavor to everything from marinades, soups, cookies, stews and herbal tea.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>It is sourced from the finest organic farms from Ghana</li>
                <li>Sun dried and free from artificial color and flavor</li>
                <li>Aromatic and flavorful</li>
                <li>Deliciously Spicey</li>
                <li>Easy to handle bottles for refilling spice jar</li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Organic dried Crushed/flakes Red pepper/chilly</h2>
              <p className="text-lg leading-relaxed mb-4">
                Ocelot Foods Organic Abrol red pepper is an all purpose stand in for any chili pepper.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Grown in the beautiful fields of Ghana to ensure freshness and authenticity. Dr willy chilly adds deep flavor with medium to high amount of heat to food.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Dr wily is completely natural, no additives, no chemical added.
              </p>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Features</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Spice up your Dish with your favorite dish with a kickoff heat and flavor that is sure to satisfy any craving</li>
                  <li>Crushed red pepper works in any recipe that calls for fiery chili peppers</li>
                  <li>Easy to handle bottles for refilling spice jar</li>
                  <li>Free from artificial color, flavor</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default GingerPowder;