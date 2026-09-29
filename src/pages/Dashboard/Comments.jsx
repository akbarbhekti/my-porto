import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import { MessageSquare, Pin, PinOff, Trash2 } from "lucide-react";

export default function Comments() {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const { data } = await supabase
      .from("portfolio_comments")
      .select("*")
      .order("is_pinned", { ascending: false })
      .order("created_at", { ascending: false });
    setComments(data || []);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const togglePin = async (id, currentVal) => {
    await supabase.from("portfolio_comments").update({ is_pinned: !currentVal }).eq("id", id);
    fetchComments();
  };

  const handleDelete = async (id) => {
    if (confirm("Hapus komentar ini?")) {
      await supabase.from("portfolio_comments").delete().eq("id", id);
      fetchComments();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Kelola Komentar</h1>
        <p className="text-gray-400 text-xs">Total: {comments.length} komentar</p>
      </div>

      <div className="space-y-3">
        {comments.map((c) => (
          <div
            key={c.id}
            className={`p-4 rounded-xl border flex items-start justify-between gap-4 ${
              c.is_pinned ? "bg-indigo-500/10 border-indigo-500/30" : "bg-white/5 border-white/10"
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-sm text-indigo-300">{c.user_name}</span>
                {c.is_pinned && <span className="text-xs text-purple-400 font-semibold">📌 Pinned</span>}
              </div>
              <p className="text-sm text-gray-300">{c.content}</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => togglePin(c.id, c.is_pinned)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white"
                title={c.is_pinned ? "Unpin" : "Pin"}
              >
                {c.is_pinned ? <PinOff className="w-4 h-4" /> : <Pin className="w-4 h-4" />}
              </button>
              <button
                onClick={() => handleDelete(c.id)}
                className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20"
                title="Hapus"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}