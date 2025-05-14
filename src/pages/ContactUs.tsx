import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
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
    <div className="bg-[#121212] w-full min-h-screen pt-24 lg:pt-24">
      <motion.h3 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center text-white sm:text-5xl md:text-6xl font-bold mb-12"
      >
        Contact <span className="text-[#FF0000]">Us</span>
      </motion.h3>
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto min-h-[600px] flex flex-col lg:flex-row gap-10 bg-gradient-to-r from-[#2C2C2C] to-[#FF0000] rounded-3xl overflow-hidden"
      >
        {/*Contact Info Section*/}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-start-1 lg:col-end-3 h-full pb-24 lg:w-[40%] bg-[#EBE1E1] flex flex-col items-center justify-center border-r-black rounded-3xl p-5 md:w-full sm:w-full md:justify-center"
        >
          <motion.img 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            src="src/assets/contact/contact.png" 
            alt="contact" 
          />
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl font-bold"
          >
            CONTACT US
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center text-black mt-3"
          >
            Welcome to our fitness hub! Whether you're a beginner or a pro, our
            site helps you train every muscle group effectively. Browse guided
            exercises, learn proper form, and start reaching your fitness goals
            today!
          </motion.p>

          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-row w-full self-start gap-3 mt-20 lg:ml-5"
          >
            <img
              src="src/assets/contact/whatsicon.png"
              alt=""
              className="w-6 h-6"
            />
            <p className="font-semibold">+20 111 222 3333</p>
          </motion.div>

          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-row w-full self-start gap-3 mt-3 lg:ml-5 text-wrap"
          >
            <img
              src="src/assets/contact/callicon.png"
              alt=""
              className="w-6 h-6"
            />
            <p className="font-semibold">info.fitnessexercise@gmail.com</p>
          </motion.div>

          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-row w-full self-start gap-3 mt-3 lg:ml-5"
          >
            <img
              src="src/assets/contact/locationicon.png"
              alt=""
              className="w-6 h-6"
            />
            <p className="font-semibold">Alexandria, Egypt</p>
          </motion.div>
        </motion.div>

        {/*Contact Form Section*/}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-4 lg:col-end-7 w-full rounded-3xl pb-10"
        >
          <form>
            <div className="flex gap-20 mb-4 px-10 mt-8">
              {/* First Name */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-1/2"
              >
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="FIRST NAME"
                  className="w-full px-5 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder:font-bold"
                />
              </motion.div>

              {/* Last Name */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="w-1/2"
              >
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="LAST NAME"
                  className="w-full px-5 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder:font-bold"
                />
              </motion.div>
            </div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full px-10 mt-8"
            >
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                placeholder="PHONE NUMBER"
                className="w-full px-5 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder:font-bold"
              />
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="w-full px-10 mt-8"
            >
              <input
                type="text"
                id="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                className="w-full px-5 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder:font-bold"
              />
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="w-full px-10 mt-8"
            >
              <textarea
                id="message"
                name="message"
                rows={8}
                placeholder="MESSAGE"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder:font-bold"
              ></textarea>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex justify-end px-10 mt-5 sm:mb-5 md:mb-5"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-[#121212] text-white font-semibold py-2 rounded-2xl hover:bg-gray-800 transition duration-500 px-16"
              >
                SUBMIT
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="container mx-auto w-full mt-10 rounded-xl border-4 border-red-800 overflow-hidden"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.7769743560243!2d29.953209025316617!3d31.226907761583934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4eb818bb859%3A0xe4b28ff2fa922b23!2sSkills%20Dynamix!5e0!3m2!1sar!2seg!4v1745428493767!5m2!1sar!2seg"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default ContactUs;
