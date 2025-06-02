import React from 'react';
import { Link } from 'react-router-dom';

export const blogPosts = [
  {
    id: 'spice-blending',
    title: "The Art of Spice Blending",
    image: "/images/blog-1.jpg",
    excerpt: "To assist Farmers and organizations we serve in achieving their objectives and goals...",
    content: "To assist Farmers and organizations we serve in achieving their objectives and goals. Ocelot Foods accepts professional responsibility for its individual decisions and actions. The company assists Farmers and the organization they serve in achieving their objectives and goals. Ocelot Foods sought to assist the underdeveloped market for the cereals and grains to connect both with the growers and the commercial consumers who either didn't have the capabilities to locate each other or found the investing in correcting the inefficiencies of the market and ensure that everyone has the opportunity to develop their skills and new competencies. Ocelot foods tend to assist Farmers and organization they serve in achieving their objectives and goals by Contributing to the body of knowledge, the evolution of the profession and the growth of individuals through teaching, research and dissemination of knowledge Drive towards agricultural development. The availability of public-private partnerships towards agricultural development and the availability of improved technology for quality testing purposes."
  },
  {
    id: 'sustainable-farming',
    title: "Sustainable Farming Practices",
    image: "/images/blog-2.jpg",
    excerpt: "To earn individual respect and increase our credibility with those we serve...",
    content: "To earn individual respect and increase our credibility with those we serve. Respect demonstrates a high regard for oneself, others, and the resources entrusted to them. Those resources may include people, money, reputation, the safety of others, and natural or environmental resources. An environment of respect, trust, confidence, and performance excellence by fostering cooperation. Ocelot Foods working environment is an environment where diverse perspectives, identities, and views are encouraged and valued, people are treated with dignity, respect and compassion to foster a trusting work environment free of harassment, intimidation, and unlawful discrimination and respect the uniqueness and intrinsic worth of every individual."
  },
  {
    id: 'farm-to-kitchen',
    title: "From Farm to Kitchen",
    image: "/images/blog-3.jpg",
    excerpt: "Assure an environment of inclusiveness and a commitment to diversity...",
    content: "Assure an environment of inclusiveness and a commitment to diversity in the organizations we serve. Diversity refers to the composition of a group of people from any number of demographic backgrounds, identities and the collective strength of their experiences, beliefs, values, skills, and perspectives. Ocelot Foods believe in championing diversity and involves the consistent practice of embracing people without any limitation being made due to their race, color, ethnicity, religion, nationality, gender, gender expression, gender identity, sexual orientation, mental or physical abilities, genetic formation, veteran or socioeconomic status, marital status, nationality, age, language or other similar attributes. Regardless of personal interests, support decisions made by our organizations that are both ethical and legal. Ocelot foods include all in pursue of formal academic opportunities, nobody is allowed to take unfair advantage of anyone through manipulation, concealment, abuse of privileged information, or any other unfair practice."
  },
  {
    id: 'compliance',
    title: "Compliance and Regulations",
    image: "/images/blog-4.jpg",
    excerpt: "Compliance with Laws, Rules and Regulations. Obeying the law, both in letter and in spirit...",
    content: "Compliance with Laws, Rules and Regulations. Obeying the law, both in letter and in spirit, is the foundation on which the Company's ethical standards are built. In conducting the business of the Company, all parties shall comply with applicable governmental laws, rules and regulations at all levels of government in the jurisdiction in which the Company does business. Although not all are expected to know the details of these laws, it is important to know enough about the applicable local, state and national laws to determine when to seek advice from supervisors, managers or other appropriate personnel. The document 'Prohibited Business Practices Policy' sets forth the Company's policy on compliance with laws, specifically addressing such topics as prohibited offers or payments, gifts and entertainment, transactions with certain countries and persons, accounting controls, and accurate record-keeping. To avoid activities that are in conflict or may appear to be against any of the rules and regulations of the country."
  }
];

const Blog = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>
        
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-emerald-600 font-medium hover:text-emerald-700"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;