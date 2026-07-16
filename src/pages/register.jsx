import Navbar from '../components/navbar';
import InputField from '../components/inputField';
import PhoneInputField from '../components/phoneInputField';
import PasswordInputField from '../components/passwordInputField';
import Button from '../components/button';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDFCF7] flex flex-col font-sans">
      <Navbar />
      
      <main className="grow flex items-center justify-center p-4 my-8">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-center font-poppins mb-2">Pendaftaran Akun</h2>
          <p className="text-sm text-gray-500 text-center mb-8">Yuk, daftarkan akunmu sekarang juga!</p>
          
          <form className="flex flex-col gap-4">
            
            <InputField label="Nama Lengkap" type="text" />
            <InputField label="E-Mail" type="email" />
            
            <PhoneInputField label="No. Hp" />
            
            <PasswordInputField label="Kata Sandi" />
            <PasswordInputField label="Konfirmasi Kata Sandi" />

            <div className="flex flex-col gap-3 mt-2">
                <Button variant="primary">Daftar</Button>
                <Button variant="secondary" onClick={() => navigate('/login')}>Masuk</Button>
            </div>

            <div className="flex items-center my-2">
              <hr className="flex-grow border-gray-200" />
              <span className="px-3 text-gray-400 text-sm">atau</span>
              <hr className="flex-grow border-gray-200" />
            </div>

            <Button variant="outline" icon={FcGoogle}>
              Daftar dengan Google
            </Button>

          </form>
        </div>
      </main>
    </div>
  );
}