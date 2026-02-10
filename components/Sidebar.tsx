'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, FileText, Settings, BarChart3 } from 'lucide-react'

export function Sidebar() {
  const pathname = usePathname()
  const isAdmin = pathname.includes('/admin')

  const studentLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/my-complaints', label: 'My Complaints', icon: FileText },
  ]

  const adminLinks = [
    { href: '/admin', label: 'All Complaints', icon: FileText },
    { href: '/admin/statistics', label: 'Statistics', icon: BarChart3 },
    { href: '/admin/settings', label: 'Settings', icon: Settings },
  ]

  const links = isAdmin ? adminLinks : studentLinks

  return (
    <aside className="w-64 bg-gradient-to-b from-slate-900 to-slate-950 text-white h-screen flex flex-col border-r border-slate-800">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center font-bold text-lg">
            C
          </div>
          <div>
            <h1 className="text-xl font-bold">Complaint</h1>
            <p className="text-xs text-slate-400">System</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{link.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-slate-800 space-y-3">
        <div className="bg-slate-800/50 rounded-lg p-3">
          <p className="text-sm font-medium">John Doe</p>
          <p className="text-xs text-slate-400 mt-1">
            {isAdmin ? 'Administrator' : 'Student'}
          </p>
        </div>
        <button className="w-full py-2 px-3 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors">
          Profile Settings
        </button>
      </div>
    </aside>
  )
}
