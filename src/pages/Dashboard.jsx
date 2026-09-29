import { useState } from 'react'
import { Routes, Route, Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'
import Projects from './dashboard/Projects'
import Certificates from './dashboard/Certificates'
import Comments from './dashboard/Comments'
import { FolderGit2, Award, MessageSquare, LogOut, LayoutDashboard, Menu } from 'lucide-react'

const NAV_ITEMS = [
  { to: 'projects', label: 'Projects', icon: FolderGit2 },
  { to: 'certificates', label: 'Certificates', icon: Award },
  { to: 'comments', label: 'Comments', icon: MessageSquare },
]

export default function Dashboard() {
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  return (
    <div className="flex bg-[#030014] text-white min-h-screen">
      {/* Sidebar Desktop */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-white/10 bg-white/5 backdrop-blur-xl p-6 sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <h2 className="font-bold text-white leading-tight">Admin Panel</h2>
            <p className="text-xs text-gray-400">Akbar Bhekti</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {NAV_ITEMS.map(({ to, label, icon: Icon }) => {
            const active = location.pathname.includes(to)
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                  active
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" /> {label}
              </Link>
            )
          })}
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors text-sm"
        >
          <LogOut className="w-4 h-4" /> Keluar
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        <Routes>
          <Route index element={<Navigate to="projects" replace />} />
          <Route path="projects" element={<Projects />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="comments" element={<Comments />} />
        </Routes>
      </main>
    </div>
  )
}