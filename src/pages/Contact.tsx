
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
import { Mail, Phone, MapPin, Check, Loader2 } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset submission status after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

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
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions about our AI trading solutions? Our team is here to help.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <Check className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-green-800 mb-2">Message Sent!</h3>
                      <p className="text-green-700">
                        Thank you for contacting us. We'll get back to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                            Subject *
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          >
                            <option value="">Select a subject</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Technical Support">Technical Support</option>
                            <option value="Sales">Sales</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>
                      
                      <CustomButton
                        type="submit"
                        variant="gradient"
                        size="lg"
                        className="w-full"
                        isLoading={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </CustomButton>
                    </form>
                  )}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="h-full">
                  <div className="bg-primary text-white rounded-xl shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    <ul className="space-y-6">
                      <li className="flex">
                        <MapPin className="h-6 w-6 mr-4 flex-shrink-0" />
                        <div>
                          <p className="font-medium mb-1">Office Location</p>
                          <p className="text-white/80">123 Finance Street, New York, NY 10001, United States</p>
                        </div>
                      </li>
                      <li className="flex">
                        <Phone className="h-6 w-6 mr-4 flex-shrink-0" />
                        <div>
                          <p className="font-medium mb-1">Phone Number</p>
                          <p className="text-white/80">+1 (555) 123-4567</p>
                        </div>
                      </li>
                      <li className="flex">
                        <Mail className="h-6 w-6 mr-4 flex-shrink-0" />
                        <div>
                          <p className="font-medium mb-1">Email Address</p>
                          <p className="text-white/80">info@nyurostrategies.com</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-100 rounded-xl p-8">
                    <h2 className="text-xl font-bold mb-4">Business Hours</h2>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday:</span>
                        <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Saturday:</span>
                        <span className="font-medium">10:00 AM - 2:00 PM EST</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
