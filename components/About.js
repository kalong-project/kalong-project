export default function About() {
  return (
    <section className="relative py-16 h-screen content-center"
    // style={{ background: 'linear-gradient(to bottom, rgb(255 255 255 / 0%), rgb(255 255 255))' }}
    >
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-[1] opacity-[50] [mask-image:linear-gradient(to_top,_transparent,_#ffffff5e,_transparent)]"
        style={{
          // backgroundImage: 'url("/images/texture-paper.png"), linear-gradient(to bottom, rgb(255 255 255 / 0%), rgb(255 255 255))',
          backgroundImage: 'url("/images/texture-paper.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply',
        }}
      ></div>

      {/* Content Layer */}
      <div className="container mx-auto px-6 text-center z-[2] relative">
        <h2 className="text-4xl font-extrabold mb-6 warung-kopi">
          Tentang Kalong Project
        </h2>
        <p className="text-lg text-gray-600">
          Kalong Project adalah startup yang bergerak di bidang teknologi,
          dengan fokus pada pengembangan keterampilan digital, penyediaan jasa
          pemrograman, dan kursus online yang selalu mengikuti tren terbaru di
          dunia teknologi.
        </p>
        <div className="mt-8 flex flex-row justify-evenly flex-wrap">
          <div className="text-black border border-black warung-kopi px-6 py-4 hover:bg-orange-dark w-3/12 h-auto flex flex-col items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="m19 9l-5 5l-4-4l-3 3" /></g></svg>
            <strong>Inovasi Berkelanjutan</strong>
            <p>Kalong Project berinisiatif melakukan inovasi terbaru dan meningkatkan keterampilan digital.</p>
          </div>

          <div className="text-black border border-black warung-kopi px-6 py-4 hover:bg-orange-dark w-3/12 h-auto flex flex-col items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path fill="currentColor" d="M27 19c1.654 0 3-1.346 3-3s-1.346-3-3-3a2.995 2.995 0 0 0-2.816 2h-5.77l7.3-7.3c.392.187.824.3 1.286.3c1.654 0 3-1.346 3-3s-1.346-3-3-3s-3 1.346-3 3c0 .462.114.894.3 1.285L16 14.586V8c0-1.102.897-2 2-2h2V4h-2c-1.2 0-2.266.543-3 1.382A3.98 3.98 0 0 0 12 4h-1c-4.962 0-9 4.037-9 9v6c0 4.963 4.038 9 9 9h1c1.2 0 2.266-.542 3-1.382c.734.84 1.8 1.382 3 1.382h2v-2h-2c-1.103 0-2-.897-2-2v-6.586l8.3 8.301c-.187.391-.3.823-.3 1.285c0 1.655 1.346 3 3 3s3-1.345 3-3s-1.346-3-3-3a2.96 2.96 0 0 0-1.285.301l-7.301-7.3h5.77A2.995 2.995 0 0 0 27 19m0-4a1 1 0 0 1 0 2a1 1 0 0 1 0-2m0-11a1.001 1.001 0 0 1 0 2a1 1 0 0 1 0-2m-13 8h-2v2h2v4h-2c-1.654 0-3 1.346-3 3v2h2v-2a1 1 0 0 1 1-1h2v4c0 1.103-.897 2-2 2h-1c-3.52 0-6.432-2.613-6.92-6H6v-2H4v-4h3c1.654 0 3-1.346 3-3V9H8v2a1 1 0 0 1-1 1H4.08c.488-3.387 3.4-6 6.92-6h1c1.103 0 2 .898 2 2zm14 15a1.001 1.001 0 0 1-2 0c0-.551.449-1 1-1s1 .449 1 1"/></svg>
            <strong>Pemberdayaan Skill</strong>
            <p>Memberikan alat dan pengetahuan untuk menciptakan dampak nyata.</p>
          </div>

          <div className="text-black border border-black warung-kopi px-6 py-4 hover:bg-orange-dark w-3/12 h-auto flex flex-col items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16"><path fill="currentColor" d="M3 3a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m4.779 2.584a2 2 0 1 1 2.442-3.168A2 2 0 0 1 9.78 4.584M11 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2M2.5 6h2.67c-.11.313-.17.65-.17 1H2.5a.5.5 0 0 0-.5.5c0 .817.325 1.423.838 1.835c.236.19.519.343.839.455a2.5 2.5 0 0 0-.532.868a3.7 3.7 0 0 1-.933-.543C1.46 9.51 1 8.616 1 7.5A1.5 1.5 0 0 1 2.5 6m3.768 0a2 2 0 1 0 3.466 2a2 2 0 0 0-3.466-2m1.508.025A1.003 1.003 0 0 1 9 7q0 .116-.025.224a1 1 0 1 1-1.2-1.199m5.386 3.31c-.236.19-.519.343-.839.455a2.5 2.5 0 0 1 .531.868c.34-.139.655-.32.934-.543C14.54 9.51 15 8.616 15 7.5A1.5 1.5 0 0 0 13.5 6h-2.67c.11.313.17.65.17 1h2.5a.5.5 0 0 1 .5.5c0 .817-.325 1.423-.838 1.835M10.5 10a1.5 1.5 0 0 1 1.5 1.5c0 1.116-.459 2.01-1.212 2.615C10.047 14.71 9.053 15 8 15s-2.047-.29-2.788-.885C4.46 13.51 4 12.616 4 11.5A1.496 1.496 0 0 1 5.5 10zm0 1h-5a.5.5 0 0 0-.5.5c0 .817.325 1.423.838 1.835C6.364 13.757 7.12 14 8 14s1.636-.243 2.162-.665c.513-.412.838-1.018.838-1.835a.5.5 0 0 0-.5-.5"/></svg>
            <strong>Komunitas Teknologi</strong>
            <p>Menghubungkan individu berbakat untuk kolaborasi dan pertumbuhan bersama.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
