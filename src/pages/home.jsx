import { useState } from 'react';
import Navbar from '../components/navbar';
import HeroSection from '../components/heroSection';
import CourseSection from '../components/courseSection';
import Newsletter from '../components/newsletter';
import Footer from '../components/footer';

export default function Home() {
  const [isAdminMode, setIsAdminMode] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFDF3] font-sans flex flex-col">
      <Navbar
        showAuth={true} 
        isAdminMode={isAdminMode} 
        setIsAdminMode={setIsAdminMode}
      />
      
      <main className="grow p-4 flex flex-col items-center">
        <HeroSection />
        <CourseSection isAdminMode={isAdminMode} />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}