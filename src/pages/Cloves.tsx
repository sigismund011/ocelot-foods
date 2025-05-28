import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const clovesImage = '/images/cloves.jpg';

const Cloves = () => {
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
          <h1 className="text-4xl font-bold mb-8">Cloves</h1>
          <img
            src={clovesImage}
            alt="Cloves"
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Ocelot Cloves have a Unique Natural deep flavored spice, Cloves are dried flower buds of the Syzygium aromaticum tree.
            </p>

            <p className="text-lg leading-relaxed">
              Cloves have a warm peppery flavor. A stable in my grandmother's kitchens and all over the world for centuries, cloves add a spicey flavor to everything from marinades meat or fish, rubs, soups, stews, drinks and jerky seasoning, and for herbal tea which has a lot of benefits.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Aromatic and flavorful</li>
                <li>Freshly imported from Ghana</li>
                <li>Deliciously Spicey</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Cloves;
