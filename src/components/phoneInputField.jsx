export default function PhoneInputField({ label }) {
  return (
    <div className="flex flex-col gap-1">

      <label className="text-sm font-medium text-gray-700">
        {label} <span className="text-red-500">*</span>
      </label>
      
      <div className="flex gap-2 sm:gap-3">

        <button type="button" className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-3 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500">

          <img src="https://flagcdn.com/w20/id.png" alt="Bendera Indonesia" className="w-5 h-auto rounded-sm object-cover" />
          <span className="text-sm font-medium text-gray-700">+62</span>

          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <input 
          type="tel" 
          placeholder="81234567890"
          className="flex-grow w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all" 
        />
        
      </div>
    </div>
  );
}