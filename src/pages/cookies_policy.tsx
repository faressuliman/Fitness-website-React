import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Section from "../UI/Section";

const CookiesPolicy = () => {
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
            Cookies <span className="text-[#FF0000]">Policy</span>
          </h1>

          <div className="space-y-8">
            <section 
              data-aos="fade-up"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">1. What Are Cookies</h2>
              <p className="text-gray-300">
                Cookies are small text files that are placed on your device when you visit our website. They help us 
                provide you with a better experience and allow certain features to work properly.
              </p>
            </section>

            <section 
              data-aos="fade-up"
              data-aos-delay="100"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">2. How We Use Cookies</h2>
              <p className="text-gray-300">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Essential cookies for website functionality</li>
                <li>Authentication and security</li>
                <li>Remembering your preferences</li>
                <li>Analyzing website usage</li>
                <li>Improving our services</li>
              </ul>
            </section>

            <section 
              data-aos="fade-up"
              data-aos-delay="200"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">3. Types of Cookies We Use</h2>
              <p className="text-gray-300">
                Our website uses different types of cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Session cookies (temporary)</li>
                <li>Persistent cookies (long-term)</li>
                <li>First-party cookies (our domain)</li>
                <li>Third-party cookies (analytics, etc.)</li>
              </ul>
            </section>

            <section 
              data-aos="fade-up"
              data-aos-delay="300"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">4. Managing Cookies</h2>
              <p className="text-gray-300">
                You can control and manage cookies in your browser settings. However, please note that disabling 
                certain cookies may affect the functionality of our website.
              </p>
            </section>

            <section 
              data-aos="fade-up"
              data-aos-delay="400"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">5. Third-Party Cookies</h2>
              <p className="text-gray-300">
                Some cookies are placed by third-party services that appear on our pages. We use these to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Analyze website traffic</li>
                <li>Provide social media features</li>
                <li>Enable certain functionality</li>
              </ul>
            </section>

            <section 
              data-aos="fade-up"
              data-aos-delay="500"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">6. Updates to This Policy</h2>
              <p className="text-gray-300">
                We may update this Cookies Policy from time to time. Any changes will be posted on this page with 
                an updated revision date.
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

export default CookiesPolicy; 