import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Section from "../UI/Section";

const TermsConditions = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      startEvent: 'DOMContentLoaded',
      disable: 'mobile',
      offset: 50,
      delay: 0,
      easing: 'ease-out'
    });
  }, []);

  return (
    <div className="bg-[#121212] min-h-screen pt-16">
      <Section className="text-white py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h1 
            data-aos="fade-down"
            className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-12"
          >
            Terms & <span className="text-[#FF0000]">Conditions</span>
          </h1>

          <div className="space-y-8">
            <section 
              data-aos="fade-up"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">1. Acceptance of Terms</h2>
              <p className="text-gray-300">
                By accessing and using FlowForma's services, you agree to be bound by these Terms and Conditions. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section 
              data-aos="fade-up"
              data-aos-delay="100"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">2. User Accounts</h2>
              <p className="text-gray-300">
                You are responsible for maintaining the confidentiality of your account information and for all 
                activities that occur under your account. You must notify us immediately of any unauthorized use 
                of your account.
              </p>
            </section>

            <section 
              data-aos="fade-up"
              data-aos-delay="200"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">3. Subscription and Payments</h2>
              <p className="text-gray-300">
                Subscription fees are billed in advance and are non-refundable. We reserve the right to modify 
                our pricing with notice. You can cancel your subscription at any time, but no refunds will be 
                provided for partial subscription periods.
              </p>
            </section>

            <section 
              data-aos="fade-up"
              data-aos-delay="300"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">4. User Conduct</h2>
              <p className="text-gray-300">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Use our services for any illegal purpose</li>
                <li>Share your account credentials</li>
                <li>Attempt to access other users' accounts</li>
                <li>Interfere with the proper functioning of our services</li>
              </ul>
            </section>

            <section 
              data-aos="fade-up"
              data-aos-delay="400"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">5. Intellectual Property</h2>
              <p className="text-gray-300">
                All content, features, and functionality of our services are owned by FlowForma and are protected 
                by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section 
              data-aos="fade-up"
              data-aos-delay="500"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">6. Limitation of Liability</h2>
              <p className="text-gray-300">
                FlowForma shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages resulting from your use of or inability to use our services.
              </p>
            </section>

            <section 
              data-aos="fade-up"
              data-aos-delay="600"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">7. Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these terms at any time. We will notify users of any material 
                changes via email or through our website.
              </p>
              <p className="text-gray-300 italic">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default TermsConditions; 