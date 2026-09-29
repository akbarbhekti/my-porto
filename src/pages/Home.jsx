import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";

// Icon Media Sosial Sederhana (SVG Aman)
const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-[#12161D] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#2dd4bf] hover:border-[#2dd4bf]/40 transition-all hover:scale-110"
  >
    {children}
  </a>
);

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Akbar Bhekti — Full-stack Developer</title>
      </Helmet>

      <div
        className="min-h-screen bg-[#0A0D10] text-white px-6 lg:px-16 flex items-center relative overflow-hidden pt-36 pb-20"
        id="Home"
      >
        {/* Pattern Background Garis Lembut */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Kolom Kiri */}
          <div className="space-y-6">
            
            {/* TULISAN BESAR: AKBAR (Solid) & BHEKTI (Outline Stroke) PERSIS REFERENSI */}
            <div className="space-y-0 leading-none select-none">
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white m-0">
                AKBAR
              </h2>
              <h2
                className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight m-0"
                style={{
                  WebkitTextStroke: "2px rgba(255, 255, 255, 0.25)",
                  color: "transparent",
                }}
              >
                BHEKTI
              </h2>
            </div>

            {/* Sub-judul dengan kata Full-stack Developer berwarna Mint */}
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-snug pt-2">
              Seorang <span className="text-[#2dd4bf]">Full-stack Developer</span>
              <br />
              Web & Software Engineer
            </h1>

            <p className="text-gray-400 max-w-xl text-base sm:text-lg leading-relaxed">
              Saya merancang dan membangun aplikasi web modern dari antarmuka
              hingga sistem backend yang cepat, aman, dan mudah dikembangkan.
            </p>

            {/* Tombol Aksi */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#Portofolio"
                className="px-6 py-3.5 rounded-xl bg-[#2dd4bf] hover:bg-[#14b8a6] text-[#0A0D10] font-bold text-sm flex items-center gap-2 transition-all shadow-[0_0_25px_rgba(45,212,191,0.25)] hover:scale-105"
              >
                Lihat Proyek <ArrowRight size={16} />
              </a>

              <a
                href="#Contact"
                className="px-6 py-3.5 rounded-xl bg-[#12161D] border border-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all hover:bg-[#161B22]"
              >
                Kontak Saya
              </a>
            </div>

            {/* Deretan Icon Sosial Media Di Bawah Tombol */}
            <div className="flex items-center gap-3 pt-4">
              <SocialIcon href="https://github.com">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </SocialIcon>

              <SocialIcon href="https://linkedin.com">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </SocialIcon>

              <SocialIcon href="https://instagram.com">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Kolom Kanan: Foto Lingkaran + Efek Cincin Ganda + Overlay Terminal */}
          <div className="flex justify-center relative mt-6 lg:mt-0">
            
            {/* Badge Status Available */}
            <div className="absolute -top-6 right-6 sm:right-12 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12161D]/90 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-ping" />
              <span className="text-[11px] font-mono tracking-widest text-gray-200">
                AVAILABLE FOR WORK
              </span>
            </div>

            {/* Frame Cincin Konsentris Luar */}
            <div className="relative w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full p-3 border border-teal-500/20 flex items-center justify-center">
              
              {/* Cincin Lingkaran Dalam */}
              <div className="w-full h-full rounded-full p-2 border border-[#2dd4bf]/40 flex items-center justify-center">
                
                {/* Foto Profil Lingkaran */}
                <div className="w-full h-full rounded-full overflow-hidden shadow-[0_0_50px_rgba(45,212,191,0.15)] bg-[#12161D]">
                  <img
                    src="/Photo.jpeg"
                    alt="Akbar Bhekti"
                    className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600";
                    }}
                  />
                </div>

              </div>

              {/* Code Snippet Tag Overlay */}
              <div className="absolute -bottom-2 -left-2 sm:left-4 bg-[#0E131A]/95 border-l-4 border-[#2dd4bf] border border-white/10 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md">
                <p className="font-mono text-xs text-gray-400">&lt;fullstack-developer&gt;</p>
                <p className="font-mono text-xs font-semibold text-white pl-2">ideas.intoReality()</p>
                <p className="font-mono text-xs text-gray-400">&lt;/fullstack-developer&gt;</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Home;