export default function CourseCard({ 
  title, 
  description, 
  tutorName, 
  tutorRole, 
  price, 
  rating, 
  reviews, 
  imageUrl, 
  avatarUrl,
  onDelete,
  onEdit,
  isAdminMode 
}) {
  
  return (
    <div className="relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">

      {isAdminMode && (
        <div className="absolute top-3 right-3 z-10 flex gap-2">

          <button 
            onClick={onEdit}
            className="bg-white/90 hover:bg-blue-50 hover:text-blue-600 text-blue-400 p-2 rounded-full shadow-sm transition-colors cursor-pointer"
            title="Edit Kelas"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>

          <button 
            onClick={onDelete}
            className="bg-white/90 hover:bg-red-50 hover:text-red-600 text-red-400 p-2 rounded-full shadow-sm transition-colors cursor-pointer"
            title="Hapus Kelas"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
          
        </div>
      )}

      <div className="w-full h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-grow p-5">
        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 font-poppins line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-3 mt-auto mb-4">
          <img src={avatarUrl} alt={tutorName} className="w-10 h-10 rounded-lg object-cover" />
          <div>
            <h4 className="text-sm font-semibold text-gray-900">{tutorName}</h4>
            <p className="text-xs text-gray-500">{tutorRole}</p>
          </div>
        </div>

        <hr className="border-gray-100 mb-4" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-bold text-gray-900">{rating}</span>
            <span className="text-sm text-gray-500">({reviews})</span>
          </div>
          <span className="text-lg font-bold text-green-600">{price}</span>
        </div>
      </div>
      
    </div>
  );
}