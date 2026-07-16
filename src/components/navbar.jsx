import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom'; 
import Logo from '../assets/logo-videobelajar.png';
import Button from './button';

export default function Navbar({ showAuth, isAdminMode, setIsAdminMode }) {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomePage = location.pathname === '/';

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-4 md:px-10 flex items-center justify-between relative bg-white z-50">

        <Link to="/">
          <img src={Logo} alt="Logo Videobelajar" className="h-8 cursor-pointer" />
        </Link>

        {isHomePage && setIsAdminMode && (
          <button 
            onClick={() => setIsAdminMode(!isAdminMode)}
            className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-colors cursor-pointer ${
              isAdminMode 
                ? 'bg-red-100 text-red-600 border border-red-200' 
                : 'bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200'
            }`}
          >
            {isAdminMode ? '🔴 Matikan Admin' : '⚙️ Admin Mode'}
          </button>
        )}

        {showAuth && (
          <div className="hidden lg:flex items-center gap-8">
            <span className="text-sm font-medium text-gray-700 cursor-pointer hover:text-green-500 transition-colors">
              Kategori
            </span>
            <div className="flex items-center gap-3">
              <div className="w-24">
                <Button variant="primary" onClick={() => navigate('/login')}>
                  Login
                </Button>
              </div>
              <div className="w-24">
                <Button variant="secondary" onClick={() => navigate('/register')}>
                  Register
                </Button>
              </div>
            </div>
          </div>
        )}

        {showAuth && (
          <button 
            className="lg:hidden text-gray-600 focus:outline-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        )}
      </div>

      {showAuth && isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-4 shadow-xl z-40 transition-all">
          <Link to="/" className="text-green-600 font-semibold py-2">Beranda</Link>
          <span className="text-gray-500 font-medium py-2 border-t border-gray-50">Kategori</span>
          
          <div className="flex flex-col gap-3 mt-2">
            <Button variant="primary" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button variant="outline" onClick={() => navigate('/register')}>
              Register
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}