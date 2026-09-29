import { useState } from 'react'
import { supabase } from "../supabase";
import { useNavigate } from 'react-router-dom'
import { Mail, Lock, LogIn, Sparkles, Eye, EyeOff } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) { 
      alert(error.message)
      setLoading(false)
      return 
    }

    const { data: profile } = await supabase
      .from('profiles').select('role').eq('id', data.user.id).single()

    if (profile?.role !== 'admin') {
      alert('Akses ditolak: Akun bukan admin.')
      await supabase.auth.signOut()
      setLoading(false)
      return
    }
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs">
              <Sparkles className="w-3.5 h-3.5" /> Admin Portal
            </div>
            <h1 className="text-2xl font-bold text-white">Login Dashboard</h1>
            <p className="text-gray-400 text-xs">Masuk untuk mengelola portfolio Anda</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs text-gray-400 block mb-1.5">Email</label>
              <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <Mail className="w-4 h-4 text-gray-400 mr-3" />
                <input
                  type="email"
                  placeholder="admin@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-transparent text-sm w-full text-white outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-400 block mb-1.5">Password</label>
              <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <Lock className="w-4 h-4 text-gray-400 mr-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-transparent text-sm w-full text-white outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50"
            >
              <LogIn className="w-4 h-4" /> {loading ? 'Memproses...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}