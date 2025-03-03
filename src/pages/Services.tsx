
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CustomButton } from '@/components/ui/custom-button';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Shield, Globe, Zap, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "AI Trading Models",
      description: "Our proprietary AI algorithms analyze market patterns and execute trades with precision timing to maximize returns while minimizing risk.",
      features: [
        "Pattern recognition across multiple timeframes",
        "Sentiment analysis of news and social media",
        "Automated execution with risk parameters",
        "Backtesting against historical data"
      ]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Predictive Analytics",
      description: "Leverage the power of machine learning to predict market movements and optimize your trading strategy for both short and long-term investments.",
      features: [
        "Market trend forecasting",
        "Volatility prediction",
        "Correlation analysis",
        "Anomaly detection"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Risk Management",
      description: "Sophisticated risk assessment tools that help protect your investments from market downturns and unexpected volatility.",
      features: [
        "Dynamic stop-loss mechanisms",
        "Portfolio diversification analysis",
        "Stress testing scenarios",
        "Risk-adjusted performance metrics"
      ]
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Market Intelligence",
      description: "Stay ahead of market movements with real-time data analysis and actionable insights delivered directly to your dashboard.",
      features: [
        "Real-time market data integration",
        "Cross-asset correlation analysis",
        "Economic calendar impact assessment",
        "Insider trading pattern detection"
      ]
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "High-Frequency Trading",
      description: "Ultra-fast execution systems designed to capitalize on microsecond price discrepancies across multiple markets and exchanges.",
      features: [
        "Low-latency execution infrastructure",
        "Statistical arbitrage algorithms",
        "Market making strategies",
        "Co-location with major exchanges"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Customized Solutions",
      description: "Tailored AI strategies designed specifically for your investment goals, risk tolerance, and preferred asset classes.",
      features: [
        "Personalized strategy development",
        "Custom dashboard and reporting",
        "Integration with existing systems",
        "Dedicated strategy consultant"
      ]
    }
  ];

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
              className="text-center mb-20"
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium mb-4">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI-Powered Financial Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our suite of advanced AI trading technologies designed to transform your investment strategy and maximize returns.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="p-8">
                    <div className="bg-primary/5 p-3 rounded-lg inline-block mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2"></span>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <CustomButton
                      variant="outline"
                      className="w-full"
                      onClick={() => navigate('/contact')}
                    >
                      Learn More
                    </CustomButton>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                Need a more specialized solution for your unique trading requirements?
              </p>
              <CustomButton
                variant="gradient"
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Contact Us for Custom Solutions
              </CustomButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
