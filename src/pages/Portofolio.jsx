import React, { useState } from "react";
import CardProject from "../components/CardProject";
import Certificate from "../components/Certificate";
import { useLanguage } from "../context/LanguageContext";

// DAFTAR PROYEK (VERSI ID & EN)
const projectsData = {
  ID: [
    {
      id: 1,
      role: "Web Developer",
      company: "TOS & ALIGN",
      period: "2025-2026",
      link: "https://www.tosalign.com/",
      logo: "/tosalign.png",
      points: [
        "Mengembangkan dan merawat website resmi penyedia perawatan gigi modern 'Gigi Rapi Tanpa Behel'.",
        "Menerjemahkan rancangan antarmuka (UI/UX) menjadi kodingan fungsional, interaktif, dan konsisten.",
        "Membangun fitur konsultasi dan presentasi testimoni bergaransi pertama di Indonesia dengan integrasi yang mulus.",
        "Mengoptimalkan performa halaman web dan responsivitas pada perangkat mobile dan desktop.",
      ],
    },
    {
      id: 2,
      role: "Full-stack / Web Developer",
      company: "PT CATURKARDA DEPO BANGUNAN TBK",
      period: "2025 - 2026",
      link: "https://corporate.depobangunan.co.id/",
      logo: "/depobangunan.png",
      points: [
        "Membangun portal resmi korporasi Depo Bangunan yang menyajikan informasi profil perusahaan dan berita publik.",
        "Mengembangkan modul Hubungan Investor (Investor Relations) untuk laporan keuangan, prospektus, dan RUPS.",
        "Menerapkan tata kelola data yang aman, struktur hierarki informasi yang jelas, dan navigasi yang ramah pengguna.",
        "Bekerja sama secara efektif untuk memastikan seluruh informasi kepatuhan perusahaan tersaji secara akurat.",
      ],
    },
  ],
  EN: [
    {
      id: 1,
      role: "Web Developer",
      company: "TOS & ALIGN",
      period: "2024 - Present",
      link: "https://www.tosalign.com/",
      logo: "/tosalign.png",
      points: [
        "Developed and maintained the official website for modern dental care 'Teeth Straightening Without Braces'.",
        "Translated UI/UX designs into functional, highly interactive, and consistent responsive code.",
        "Built seamless consultation workflows and showcase features for Indonesia's first guaranteed clear aligner service.",
        "Optimized web performance and ensured high responsiveness across both mobile and desktop devices.",
      ],
    },
    {
      id: 2,
      role: "Full-stack / Web Developer",
      company: "PT CATURKARDA DEPO BANGUNAN TBK",
      period: "2025 - 2026",
      link: "https://corporate.depobangunan.co.id/",
      logo: "/depobangunan.png",
      points: [
        "Built the official corporate portal for Depo Bangunan, delivering structured company profiles and public news.",
        "Developed the Investor Relations module showcasing financial reports, prospectuses, and shareholder meeting agendas.",
        "Implemented secure data architecture, clear informational hierarchy, and intuitive user navigation.",
        "Collaborated effectively with cross-functional teams to ensure compliance and corporate governance accuracy.",
      ],
    },
  ],
};

// DAFTAR SKILL
const skills = [
  { name: "HTML5 & CSS3", category: "Frontend Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "JavaScript", category: "Programming Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", category: "Frontend Library", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", category: "CSS Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", category: "Backend Runtime", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", category: "Relational Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Supabase", category: "Backend as a Service", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Git & GitHub", category: "Version Control", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export default function Portofolio() {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("projects");
  const [certificates, setCertificates] = useState([]);

  // Ambil daftar proyek sesuai bahasa yang sedang aktif (ID atau EN)
  const currentProjects = projectsData[lang] || projectsData.ID;

  return (
    <div className="py-24 px-6 lg:px-16 bg-[#0A0D10] text-white" id="Portofolio">
      
      {/* Header Skills */}
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          {t.portfolio.skillsTitle1} <span className="text-[#2dd4bf]">{t.portfolio.skillsTitle2}</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#2dd4bf] to-transparent rounded-full mx-auto" />
      </div>

      {/* Grid Skills */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
        {skills.map((skill) => (
          <div 
            key={skill.name}
            className="flex items-center gap-4 p-4 rounded-xl bg-[#12161D] border border-white/5 hover:border-[#2dd4bf]/40 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="w-12 h-12 rounded-lg bg-black/30 p-2 flex items-center justify-center shrink-0">
              <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">{skill.name}</h4>
              <p className="text-xs text-gray-400 mt-0.5">{skill.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Showcase Proyek & Sertifikat */}
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === "projects" 
                ? "bg-[#2dd4bf] text-[#0A0D10]" 
                : "bg-[#12161D] text-gray-400 hover:text-white"
            }`}
          >
            {t.portfolio.tabProjects} ({currentProjects.length})
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === "certificates" 
                ? "bg-[#2dd4bf] text-[#0A0D10]" 
                : "bg-[#12161D] text-gray-400 hover:text-white"
            }`}
          >
            {t.portfolio.tabCertificates} ({certificates.length})
          </button>
        </div>

        {/* Daftar Proyek yang Otomatis Berubah Bahasa */}
        {activeTab === "projects" ? (
          <div className="space-y-6">
            {currentProjects.map((p) => (
              <CardProject key={p.id} {...p} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.length > 0 ? (
              certificates.map((c) => (
                <Certificate key={c.id} ImgSertif={c.Img} />
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-3 py-8">
                {lang === "ID" ? "Belum ada sertifikat yang ditampilkan." : "No certificates available yet."}
              </p>
            )}
          </div>
        )}
      </div>

    </div>
  );
}