
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how Nyuro Strategies is revolutionizing financial trading through innovative AI solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  At Nyuro Strategies, our mission is to democratize access to sophisticated trading algorithms that were once available only to large financial institutions. We believe that by harnessing the power of artificial intelligence, we can level the playing field and provide traders of all sizes with the tools they need to succeed in today's complex markets.
                </p>
                <p className="text-gray-600">
                  We are committed to innovation, transparency, and excellence in everything we do. Our team of financial experts and AI specialists work tirelessly to develop cutting-edge solutions that deliver measurable results for our clients.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-r from-primary/10 to-blue-500/10 p-1 rounded-2xl"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                  <ul className="space-y-3">
                    {[
                      "Innovation: Constantly pushing the boundaries of what's possible",
                      "Integrity: Maintaining the highest ethical standards",
                      "Excellence: Delivering exceptional results to our clients",
                      "Collaboration: Working together to achieve shared goals",
                      "Adaptability: Embracing change in a dynamic market"
                    ].map((value, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the experts behind Nyuro Strategies' innovative AI trading solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Morgan",
                  title: "Founder & CEO",
                  bio: "Former Wall Street quantitative analyst with 15+ years of experience in algorithmic trading."
                },
                {
                  name: "Sarah Chen",
                  title: "Chief AI Officer",
                  bio: "PhD in Machine Learning with expertise in developing predictive models for financial markets."
                },
                {
                  name: "Michael Rodriguez",
                  title: "Head of Trading Strategy",
                  bio: "Veteran trader with a track record of developing successful strategies across multiple asset classes."
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
