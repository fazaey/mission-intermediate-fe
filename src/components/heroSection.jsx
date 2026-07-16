import Button from './button';
export default function HeroSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-10 my-6">

      <div 
        className="relative rounded-2xl overflow-hidden bg-cover bg-center px-6 py-12 md:py-20 text-center flex flex-col items-center justify-center min-h-87.5 shadow-sm"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(/images/hero-background.jpg)` 
        }}
      >
        <div className="max-w-3xl flex flex-col items-center gap-4 md:gap-5">
          
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white font-poppins leading-tight md:leading-snug">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
          </h1>

          <p className="text-xs md:text-sm lg:text-base text-gray-200 font-sans leading-relaxed max-w-2xl">
            Temukan ilmu baru yang menarik dan mendalam melalui video pembelajaran berkualitas tinggi. 
            Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
          </p>

          <div className="mt-2 w-full sm:w-auto sm:min-w-[320px]">
            <Button variant="primary">
              Temukan Video Course untuk Dipelajari
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}