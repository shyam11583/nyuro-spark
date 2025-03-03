
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, BarChart3, Layers } from 'lucide-react';

const features = [
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: 'AI Trading Models',
    description: 'Our proprietary AI algorithms analyze market patterns and execute trades with precision timing.',
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    title: 'Predictive Analytics',
    description: 'Leverage the power of machine learning to predict market movements and optimize your trading strategy.',
  },
  {
    icon: <Layers className="w-10 h-10 text-primary" />,
    title: 'Customized Solutions',
    description: 'Tailored AI strategies designed specifically for your investment goals and risk profile.',
  },
];

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium mb-4">
            Our Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Trading Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our AI-powered technologies can transform your trading strategies and investment outcomes.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-primary/5 p-4 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
