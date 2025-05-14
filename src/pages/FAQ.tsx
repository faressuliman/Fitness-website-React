import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  
  {
    question: "What is FlowForma?",
    answer:
      "FlowForma is a comprehensive fitness platform that helps you achieve your fitness goals through personalized workout plans, nutrition guidance, and progress tracking. We combine expert knowledge with technology to make fitness accessible to everyone.",
  },
  {
    question: "How do I get started?",
    answer: "Simply sign up, set your goals, and follow your personalized plan.",
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, our mobile app is available on both iOS and Android.",
  },
  {
    question: "How much does it cost?",
    answer: "We offer both free and premium plans depending on your needs.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription anytime from your account settings.",
  },
  {
    question: "How do I track my progress?",
    answer: "Progress tracking is built into the app with charts and goal tracking features.",
  },
  {
    question: "Are the workouts suitable for beginners?",
    answer: "Absolutely! We have beginner-friendly workout programs tailored to your level.",
  },
  {
    question: "How often should I update my workout plan?",
    answer: "We recommend updating your plan every 4–6 weeks or as your goals evolve.",
  },
];

const FAQ: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="bg-zinc-900 mt-10 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        <h2 data-aos="fade-down" className="text-5xl font-bold text-center mb-16 pt-5 text-white">
          Frequently Asked <span className="text-red-600">Questions</span>
        </h2>

        <div data-aos="fade-up" className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              key={index}
              className="bg-black rounded-md shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div data-aos="fade-up" data-aos-delay="300" className="font-semibold text-white">
                {faq.question}
              </div>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-2 text-sm text-gray-400"
                  >
                    <div data-aos="fade-left" data-aos-easing="ease">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div data-aos="fade-up" className="flex flex-col text-center gap-[20px] mt-20 p-5 rounded-md bg-black shadow-md">
          <h3 className="text-3xl font-semibold text-white">
            Still Have <span className="text-red-600">Questions?</span>
          </h3>
          <p className="text-gray-400">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => navigate('/contactus')}
              className="w-36 focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
