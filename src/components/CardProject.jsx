import React from "react";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const CardProject = ({
  logo,
  role,
  company,
  period,
  points = [],
  link,
}) => {
  const { lang } = useLanguage();

  return (
    <div className="w-full bg-[#12161D] border border-white/5 hover:border-[#2dd4bf]/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.1)] group">
      
      {/* Header Kartu: Logo, Judul & Periode */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        
        {/* Sisi Kiri: Logo + Info Peran */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 p-2 flex items-center justify-center shrink-0 overflow-hidden">
            <img
              src={logo}
              alt={company}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
              }}
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white group-hover:text-[#2dd4bf] transition-colors">
                {role}
              </h3>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#2dd4bf] transition-colors"
                  title="Visit Website"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mt-0.5">
              {company}
            </p>
          </div>
        </div>

        {/* Sisi Kanan: Periode Waktu */}
        <div className="text-xs sm:text-sm font-mono text-gray-400 sm:text-right shrink-0">
          {period}
        </div>
      </div>

      {/* Konten Bullet Points */}
      <ul className="mt-6 space-y-2.5 text-gray-300/90 text-sm sm:text-base leading-relaxed">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-[#2dd4bf] font-bold text-lg leading-none select-none">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Tombol Kunjungi Web (Bisa Multi-bahasa) */}
      {link && (
        <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#2dd4bf] hover:underline"
          >
            {lang === "ID" ? "KUNJUNGI WEBSITE RESMI" : "VISIT OFFICIAL WEBSITE"} <ExternalLink size={13} />
          </a>
        </div>
      )}

    </div>
  );
};

export default CardProject;