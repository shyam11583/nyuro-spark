
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    number: '01',
    title: 'Data Collection',
    description: 'Our AI systems gather and process vast amounts of market data from multiple sources.',
  },
  {
    number: '02',
    title: 'Pattern Recognition',
    description: 'Advanced algorithms identify trends and patterns invisible to traditional analysis.',
  },
  {
    number: '03',
    title: 'Strategy Development',
    description: 'Custom trading strategies are developed based on your goals and risk tolerance.',
  },
  {
    number: '04',
    title: 'Execution & Optimization',
    description: 'Strategies are executed with precision timing and continuously optimized.',
  },
];

const HowItWorksSection = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our systematic approach ensures optimal results through sophisticated AI-driven analysis and execution.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Number */}
              <div className="text-7xl font-bold text-gray-100 absolute -top-10 left-0 select-none">
                {step.number}
              </div>
              
              {/* Content */}
              <div className="relative z-10 pt-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {/* Connector line (except for the last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 right-0 w-full h-[2px] bg-gray-200 transform translate-x-1/2">
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-primary rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
