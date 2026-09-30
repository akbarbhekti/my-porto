import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, GitBranch as Github } from "lucide-react";
import { toSlug } from "../utils/slug";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const stored = JSON.parse(localStorage.getItem("projects")) || [];
    const found = stored.find((p) => toSlug(p.Title) === slug);
    setProject(found);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center text-white">
        <p>Project tidak ditemukan...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014] text-white px-6 py-12 max-w-4xl mx-auto">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8">
        <ArrowLeft className="w-5 h-5" /> Kembali
      </button>

      <h1 className="text-4xl font-bold mb-4">{project.Title}</h1>
      <img src={project.Img} alt={project.Title} className="w-full rounded-2xl mb-6 object-cover aspect-[16/9]" />
      <p className="text-gray-300 leading-relaxed mb-6">{project.Description}</p>

      <div className="flex gap-4">
        {project.Link && (
          <a href={project.Link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 rounded-xl hover:bg-indigo-700">
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
        )}
        {project.Github && (
          <a href={project.Github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white/10 rounded-xl hover:bg-white/20">
            <Github className="w-4 h-4" /> GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;