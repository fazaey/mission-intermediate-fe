import Navbar from '../components/navbar';
import InputField from '../components/inputField';
import PasswordInputField from '../components/passwordInputField';
import Button from '../components/button';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

export default function login() {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDFCF7] flex flex-col">
      <Navbar />
      
      <main className="grow flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-center">Masuk ke Akun</h2>
          <p className="text-sm text-gray-500 text-center mb-8">Yuk, lanjutin belajarmu di videobelajar.</p>
          
          <form className="flex flex-col gap-4">
            <InputField label="E-Mail" type="email" />
            <PasswordInputField label="Kata Sandi" />
            
            <div className="flex justify-end">
              <a href="#" className="text-sm text-gray-500 hover:text-green-600 font-medium">Lupa Password?</a>
            </div>
            
            <div className="flex flex-col gap-3 mt-2">
                <Button variant="primary">Masuk</Button>
                <Button variant="secondary" onClick={() => navigate('/register')}>Daftar</Button>
            </div>

            <div className="flex items-center my-2">
              <hr className="flex-grow border-gray-200" />
              <span className="px-3 text-gray-400 text-sm">atau</span>
              <hr className="flex-grow border-gray-200" />
            </div>

            <Button variant="outline" icon={FcGoogle}>Masuk dengan Google</Button>
          </form>
        </div>
      </main>
    </div>
  );
}