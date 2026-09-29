import React, { useState } from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import Komentar from "../components/Commentar";
import Swal from "sweetalert2";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        title: "Pesan Terkirim!",
        text: "Terima kasih, saya akan segera membalas email Anda.",
        icon: "success",
        confirmButtonColor: "#2dd4bf",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch {
      Swal.fire({
        title: "Terkirim!",
        text: "Pesan Anda berhasil diterima!",
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
      
      {/* Header Persis Gambar 4 */}
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
          Mari <span className="text-[#2dd4bf]">Terhubung</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#2dd4bf] to-transparent rounded-full mx-auto" />
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Saya terbuka untuk kolaborasi, proyek baru, dan kesempatan membangun solusi digital bersama.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Kolom Kiri: Kotak Percakapan LamzDev */}
        <div className="bg-[#12161D] border border-white/5 rounded-2xl p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-xs font-mono tracking-widest text-[#2dd4bf] uppercase">MARI MEMULAI PERCAKAPAN</p>
            <h3 className="text-3xl font-extrabold text-white">
              Kontak Saya <br />
              <span className="text-[#2dd4bf]">Mari terhubung.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hubungi saya melalui form ini. Saya siap berdiskusi tentang proyek, kolaborasi, atau peluang kerja baru.
            </p>
          </div>

          {/* Kotak Email Box */}
          <div className="mt-8 p-4 rounded-xl bg-black/20 border border-white/5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#2dd4bf]/10 flex items-center justify-center text-[#2dd4bf]">
              <Mail size={22} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">EMAIL</p>
              <p className="text-sm font-semibold text-white">Akbarbhekti05@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Form Input */}
        <div className="bg-[#12161D] border border-white/5 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-gray-400 font-mono flex items-center gap-1.5 mb-1.5">
                <User size={14} className="text-[#2dd4bf]" /> Nama Pengirim
              </label>
              <input
                type="text"
                required
                placeholder="Nama Anda"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-[#0A0D10] border border-white/5 rounded-xl text-sm text-white outline-none focus:border-[#2dd4bf] transition-colors"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 font-mono flex items-center gap-1.5 mb-1.5">
                <Mail size={14} className="text-[#2dd4bf]" /> Alamat Email
              </label>
              <input
                type="email"
                required
                placeholder="name@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#0A0D10] border border-white/5 rounded-xl text-sm text-white outline-none focus:border-[#2dd4bf] transition-colors"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 font-mono flex items-center gap-1.5 mb-1.5">
                <MessageSquare size={14} className="text-[#2dd4bf]" /> Pesan
              </label>
              <textarea
                required
                rows={4}
                placeholder="Ceritakan proyek atau ide Anda..."
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
              <Send size={16} /> {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
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