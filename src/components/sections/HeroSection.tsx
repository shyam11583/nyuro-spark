
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center flex flex-col items-center max-w-3xl mx-auto"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-2">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
              AI-Powered Trading Solutions
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Transform Your Trading
            </span>
            <br /> 
            with AI-Driven Strategies
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nyuro Strategies delivers cutting-edge AI solutions that analyze market trends, optimize trading strategies, and maximize your investment potential.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton 
              variant="gradient" 
              size="lg"
              onClick={() => navigate('/services')} 
              className="shadow-md"
            >
              Explore Our Services
            </CustomButton>
            <CustomButton 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </CustomButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
