export default function Newsletter() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-10 my-16">
      <div 
        className="relative bg-[#1E1E1E] rounded-2xl p-8 md:p-12 flex flex-col items-center justify-between gap-8 md:gap-12 shadow-lg overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(/images/cta-background.jpg)`
        }}
      >
        
        <div className="flex flex-col gap-3 text-center md:text-left max-w-lg z-10 items-center justify-center">
          <span className="text-gray-400 font-semibold tracking-wider text-sm uppercase">
            Newsletter
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-white leading-tight">
            Mau Belajar Lebih Banyak?
          </h2>
          <p className="text-gray-300 text-sm md:text-base font-sans mt-1 text-center">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id
          </p>
        </div>

        <div className="w-full flex-grow max-w-md z-10 relative">
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Masukkan Emailmu" 
              className="flex-grow w-full px-6 py-4 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 font-sans"
              required
            />
            <button 
              type="submit" 
              className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 sm:py-0 px-6 rounded-lg transition-colors text-sm shadow-sm sm:absolute sm:right-2 sm:top-2 sm:bottom-2">
              Subscribe
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
}