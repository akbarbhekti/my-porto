import React, { useState, useEffect, useCallback } from 'react';
import { MessageCircle, UserCircle2, Loader2, Send } from 'lucide-react';
import { supabase } from '../supabase';

const Komentar = () => {
    const [comments, setComments] = useState([]);
    const [userName, setUserName] = useState('');
    const [newComment, setNewComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchComments = async () => {
        const { data } = await supabase
            .from('portfolio_comments')
            .select('*')
            .order('is_pinned', { ascending: false })
            .order('created_at', { ascending: false });
        setComments(data || []);
    };

    useEffect(() => {
        fetchComments();
        const channel = supabase
            .channel('comments_realtime')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'portfolio_comments' }, () => {
                fetchComments();
            })
            .subscribe();

        return () => supabase.removeChannel(channel);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userName.trim() || !newComment.trim()) return;

        setIsSubmitting(true);
        await supabase.from('portfolio_comments').insert([
            { user_name: userName, content: newComment, is_pinned: false }
        ]);

        setNewComment('');
        setIsSubmitting(false);
        fetchComments();
    };

    return (
        <div className="w-full bg-gradient-to-b from-white/10 to-white/5 rounded-2xl backdrop-blur-xl p-6 shadow-xl">
            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/10">
                <MessageCircle className="w-6 h-6 text-indigo-400" />
                <h3 className="text-xl font-semibold text-white">Komentar ({comments.length})</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Nama Anda"
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 outline-none focus:border-indigo-500"
                    required
                />
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Tulis komentar atau pesan Anda..."
                    rows={3}
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 outline-none focus:border-indigo-500 resize-none"
                    required
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50"
                >
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    Kirim Komentar
                </button>
            </form>

            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                {comments.map((comment) => (
                    <div key={comment.id} className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-sm text-indigo-300">{comment.user_name}</span>
                            {comment.is_pinned && <span className="text-xs text-purple-400 font-bold">📌 Pinned</span>}
                        </div>
                        <p className="text-sm text-gray-300">{comment.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Komentar;