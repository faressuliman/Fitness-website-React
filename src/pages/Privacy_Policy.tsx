import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Section from "../UI/Section";

const PrivacyPolicy = () => {
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
            Privacy <span className="text-[#FF0000]">Policy</span>
          </h1>

          <div className="space-y-8">
            <section 
              data-aos="fade-up"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">1. Information We Collect</h2>
              <p className="text-gray-300">
                We collect information that you provide directly to us, including when you create an account, 
                use our services, or communicate with us. This may include:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Fitness and health-related information</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section 
              data-aos="fade-up"
              data-aos-delay="100"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">2. How We Use Your Information</h2>
              <p className="text-gray-300">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Process your transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Improve our services and develop new features</li>
              </ul>
            </section>

            <section 
              data-aos="fade-up"
              data-aos-delay="200"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">3. Information Sharing</h2>
              <p className="text-gray-300">
                We do not sell or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Professional trainers and health experts</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section 
              data-aos="fade-up"
              data-aos-delay="300"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">4. Data Security</h2>
              <p className="text-gray-300">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section 
              data-aos="fade-up"
              data-aos-delay="400"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">5. Your Rights</h2>
              <p className="text-gray-300">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section 
              data-aos="fade-up"
              data-aos-delay="500"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">6. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-300">
                Email: privacy@flowforma.com<br />
                Phone: (555) 123-4567<br />
                Address: 123 Fitness Street, Los Angeles, CA 90001
              </p>
            </section>

            <section 
              data-aos="fade-up"
              data-aos-delay="600"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">7. Updates to This Policy</h2>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last Updated" date.
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

export default PrivacyPolicy; 