import Logo from '../assets/logo-videobelajar.png';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-16 pb-8 px-6 md:px-10 font-sans">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">

        <div className="w-full lg:w-1/3 flex flex-col gap-4 lg:ml-8">
            <img src={Logo} alt="Logo Videobelajar" className="h-8 w-auto self-start" />
            <p className="text-gray-900 font-bold text-lg font-poppins mt-2">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mt-1">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang<br />
              +62-877-7123-1234
            </p>
        </div>

          <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">

            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-gray-900 font-poppins">Kategori</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Digital & Teknologi</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Pemasaran</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Manajemen Bisnis</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Pengembangan Diri</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Desain</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-gray-900 font-poppins">Perusahaan</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Ketentuan Layanan</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Bantuan</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-gray-900 font-poppins">Komunitas</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Tips Sukses</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
              </ul>
            </div>

          </div>

        </div>

        <hr className="border-gray-200 mb-8 lg:ml-8" />
        
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 lg:ml-8">
          <p className="text-gray-500 text-sm text-center md:text-left">
            ©2023 Gerobak Sayur. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-pointer">
              <img src="/images/linkedin-icon.png" alt="LingkedIn" className="w-5 h-5 object-contain"/>
            </a>

            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-pointer">
              <img src="/images/facebook-icon.png" alt="Facebook" className="w-5 h-5 object-contain"/>
            </a>

            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-pointer">
              <img src="/images/instagram-icon.png" alt="Instagram" className="w-5 h-5 object-contain"/>
            </a>

            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-pointer">
              <img src="/images/twitter-icon.png" alt="Twitter" className="w-5 h-5 object-contain"/>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}