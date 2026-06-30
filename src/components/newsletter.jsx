export default function Newsletter() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-10 my-16">
      <div 
        className="relative bg-[#1E1E1E] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 shadow-lg overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(circle at top right, #333333, #1E1E1E)'
        }}
      >
        
        <div className="flex flex-col gap-3 text-center md:text-left max-w-lg z-10">
          <span className="text-gray-400 font-semibold tracking-wider text-sm uppercase">
            Newsletter
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-white leading-tight">
            Mau Belajar Lebih Banyak?
          </h2>
          <p className="text-gray-300 text-sm md:text-base font-sans mt-1">
            Daftarkan emailmu untuk mendapatkan informasi terbaru mengenai kelas, promo, dan tips belajar dari Videobelajar.
          </p>
        </div>

        <div className="w-full md:w-auto flex-grow max-w-md z-10">
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Masukkan Emailmu" 
              className="flex-grow w-full px-4 py-3 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 font-sans"
              required
            />
            <button 
              type="submit" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-md">
              Berlangganan
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
}