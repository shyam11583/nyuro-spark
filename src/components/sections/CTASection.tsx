
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CustomButton } from '@/components/ui/custom-button';

const CTASection = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-600 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZsMyAxLTMtMXoiLz48cGF0aCBkPSJNMzAgMzBoLS0uNSAxeiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-3xl mx-auto">
            Ready to Transform Your Trading Strategy with AI?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join the leading financial institutions and traders who have already elevated their performance with Nyuro Strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton
              variant="default"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => navigate('/services')}
            >
              Explore Our Services
            </CustomButton>
            <CustomButton
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate('/contact')}
            >
              Schedule a Demo
            </CustomButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
