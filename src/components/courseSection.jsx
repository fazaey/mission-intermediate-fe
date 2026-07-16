import { useState } from 'react';
import CourseCard from './CourseCard';

export default function CourseSection({ isAdminMode }) {
  const [activeTab, setActiveTab] = useState('Semua Kelas');
  const categories = ['Semua Kelas', 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis'];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null); 
  
  const [newCourse, setNewCourse] = useState({
    title: '', description: '', category: 'Pemasaran', price: '', tutorName: '', tutorRole: '', imageUrl: '', avatarUrl: ''
  });

  const [courses, setCourses] = useState([
    {
      id: 1, 
      title: "Digital Marketing 101: Belajar dari Nol sampai Mahir",
      description: "Kuasai teknik digital marketing modern untuk meningkatkan penjualan bisnismu di era digital.",
      category: "Pemasaran",
      tutorName: "Budi Santoso",
      tutorRole: "Senior Marketer di Gojek",
      price: "Rp 350K",
      rating: "4.8",
      reviews: "120",
      imageUrl: "/images/course1-thumbnail.jpg", 
      avatarUrl: "/images/mentor1-avatar.png"  
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass untuk Pemula",
      description: "Langkah demi langkah merancang antarmuka aplikasi yang indah dan mudah digunakan.",
      category: "Desain",
      tutorName: "Siti Aminah",
      tutorRole: "Product Designer di Tokopedia",
      price: "Rp 450K",
      rating: "4.9",
      reviews: "340",
      imageUrl: "/images/course1-thumbnail.jpg", 
      avatarUrl: "/images/mentor1-avatar.png"
    }
  ]);

  const handleDelete = (id, title) => {
    const isConfirm = window.confirm(`Apakah Anda yakin ingin menghapus kelas "${title}"?`);
    if (isConfirm) {
      setCourses(courses.filter(course => course.id !== id));
    }
  };

  const handleEditClick = (course) => {
    setNewCourse({
      title: course.title,
      description: course.description,
      category: course.category,
      price: course.price,
      tutorName: course.tutorName,
      tutorRole: course.tutorRole,
      imageUrl: course.imageUrl,
      avatarUrl: course.avatarUrl
    });
    setEditingId(course.id);
    setIsModalOpen(true);
  };

  const handleImageUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {

      const tempUrl = URL.createObjectURL(file);
      setNewCourse({ ...newCourse, [field]: tempUrl });
    }
  };

  const handleSaveCourse = (e) => {
    e.preventDefault(); 
    
    if (editingId) {
      const updatedCourses = courses.map(course => 
        course.id === editingId ? { ...course, ...newCourse } : course
      );
      setCourses(updatedCourses);
    } else {
      const courseToAdd = {
        id: Date.now(), 
        title: newCourse.title,
        description: newCourse.description,
        category: newCourse.category,
        price: newCourse.price,
        tutorName: newCourse.tutorName || "Tutor Anonim",
        tutorRole: newCourse.tutorRole || "Instruktur",
        rating: "0.0",
        reviews: "0",

        imageUrl: newCourse.imageUrl || "/images/course1-thumbnail.jpg",
        avatarUrl: newCourse.avatarUrl || "/images/mentor1-avatar.png"
      };
      setCourses([courseToAdd, ...courses]);
      setActiveTab('Semua Kelas'); 
    }
    resetForm();
  };

  const resetForm = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setNewCourse({ title: '', description: '', category: 'Pemasaran', price: '', tutorName: '', tutorRole: '', imageUrl: '', avatarUrl: '' });
  };

  const filteredCourses = activeTab === 'Semua Kelas' 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-10 my-8 font-sans relative">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl md:text-2xl font-bold font-poppins text-gray-900">
            Koleksi Video Pembelajaran Unggulan
          </h2>
          <p className="text-sm md:text-base text-gray-500">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>

        {isAdminMode && (
          <button 
            onClick={() => {
              resetForm();
              setIsModalOpen(true);
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-medium transition-colors text-sm shadow-sm cursor-pointer"
          >
            + Tambah Kelas
          </button>
        )}
      </div>

      <div className="w-full overflow-x-auto mb-8">
        <div className="flex gap-6 md:gap-8 border-b border-gray-200 whitespace-nowrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`pb-3 text-sm md:text-base font-medium transition-all relative cursor-pointer ${
                activeTab === category ? 'text-orange-600 font-semibold' : 'text-gray-500 hover:text-gray-800'
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
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard 
              key={course.id} 
              {...course}
              isAdminMode={isAdminMode} 
              onDelete={() => handleDelete(course.id, course.title)}
              onEdit={() => handleEditClick(course)} 
            />
          ))
        ) : (
          <div className="col-span-full py-12 flex flex-col items-center justify-center text-gray-400">
             <p>Belum ada kelas untuk kategori <span className="font-semibold text-gray-500">{activeTab}</span>.</p>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
            
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">
              {editingId ? 'Edit Data Kelas' : 'Tambah Kelas Baru'}
            </h3>
            
            <form onSubmit={handleSaveCourse} className="flex flex-col gap-4 max-h-[80vh] overflow-y-auto pr-1">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Judul Kelas</label>
                <input 
                  type="text" required
                  value={newCourse.title}
                  onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Singkat</label>
                <textarea 
                  required rows="2"
                  value={newCourse.description}
                  onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                ></textarea>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                  <select 
                    value={newCourse.category}
                    onChange={(e) => setNewCourse({...newCourse, category: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                  >
                    <option value="Pemasaran">Pemasaran</option>
                    <option value="Desain">Desain</option>
                    <option value="Pengembangan Diri">Pengembangan Diri</option>
                    <option value="Bisnis">Bisnis</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Harga</label>
                  <input 
                    type="text" required
                    value={newCourse.price}
                    onChange={(e) => setNewCourse({...newCourse, price: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    placeholder="Contoh: Rp 300K"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Tutor</label>
                  <input 
                    type="text" required
                    value={newCourse.tutorName}
                    onChange={(e) => setNewCourse({...newCourse, tutorName: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Peran Tutor</label>
                  <input 
                    type="text" required
                    value={newCourse.tutorRole}
                    onChange={(e) => setNewCourse({...newCourse, tutorRole: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Media Visual</p>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail Kelas</label>
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'imageUrl')}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Foto Avatar Tutor</label>
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'avatarUrl')}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-2">
                <button 
                  type="button" 
                  onClick={resetForm}
                  className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
                >
                  Batal
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 cursor-pointer"
                >
                  {editingId ? 'Simpan Perubahan' : 'Simpan Kelas'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </section>
  );
}