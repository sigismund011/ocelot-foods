import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const GrainOfSelim = () => {
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
          <h1 className="text-4xl font-bold mb-8">Grain of Selim</h1>
          <img
            src="https://images.unsplash.com/photo-1599909092372-3b5dc9675ac4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt="Grain of Selim"
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              A stable in our grandmothers' kitchens and all over the world for centuries, cloves add a musky delicious flavor to everything from marinades, it is used for soups, stews tea, marinades, roasts, drinks, jerky seasoning, seasoning meat and for herbal tea which has a lot of benefits.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Aromatic and flavorful</li>
                <li>Freshly imported from Ghana</li>
                <li>Deliciously Spicey</li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed">
              Grains of Selim are the seeds of a shrubby mostly found in Africa. The seeds have a musky flavor and are used as a spice in a manner similar to black pepper, and as a flavoring. It has many names in native languages of Africa, It is known as Senegal pepper, Ethiopian pepper, Moor pepper and Negro pepper the most common of which is 'Etso' in the Ewe language of Ghana and Togo. The Akan of Ghana call it hwentia or hwentea, It is sometimes referred to as African pepper or Guinea pepper.
            </p>

            <p className="text-lg leading-relaxed">
              As a spice, the whole fruit (pod) is used, as the hull of the fruit lends an aromatic flavor to dishes. The pods are crushed or added whole to soups or stews, then removed before serving the food. Paste from smoked and ground pods can be used as a spice rub for fish or steak.
            </p>

            <p className="text-lg leading-relaxed">
              At Ocelot Foods, we are inspired by the vibrant and diverse food cultures from around the world. We believe that food is a universal language that brings people together and creates connections. That's why we offer a wide range of international dishes that are made with authentic flavors and ingredients. From Thai curries to Mexican street tacos, we have something for everyone to enjoy.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default GrainOfSelim;