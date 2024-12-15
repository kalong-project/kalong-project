export default function Hero() {
  return (
    <section className="relative bg-white p-3">
      {/* Hero Container */}
      <div className="relative py-4 h-screen content-center rounded-md mx-4 z-[2]">
        <div className="container mx-auto px-6 text-center">
          {/* Heading */}
          <h1 className="text-4xl font-bold mb-6 text-black warung-kopi">
            Empowering Coders, Building the Future Together
          </h1>
          {/* Subheading */}
          <p className="text-lg text-gray-900 mb-8">
            Temukan solusi teknologi, pelajari keterampilan terbaru, dan wujudkan
            ide-ide inovatif bersama Kalong Project.
          </p>
          {/* Buttons */}
          <div className="space-x-4">
            <button className="bg-orange text-black border border-black warung-kopi font-bold px-6 py-3">
              Lihat Course Terbaru
            </button>
            <button className="bg-orange text-black border border-black warung-kopi font-bold px-6 py-3">
              Pesan Jasa Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* SVG Background */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full z-[1] fill-blue-500/50 stroke-blue-500/50 [mask-image:linear-gradient(to_top,_transparent,_#ffffff5e,_transparent)] opacity-[.30]"
      >
        <defs>
          <pattern
            id=":Rs37qbt6ja:"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
            x="-1"
            y="-1"
          >
            <path d="M.5 20V.5H20" fill="none" stroke-dasharray="0"></path>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#:Rs37qbt6ja:)"
        ></rect>
      </svg>
    </section>
  );
}
