export default function CourseCard({ 
  title, 
  description, 
  tutorName, 
  tutorRole, 
  price, 
  rating, 
  reviews, 
  imageUrl, 
  avatarUrl 
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow cursor-pointer">
    
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-44 object-cover" 
      />
      
      <div className="p-5 flex flex-col grow gap-3">

        <h3 className="font-poppins font-bold text-gray-900 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500 font-sans line-clamp-2">{description}</p>

        <div className="flex items-center gap-3 mt-auto pt-2">
          <img 
            src={avatarUrl} 
            alt={tutorName} 
            className="w-10 h-10 rounded-xl object-cover" 
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900">{tutorName}</span>
            <span className="text-xs text-gray-500">{tutorRole}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 mt-1 border-t border-gray-100">
          <div className="flex items-center gap-1">

            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              {rating} <span className="text-gray-400">({reviews})</span>
            </span>
          </div>
          
          <div className="text-[#40C855] font-bold font-poppins text-lg">
            {price}
          </div>
        </div>

      </div>
    </div>
  );
}