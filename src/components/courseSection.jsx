import { useState } from 'react';
import CourseCard from './CourseCard';

export default function CourseSection() {
  const [activeTab, setActiveTab] = useState('Semua Kelas');

  const categories = [
    'Semua Kelas', 
    'Pemasaran', 
    'Desain', 
    'Pengembangan Diri', 
    'Bisnis'
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-10 my-8">
 
       <div className="flex flex-col gap-2 mb-6">
        <h2 className="text-xl md:text-2xl font-bold font-poppins text-gray-900">
          Koleksi Video Pembelajaran Unggulan
        </h2>
        <p className="text-sm md:text-base text-gray-500">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>

      <div className="w-full overflow-x-auto mb-8">
        <div className="flex gap-6 md:gap-8 border-b border-gray-200 whitespace-nowrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`pb-3 text-sm md:text-base font-medium transition-all relative cursor-pointer ${
                activeTab === category
                  ? 'text-orange-600 font-semibold'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {category}

              {activeTab === category && (
                <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-orange-600"></div>
              )}
            </button>
          ))}
        </div>
      </div>

<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <CourseCard 
          title="Big 4 Auditor Financial Analyst"
          description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik"
          tutorName="Jenna Ortega"
          tutorRole="Senior Marketer di Gojek"
          price="Rp 300K"
          rating="3.5"
          reviews="86"
          imageUrl="/images/course1-thumbnail.jpg"
          avatarUrl="/images/mentor1-avatar.png"
        />

        <CourseCard 
          title="Big 4 Auditor Financial Analyst"
          description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik"
          tutorName="Jenna Ortega"
          tutorRole="Senior Marketer di Gojek"
          price="Rp 300K"
          rating="3.5"
          reviews="86"
          imageUrl="/images/course2-thumbnail.jpg"
          avatarUrl="/images/mentor2-avatar.png"
        />
        
        <CourseCard 
          title="Big 4 Auditor Financial Analyst"
          description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik"
          tutorName="Jenna Ortega"
          tutorRole="Senior Marketer di Gojek"
          price="Rp 300K"
          rating="3.5"
          reviews="86"
          imageUrl="/images/course3-thumbnail.jpg"
          avatarUrl="/images/mentor3-avatar.png"
        />
        
        <CourseCard 
          title="Big 4 Auditor Financial Analyst"
          description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik"
          tutorName="Jenna Ortega"
          tutorRole="Senior Marketer di Gojek"
          price="Rp 300K"
          rating="3.5"
          reviews="86"
          imageUrl="/images/course4-thumbnail.jpg"
          avatarUrl="/images/mentor4-avatar.png"
        />
        
        <CourseCard 
          title="Big 4 Auditor Financial Analyst"
          description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik"
          tutorName="Jenna Ortega"
          tutorRole="Senior Marketer di Gojek"
          price="Rp 300K"
          rating="3.5"
          reviews="86"
          imageUrl="/images/course5-thumbnail.jpg"
          avatarUrl="/images/mentor5-avatar.png"
        />
        
        <CourseCard 
          title="Big 4 Auditor Financial Analyst"
          description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik"
          tutorName="Jenna Ortega"
          tutorRole="Senior Marketer di Gojek"
          price="Rp 300K"
          rating="3.5"
          reviews="86"
          imageUrl="/images/course6-thumbnail.jpg"
          avatarUrl="/images/mentor6-avatar.png"
        />

      </div>

    </section>
  );
}