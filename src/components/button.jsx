export default function Button({ children, variant = "primary", onClick, icon: Icon }) {
  const baseStyle = "w-full font-semibold py-3 rounded-lg transition-colors flex justify-center items-center gap-2 cursor-pointer";
  const variants = {
    primary: "bg-[#40C855] text-white hover:bg-green-600",
    secondary: "bg-[#E8F8EB] text-[#40C855] hover:bg-green-100",
    outline: "bg-white border border-[#40C855] text-[#40C855] hover:bg-green-50"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
}