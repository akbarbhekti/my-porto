import React from "react"

const About = () => {
  return (
    <div className="py-24 px-6 lg:px-16 bg-[#0A0D10] text-white" id="About">
      
      {/* Header Judul Persis Gambar */}
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
          Tentang <span className="text-[#2dd4bf]">Saya</span>
        </h2>
        {/* Garis Pill Mint Kecil */}
        <div className="w-20 h-1 bg-gradient-to-r from-[#2dd4bf] to-transparent rounded-full mx-auto" />
        <p className="text-gray-400 text-sm sm:text-base">
          Mengubah kebutuhan bisnis menjadi produk digital yang andal.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Sisi Kiri: Mac Terminal Code Editor Box */}
        <div className="bg-[#12161D] border border-white/10 rounded-2xl p-6 shadow-2xl font-mono text-sm leading-relaxed">
          {/* Mac Header Dots */}
          <div className="flex items-center gap-2 pb-5 border-b border-white/5 mb-5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>

          <div className="space-y-2 text-gray-300">
            <p><span className="text-gray-500">01</span> <span className="text-teal-400">const</span> developer = &#123;</p>
            <p><span className="text-gray-500">02</span> &nbsp;&nbsp;name: <span className="text-[#2dd4bf]">'Akbar Bhekti'</span>,</p>
            <p><span className="text-gray-500">03</span> &nbsp;&nbsp;role: <span className="text-[#2dd4bf]">'Full-stack Developer'</span>,</p>
            <p><span className="text-gray-500">04</span> &nbsp;&nbsp;focus: <span className="text-[#2dd4bf]">'Web & Software Engineering'</span>,</p>
            <p><span className="text-gray-500">05</span> &nbsp;&nbsp;database: <span className="text-[#2dd4bf]">['PostgreSQL', 'Supabase']</span>,</p>
            <p><span className="text-gray-500">06</span> &nbsp;&nbsp;passionate: <span className="text-amber-400">true</span></p>
            <p><span className="text-gray-500">07</span> &#125;;</p>
          </div>
        </div>

        {/* Sisi Kanan: Narasi Diri */}
        <div className="space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg">
          <p>
            Saya <span className="text-white font-semibold">Akbar Bhekti</span>, seorang Full-stack Developer yang berfokus pada pengembangan aplikasi web modern. Saya menikmati seluruh proses pembangunan produk, mulai dari merancang antarmuka yang responsif, mengembangkan REST API, hingga mengelola database dan deployment.
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            Saya terbiasa bekerja dengan ekosistem JavaScript, React, Tailwind CSS, Node.js, dan Supabase untuk mewujudkan website yang tangguh dan memiliki performa tinggi.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;