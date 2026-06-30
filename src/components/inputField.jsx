export default function InputField({ label, type, placeholder }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        {label} <span className="text-red-500">*</span>
      </label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all" 
      />
    </div>
  );
}