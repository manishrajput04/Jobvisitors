import { FaTelegramPlane, FaYoutube, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-orange-200 to-orange-200 text-gray-800 pt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">

        {/* Left Section */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="text-3xl">💻</div>
            <h1 className="text-2xl font-bold">JOBVISITORS</h1>
          </div>
          <p className="text-sm mt-2">Find Your Perfect Job or Internship Today!</p>
        </div>

        {/* Center Links */}
        <div className="flex flex-col md:flex-row gap-10">
          <div>
            <h3 className="font-bold text-orange-500 mb-2">Jobvisitors</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-3 text-2xl">
          <a href="https://telegram.me/jobvisitors" className="transition-transform transform hover:scale-125 hover:-translate-y-1 duration-300"><FaTelegramPlane /></a>
          <a href="https://yt.openinapp.co/x7467" className="transition-transform transform hover:scale-125 hover:-translate-y-1 duration-300"><FaYoutube /></a>
          <a href="https://www.linkedin.com/in/job-visitors-591061351" className="transition-transform transform hover:scale-125 hover:-translate-y-1 duration-300"><FaLinkedin /></a>
          <a href="https://www.instagram.com/jobvisitors" className="transition-transform transform hover:scale-125 hover:-translate-y-1 duration-300"><FaInstagram /></a>
          <a href="https://whatsapp.com/channel/0029VanAsCCDTkK1dMON290y" className="transition-transform transform hover:scale-125 hover:-translate-y-1 duration-300"><FaWhatsapp /></a>

          <div className="flex items-center gap-2 text-sm">
            <FiMail />
            <span>contact@jobvisitors.com</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 bg-orange-600 text-center py-3 text-sm font-medium">
        Copyright © 2025 Jobvisitors - All Rights Reserved
      </div>
    </footer>
  );
}
