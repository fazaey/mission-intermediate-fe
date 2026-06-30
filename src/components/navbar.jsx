import Logo from '../assets/logo-videobelajar.png';
import Button from './Button'; 
import { useNavigate, Link } from 'react-router-dom';

export default function Navbar({ showAuth = false }) {
  const navigate = useNavigate();

  return (
    <header className="w-full px-6 py-4 md:px-10 md:py-6 bg-white shadow-sm flex items-center justify-between">

      <Link to="/">
        <img 
          src={Logo} 
          alt="Logo Videobelajar" 
          className="h-8 cursor-pointer" 
        />
      </Link>

      {showAuth && (
        <div className="flex items-center gap-6">
          <span className="text-sm font-medium text-gray-700 hidden sm:block cursor-pointer hover:text-green-500 transition-colors">
            Kategori
          </span>
          <div className="w-24"> 
            <Button variant="primary" onClick={() => navigate('/login')}>
              Login
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}