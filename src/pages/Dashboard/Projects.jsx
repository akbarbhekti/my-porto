import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import { Plus, Trash2, FolderGit2, X, Upload } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [github, setGithub] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const fetchProjects = async () => {
    const { data } = await supabase.from("projects").select("*").order("id", { ascending: false });
    setProjects(data || []);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    setUploading(true);

    let imgUrl = "";
    if (file) {
      const fileName = `project-${Date.now()}-${file.name}`;
      await supabase.storage.from("project-images").upload(fileName, file);
      const { data } = supabase.storage.from("project-images").getPublicUrl(fileName);
      imgUrl = data.publicUrl;
    }

    await supabase.from("projects").insert([
      { Title: title, Description: description, Link: link, Github: github, Img: imgUrl }
    ]);

    setShowModal(false);
    setTitle("");
    setDescription("");
    setLink("");
    setGithub("");
    setFile(null);
    setUploading(false);
    fetchProjects();
  };

  const handleDelete = async (id) => {
    if (confirm("Hapus proyek ini?")) {
      await supabase.from("projects").delete().eq("id", id);
      fetchProjects();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Kelola Projects</h1>
          <p className="text-gray-400 text-xs">Total: {projects.length} proyek</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 rounded-xl hover:bg-indigo-700 text-sm font-medium"
        >
          <Plus className="w-4 h-4" /> Tambah Proyek
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0f0b24] border border-white/10 rounded-2xl p-6 w-full max-w-lg space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Tambah Proyek Baru</h3>
              <button onClick={() => setShowModal(false)}><X className="w-5 h-5 text-gray-400" /></button>
            </div>
            <form onSubmit={handleUpload} className="space-y-3">
              <input
                type="text"
                placeholder="Judul Proyek"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 bg-white/5 border border-white/10 rounded-xl outline-none text-sm text-white"
              />
              <textarea
                placeholder="Deskripsi Proyek"
                rows={3}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 bg-white/5 border border-white/10 rounded-xl outline-none text-sm text-white resize-none"
              />
              <input
                type="url"
                placeholder="Live Demo URL (https://...)"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="w-full p-3 bg-white/5 border border-white/10 rounded-xl outline-none text-sm text-white"
              />
              <input
                type="url"
                placeholder="GitHub Repo URL (https://...)"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                className="w-full p-3 bg-white/5 border border-white/10 rounded-xl outline-none text-sm text-white"
              />
              <div>
                <label className="text-xs text-gray-400 block mb-1">Gambar Screenshot Proyek</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="w-full text-xs text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-indigo-600 file:text-white"
                />
              </div>
              <button
                type="submit"
                disabled={uploading}
                className="w-full py-3 bg-indigo-600 rounded-xl text-sm font-medium hover:bg-indigo-700 disabled:opacity-50"
              >
                {uploading ? "Mengupload..." : "Simpan Proyek"}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div key={p.id} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between">
            {p.Img && <img src={p.Img} alt={p.Title} className="w-full h-40 object-cover rounded-xl mb-3" />}
            <h4 className="font-bold text-base">{p.Title}</h4>
            <p className="text-xs text-gray-400 line-clamp-2 my-2">{p.Description}</p>
            <button
              onClick={() => handleDelete(p.id)}
              className="mt-3 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 text-xs"
            >
              <Trash2 className="w-3.5 h-3.5" /> Hapus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}