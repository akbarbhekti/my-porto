import React, { useState } from "react";
import { Mail, User, MessageSquare, Send, MessageCircle } from "lucide-react";
import Komentar from "../components/Commentar";
import Swal from "sweetalert2";
import axios from "axios";
import { useLanguage } from "../context/LanguageContext";

const ContactPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // DAFTAR KONTAK RESMI AKBAR BHEKTI
  const contactLinks = [
    {
      label: "EMAIL",
      val: "Akbarbhekti05@gmail.com",
      href: "mailto:Akbarbhekti05@gmail.com",
      icon: (
        <Mail size={20} className="text-[#2dd4bf]" />
      ),
    },
    {
      label: "WHATSAPP",
      val: "+62 895-4033-39633",
      href: "https://wa.me/62895403339633",
      icon: (
        <MessageCircle size={20} className="text-[#2dd4bf]" />
      ),
    },
    {
      label: "GITHUB",
      val: "github.com/akbarbhekti",
      href: "https://github.com/akbarbhekti",
      icon: (
        <svg className="w-5 h-5 fill-[#2dd4bf]" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    {
      label: "LINKEDIN",
      val: "Akbar Bhekti",
      href: "https://www.linkedin.com/in/akbar-bhekti-879397350?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: (
        <svg className="w-5 h-5 fill-[#2dd4bf]" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      ),
    },
    {
      label: "INSTAGRAM",
      val: "@akbarbhekti1",
      href: "https://www.instagram.com/akbarbhekti1?stkn=dWVoeDhvZGt4b25t",
      icon: (
        <svg className="w-5 h-5 fill-[#2dd4bf]" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);

      await axios.post("https://formsubmit.co/Akbarbhekti05@gmail.com", data);

      Swal.fire({
        title: t.contact.alertTitle,
        text: t.contact.alertText,
        icon: "success",
        confirmButtonColor: "#2dd4bf",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch {
      Swal.fire({
        title: t.contact.alertTitle,
        text: t.contact.alertText,
        icon: "success",
        confirmButtonColor: "#2dd4bf",
      });
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-24 px-6 lg:px-16 bg-[#0A0D10] text-white" id="Contact">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
          {t.contact.title1} <span className="text-[#2dd4bf]">{t.contact.title2}</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#2dd4bf] to-transparent rounded-full mx-auto" />
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          {t.contact.headerDesc}
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Kolom Kiri: Info & Deretan Kontak Lengkap */}
        <div className="bg-[#12161D] border border-white/5 rounded-2xl p-8 space-y-6">
          <div className="space-y-4">
            <p className="text-xs font-mono tracking-widest text-[#2dd4bf] uppercase">
              {t.contact.subHeader}
            </p>
            <h3 className="text-3xl font-extrabold text-white">
              {t.contact.boxTitle} <br />
              <span className="text-[#2dd4bf]">{t.contact.boxSub}</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.contact.boxDesc}
            </p>
          </div>

          {/* Deretan Kontak (Email, WA, GitHub, LinkedIn, IG) */}
          <div className="space-y-3 pt-2">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-black/20 border border-white/5 hover:border-[#2dd4bf]/40 flex items-center gap-4 transition-all duration-300 hover:scale-[1.01] hover:bg-black/40 group block"
              >
                <div className="w-11 h-11 rounded-lg bg-[#2dd4bf]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2dd4bf]/20 transition-colors">
                  {item.icon}
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] text-gray-400 font-mono tracking-wider">{item.label}</p>
                  <p className="text-sm font-semibold text-white group-hover:text-[#2dd4bf] transition-colors truncate">
                    {item.val}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Form Kirim Pesan */}
        <div className="bg-[#12161D] border border-white/5 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-gray-400 font-mono flex items-center gap-1.5 mb-1.5">
                <User size={14} className="text-[#2dd4bf]" /> {t.contact.labelName}
              </label>
              <input
                type="text"
                required
                placeholder={t.contact.phName}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-[#0A0D10] border border-white/5 rounded-xl text-sm text-white outline-none focus:border-[#2dd4bf] transition-colors"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 font-mono flex items-center gap-1.5 mb-1.5">
                <Mail size={14} className="text-[#2dd4bf]" /> {t.contact.labelEmail}
              </label>
              <input
                type="email"
                required
                placeholder={t.contact.phEmail}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#0A0D10] border border-white/5 rounded-xl text-sm text-white outline-none focus:border-[#2dd4bf] transition-colors"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 font-mono flex items-center gap-1.5 mb-1.5">
                <MessageSquare size={14} className="text-[#2dd4bf]" /> {t.contact.labelMessage}
              </label>
              <textarea
                required
                rows={4}
                placeholder={t.contact.phMessage}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-[#0A0D10] border border-white/5 rounded-xl text-sm text-white outline-none focus:border-[#2dd4bf] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-[#2dd4bf] hover:bg-[#14b8a6] text-[#0A0D10] font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              <Send size={16} /> {isSubmitting ? t.contact.btnSending : t.contact.btnSend}
            </button>
          </form>
        </div>

      </div>

      {/* Bagian Komentar Realtime */}
      <div className="max-w-7xl mx-auto mt-12">
        <Komentar />
      </div>
    </div>
  );
};

export default ContactPage;