
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
import { Calendar, Clock, ChevronRight, Search } from 'lucide-react';

// Dummy blog data
const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing Financial Trading",
    excerpt: "Discover the ways artificial intelligence is transforming the landscape of financial markets and creating new opportunities for traders.",
    category: "Technology",
    date: "Jun 12, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1642543348425-4a300d50c26c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80"
  },
  {
    id: 2,
    title: "Predictive Analytics: The Future of Market Forecasting",
    excerpt: "Learn how machine learning models are being used to predict market trends with unprecedented accuracy and what this means for investors.",
    category: "Analysis",
    date: "May 28, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80"
  },
  {
    id: 3,
    title: "Risk Management Strategies for Algorithmic Trading",
    excerpt: "Explore effective risk management approaches when implementing algorithmic trading systems in volatile market conditions.",
    category: "Strategy",
    date: "May 15, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80"
  },
  {
    id: 4,
    title: "The Ethics of AI in Financial Markets",
    excerpt: "A deep dive into the ethical considerations and regulatory challenges surrounding the use of AI in trading and investment.",
    category: "Opinion",
    date: "Apr 30, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80"
  },
];

const categories = ["All", "Technology", "Analysis", "Strategy", "Opinion"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium mb-4">
                Our Blog
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Insights & Analysis
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest trends, strategies, and insights in AI-driven financial trading.
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-6 mb-10">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
                  >
                    <div 
                      className="h-60 bg-gray-200 relative overflow-hidden"
                      style={{
                        backgroundImage: `url(${post.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-primary font-medium hover:underline"
                      >
                        Read More <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No articles found matching your search criteria.</p>
                <CustomButton
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                >
                  Reset Filters
                </CustomButton>
              </div>
            )}

            {filteredPosts.length > 0 && (
              <div className="mt-16 text-center">
                <CustomButton variant="outline">
                  Load More Articles
                </CustomButton>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
