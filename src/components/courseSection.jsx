import { useState } from 'react';
import CourseCard from './courseCard';

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
      // Menyulap file lokal menjadi URL sementara di memori browser
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