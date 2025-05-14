import { Link } from "react-router-dom";
import Icon from "./IconContactus/Icon";
// import Icon from "./IconContactus/Icon";

const Footer = () => {
  return (
    <div className="w-full h-auto lg:h-[400px] relative overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source
          src="/src/assets/Footer/ssstik.io_1746356639803.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-10]"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-8 py-10 lg:py-0">
        <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm sm:text-base">
          {/* About Section */}
          <div className="text-center lg:text-left">
            <p className="text-xl font-medium leading-relaxed text-[#ff0000]">
              FlowForma was founded by fitness, health and technology experts
              committed to making fitness and health more fit for your place and
              pace.
            </p>
          </div>

          {/* Main Links */}
          <div className="text-center lg:text-left">
            <h3 className="font-semibold mb-2 text-[#ff0000] text-lg lg:text-3xl">
              Main
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-400 duration-500">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-gray-400 duration-500">
                <Link to="/">Exercise</Link>
              </li>
              <li className="hover:text-gray-400 duration-500">
                <Link to="/aboutus">About</Link>
              </li>
              <li className="hover:text-gray-400 duration-500">
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="text-center lg:text-left">
            <h3 className="font-semibold mb-2 text-[#ff0000] text-lg lg:text-3xl">
              Legal
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-400 duration-500">
                <Link to="/PrivacyPolicy">Privacy Policy</Link>
              </li>
              <li className="hover:text-gray-400 duration-500">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="hover:text-gray-400 duration-500">
                <Link to="/cookies-policy">Cookies Policy</Link>
              </li>
              <li className="hover:text-gray-400 duration-500">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="hover:text-gray-400 duration-500">
                <Link to="/terms-conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <h3 className="font-semibold mb-2 text-[#ff0000] text-lg lg:text-3xl">
              Join a Newsletter
            </h3>
            <Icon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
