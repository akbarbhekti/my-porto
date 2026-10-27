import React from "react";
import { ExternalLink } from "lucide-react";

const CardProject = ({ Img, Title, Description, Link: ProjectLink }) => {
  return (
    <div className="group relative w-full">
      <a
        href={ProjectLink || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden rounded-2xl bg-[#12161D] border border-white/5 hover:border-[#2dd4bf]/40 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] cursor-pointer"
      >
        <div className="p-5">
          {/* Gambar Thumbnail Proyek */}
          <div className="relative overflow-hidden rounded-xl aspect-[16/9] bg-black/40">
            <img
              src={Img || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000"}
              alt={Title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12161D] via-transparent to-transparent opacity-60" />
          </div>

          {/* Konten Teks */}
          <div className="mt-5 space-y-2.5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white group-hover:text-[#2dd4bf] transition-colors">
                {Title}
              </h3>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#2dd4bf] transition-colors" />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
              {Description}
            </p>

            {/* Tombol Kunjungi Web */}
            <div className="pt-3 flex items-center gap-2 text-xs font-mono font-semibold text-[#2dd4bf]">
              <span>KUNJUNGI WEBSITE</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CardProject;