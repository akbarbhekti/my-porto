import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const translations = {
  ID: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      contact: "Kontak",
    },
    hero: {
      badge: "AVAILABLE FOR WORK",
      role1: "Seorang",
      role2: "Full-stack Developer",
      role3: "Web",
      description: "Saya merancang dan membangun aplikasi web modern dari antarmuka hingga sistem backend yang cepat, aman, dan mudah dikembangkan.",
      btnProjects: "Lihat Proyek",
      btnContact: "Kontak Saya",
    },
    about: {
      title: "Tentang Saya",
      p1_1: "Saya ",
      p1_name: "Akbar Bhekti",
      p1_2: ", seorang Full-stack Developer yang berfokus pada pengembangan aplikasi web modern. Saya menikmati seluruh proses pembangunan produk, mulai dari merancang antarmuka yang responsif, mengembangkan REST API, hingga mengelola database dan deployment.",
      p2: "Saya terbiasa bekerja dengan ekosistem JavaScript, React, Tailwind CSS, Node.js, dan Supabase untuk mewujudkan website yang tangguh dan memiliki performa tinggi."
    },
    portfolio: {
      skillsTitle1: "Skills &",
      skillsTitle2: "Technologies",
      tabProjects: "Semua Proyek",
      tabCertificates: "Sertifikat",
    },
    contact: {
      title1: "Mari",
      title2: "Terhubung",
      headerDesc: "Saya terbuka untuk kolaborasi, proyek baru, dan kesempatan membangun solusi digital bersama.",
      subHeader: "MARI MEMULAI PERCAKAPAN",
      boxTitle: "Kontak Saya",
      boxSub: "Mari terhubung.",
      boxDesc: "Hubungi saya melalui form ini. Saya siap berdiskusi tentang proyek, kolaborasi, atau peluang kerja baru.",
      labelName: "Nama Pengirim",
      phName: "Nama Anda",
      labelEmail: "Alamat Email",
      phEmail: "name@email.com",
      labelMessage: "Pesan",
      phMessage: "Ceritakan proyek atau ide Anda...",
      btnSend: "Kirim Pesan",
      btnSending: "Mengirim...",
      alertTitle: "Pesan Terkirim!",
      alertText: "Terima kasih, saya akan segera membalas email Anda."
    }
  },
  EN: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "AVAILABLE FOR WORK",
      role1: "A",
      role2: "Full-stack Developer",
      role3: "Web ",
      description: "I design and build modern web applications from intuitive interfaces to fast, secure, and scalable backend systems.",
      btnProjects: "View Projects",
      btnContact: "Contact Me",
    },
    about: {
      title: "About Me",
      p1_1: "I am ",
      p1_name: "Akbar Bhekti",
      p1_2: ", a Full-stack Developer focused on modern web application development. I enjoy the entire product building process, from designing responsive interfaces, developing REST APIs, to managing databases and deployment.",
      p2: "I specialize in the JavaScript ecosystem, React, Tailwind CSS, Node.js, and Supabase to create robust, high-performance websites."
    },
    portfolio: {
      skillsTitle1: "Skills &",
      skillsTitle2: "Technologies",
      tabProjects: "All Projects",
      tabCertificates: "Certificates",
    },
    contact: {
      title1: "Let's",
      title2: "Connect",
      headerDesc: "I am open to collaborations, new projects, and opportunities to build digital solutions together.",
      subHeader: "START A CONVERSATION",
      boxTitle: "Contact Me",
      boxSub: "Let's connect.",
      boxDesc: "Reach out to me via this form. I'm ready to discuss projects, collaborations, or new work opportunities.",
      labelName: "Sender Name",
      phName: "Your Name",
      labelEmail: "Email Address",
      phEmail: "name@email.com",
      labelMessage: "Message",
      phMessage: "Tell me about your project or idea...",
      btnSend: "Send Message",
      btnSending: "Sending...",
      alertTitle: "Message Sent!",
      alertText: "Thank you, I will get back to your email as soon as possible."
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "ID");

  const toggleLanguage = () => {
    const nextLang = lang === "ID" ? "EN" : "ID";
    setLang(nextLang);
    localStorage.setItem("lang", nextLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);