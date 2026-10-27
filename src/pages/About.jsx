import React from "react";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="About" className="py-24 bg-[#0A0D10] text-white relative px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Judul Bagian */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t.about.title}
          </h2>
          <div className="w-16 h-1 bg-[#2dd4bf] mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Kiri: Tampilan Kotak Terminal Mockup (Sesuai Screenshot) */}
          <div className="bg-[#0E131A] border border-white/10 rounded-2xl p-6 font-mono text-sm shadow-2xl relative">
            {/* Titik Tiga Mac / Terminal Window */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>

            {/* Kode Profil */}
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="text-[#2dd4bf]/50 mr-4 select-none">01</span>
                <span className="text-[#2dd4bf]">const</span> developer = &#123;
              </p>
              <p>
                <span className="text-[#2dd4bf]/50 mr-4 select-none">02</span>
                &nbsp;&nbsp;name: <span className="text-[#2dd4bf]">'Akbar Bhekti'</span>,
              </p>
              <p>
                <span className="text-[#2dd4bf]/50 mr-4 select-none">03</span>
                &nbsp;&nbsp;role: <span className="text-[#2dd4bf]">'Full-stack Developer'</span>,
              </p>
              <p>
                <span className="text-[#2dd4bf]/50 mr-4 select-none">04</span>
                &nbsp;&nbsp;focus: <span className="text-[#2dd4bf]">'Web; </span>,
              </p>
              <p>
                <span className="text-[#2dd4bf]/50 mr-4 select-none">05</span>
                &nbsp;&nbsp;database: [<span className="text-[#2dd4bf]">'PostgreSQL'</span>, <span className="text-[#2dd4bf]">'Supabase'</span>],
              </p>
              <p>
                <span className="text-[#2dd4bf]/50 mr-4 select-none">06</span>
                &nbsp;&nbsp;passionate: <span className="text-yellow-400">true</span>
              </p>
              <p>
                <span className="text-[#2dd4bf]/50 mr-4 select-none">07</span>
                &#125;;
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Teks Deskripsi Diri (Otomatis Berubah Bahasa) */}
          <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
            <p>
              {t.about.p1_1}
              <strong className="text-white font-bold">{t.about.p1_name}</strong>
              {t.about.p1_2}
            </p>

            <p className="text-gray-400">
              {t.about.p2}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;