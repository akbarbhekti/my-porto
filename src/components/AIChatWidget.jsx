import React, { useState, useRef, useEffect } from "react";
import { X, Send, ArrowUpRight, Sparkles } from "lucide-react";

// Basis Data Jawaban Cerdas Asisten AkbarDev
const getBotResponse = (question) => {
  const q = question.toLowerCase();

  if (q.includes("layanan") || q.includes("jasa") || q.includes("bisa apa")) {
    return "Akbar menyediakan layanan pembuatan website Full-stack modern, mulai dari Landing Page responsif, integrasi antarmuka React/Tailwind, hingga sistem backend & database PostgreSQL menggunakan Supabase.";
  }

  if (q.includes("proyek") || q.includes("portofolio") || q.includes("karya")) {
    return "Akbar telah membangun berbagai proyek web interaktif berbasis React, Tailwind CSS, dan Supabase. Anda dapat melihat daftar lengkapnya di bagian menu 'Proyek' pada halaman ini!";
  }

  if (q.includes("kontak") || q.includes("hubungi") || q.includes("email") || q.includes("pesan")) {
    return "Anda bisa menghubungi Akbar langsung melalui form kontak di website ini, atau mengirim email resmi ke: Akbarbhekti05@gmail.com.";
  }

  if (q.includes("teknologi") || q.includes("skill") || q.includes("bahasa") || q.includes("stack")) {
    return "Teknologi utama yang dikuasai Akbar antara lain: JavaScript, ReactJS, Tailwind CSS, Node.js, PostgreSQL, Supabase, Git/GitHub, dan REST API.";
  }

  if (q.includes("siapa") || q.includes("akbar")) {
    return "Akbar Bhekti adalah seorang Full-stack Web Developer yang berfokus menciptakan aplikasi web modern, cepat, aman, dan mudah digunakan.";
  }

  return "Terima kasih atas pertanyaannya! Saya asisten AI AkbarDev. Anda bisa menanyakan tentang layanan, keahlian teknologi, proyek, atau cara menghubungi Akbar secara langsung.";
};

// Komponen Badge Logo Persis Gaya "LD." (A Putih, B. Mint)
const LogoBadge = ({ size = "normal" }) => (
  <div
    className={`rounded-xl bg-[#090D12] border border-[#2dd4bf]/40 flex items-center justify-center font-black tracking-tighter select-none shadow-[0_0_15px_rgba(45,212,191,0.2)] ${
      size === "small" ? "w-8 h-8 text-xs" : "w-11 h-11 text-base"
    }`}
  >
    <span className="text-white">A</span>
    <span className="text-[#2dd4bf]">B.</span>
  </div>
);

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Halo! Saya asisten AI AkbarDev. Saya bisa membantu menjelaskan layanan, proyek, keahlian, atau cara menghubungi Akbar.",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll ke pesan terbaru
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: text,
      time: userTime
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botReply = {
        id: Date.now() + 1,
        sender: "bot",
        text: getBotResponse(text),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 700);
  };

  const quickPrompts = [
    "Layanan yang tersedia?",
    "Proyek unggulan?",
    "Teknologi dikuasai?",
    "Cara hubungi Akbar?"
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50">
      
      {/* 1. JENDELA CHAT POPUP (UKURAN RAMPING & PAS) */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-[90vw] sm:w-[360px] h-[500px] max-h-[80vh] bg-[#0E131A] border border-white/10 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden animate-fade-in backdrop-blur-2xl">
          
          {/* Header Chat */}
          <div className="p-3.5 bg-[#121720] border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <LogoBadge size="small" />
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-white leading-tight">
                  AkbarDev AI
                </h4>
                <p className="text-[10px] text-gray-400 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-pulse" />
                  Siap membantu
                </p>
              </div>
            </div>

            {/* Tombol Tutup Silang di Header */}
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Subheader Badge */}
          <div className="px-4 py-2 bg-black/20 border-b border-white/5 flex items-center gap-1.5">
            <Sparkles size={11} className="text-[#2dd4bf]" />
            <span className="text-[9px] font-mono tracking-widest text-[#2dd4bf] uppercase font-semibold">
              AI WEBSITE ASSISTANT
            </span>
          </div>

          {/* Area Pesan Chat */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#2dd4bf] text-[#0A0D10] font-medium rounded-tr-none"
                      : "bg-[#161C26] text-gray-200 border border-white/5 rounded-tl-none shadow-md"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-gray-500 mt-1 px-1">{msg.time}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-2.5 rounded-xl bg-[#161C26] border border-white/5 w-fit">
                <span className="w-1.5 h-1.5 bg-[#2dd4bf] rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-[#2dd4bf] rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-[#2dd4bf] rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Prompts */}
          <div className="p-2.5 grid grid-cols-2 gap-1.5 bg-[#090D12]/70 border-t border-white/5">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="p-2 rounded-lg bg-[#141922] border border-white/5 hover:border-[#2dd4bf]/40 text-left text-[10px] text-gray-300 hover:text-white flex items-center justify-between transition-all"
              >
                <span className="truncate">{prompt}</span>
                <ArrowUpRight size={11} className="text-[#2dd4bf] shrink-0 ml-1" />
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-[#121720] border-t border-white/5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="relative flex items-center"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Tanyakan proyek, layanan..."
                className="w-full pl-3 pr-10 py-2 bg-[#161C26] border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 outline-none focus:border-[#2dd4bf] transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="absolute right-1 p-1.5 rounded-lg bg-[#2dd4bf] hover:bg-[#14b8a6] text-[#0A0D10] disabled:opacity-30 disabled:bg-gray-700 disabled:text-gray-500 transition-all"
              >
                <Send size={13} />
              </button>
            </form>

            <div className="flex justify-between items-center text-[9px] text-gray-500 mt-2 px-1">
              <span>Data publik AkbarDev.</span>
              <a href="#Contact" onClick={() => setIsOpen(false)} className="text-[#2dd4bf] hover:underline flex items-center gap-0.5">
                Konsultasi <ArrowUpRight size={9} />
              </a>
            </div>
          </div>

        </div>
      )}

      {/* 2. TOMBOL MELAYANG LOGO PERSIS GAMBAR "LD." */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 p-1 rounded-2xl bg-[#0D1117] border border-[#2dd4bf]/40 hover:border-[#2dd4bf] flex items-center justify-center shadow-[0_0_20px_rgba(45,212,191,0.25)] hover:scale-105 transition-all relative group"
      >
        {isOpen ? (
          <div className="w-11 h-11 rounded-xl bg-[#161C26] flex items-center justify-center text-white">
            <X size={20} />
          </div>
        ) : (
          <>
            <LogoBadge size="normal" />
            {/* Titik Hijau Indikator Aktif */}
            <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-[#2dd4bf] animate-ping" />
            <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-[#2dd4bf] border-2 border-[#0A0D10]" />
          </>
        )}
      </button>

    </div>
  );
};

export default AIChatWidget;