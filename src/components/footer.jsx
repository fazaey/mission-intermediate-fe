import { useState } from 'react';
import Logo from '../assets/logo-videobelajar.png';

const FooterMenu = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col border-b border-gray-100 md:border-none py-4 md:py-0">

      <div 
        className="flex justify-between items-center cursor-pointer md:cursor-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-bold text-gray-900 font-poppins">{title}</h4>

        <svg 
          className={`w-5 h-5 text-gray-500 md:hidden transition-transform duration-300 ${
            isOpen ? 'rotate-90' : 'rotate-0'
          }`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >

          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </div>

      <ul className={`flex-col gap-3 text-sm text-gray-500 mt-4 md:mt-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="hover:text-orange-500 transition-colors">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default function Footer() {

  const kategoriLinks = ["Digital & Teknologi", "Pemasaran", "Manajemen Bisnis", "Pengembangan Diri", "Desain"];
  const perusahaanLinks = ["Tentang Kami", "FAQ", "Kebijakan Privasi", "Ketentuan Layanan", "Bantuan"];
  const komunitasLinks = ["Tips Sukses", "Blog"];

  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-16 pb-8 px-6 md:px-10 font-sans">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 mb-12">

          <div className="w-full lg:w-1/3 flex flex-col gap-4 lg:ml-12">
            <img src={Logo} alt="Logo Videobelajar" className="h-8 w-auto self-start" />
            <p className="text-gray-900 font-bold text-lg font-poppins mt-2">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mt-1">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang<br />
              +62-877-7123-1234
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col md:grid md:grid-cols-3 gap-0 md:gap-8 lg:gap-16">
            
            <FooterMenu title="Kategori" links={kategoriLinks} />
            <FooterMenu title="Perusahaan" links={perusahaanLinks} />
            <FooterMenu title="Komunitas" links={komunitasLinks} />

          </div>

        </div>

        <hr className="border-gray-200 mb-8 lg:ml-12" />

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 lg:ml-12">
          <p className="text-gray-500 text-sm text-center md:text-left">
            ©2023 Videobelajar. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-pointer">
              <img src="/images/linkedin-icon.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-pointer">
              <img src="/images/facebook-icon.png" alt="Facebook" className="w-5 h-5 object-contain" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-pointer">
              <img src="/images/instagram-icon.png" alt="Instagram" className="w-5 h-5 object-contain" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-pointer">
              <img src="/images/twitter-icon.png" alt="Twitter" className="w-5 h-5 object-contain" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}