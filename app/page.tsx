'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FileText, Users, CheckCircle, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center font-bold text-white text-sm">
              C
            </div>
            <span className="font-bold text-lg">ComplaintHub</span>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Student Complaint Management System
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Report, track, and resolve complaints efficiently. Administrators can review and take action on all submissions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
            <Link href="/dashboard">
              <Button size="lg" className="w-full h-16 text-lg bg-blue-600 hover:bg-blue-700">
                <Users className="w-6 h-6 mr-2" />
                Enter as Student
              </Button>
            </Link>
            <Link href="/admin">
              <Button size="lg" className="w-full h-16 text-lg bg-purple-600 hover:bg-purple-700">
                <FileText className="w-6 h-6 mr-2" />
                Enter as Admin
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-6">
            <FileText className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="font-bold mb-2">Easy Submission</h3>
            <p className="text-sm text-muted-foreground">File complaints with detailed information and priority levels</p>
          </Card>
          <Card className="p-6">
            <CheckCircle className="w-10 h-10 text-green-600 mb-3" />
            <h3 className="font-bold mb-2">Real-time Tracking</h3>
            <p className="text-sm text-muted-foreground">Monitor your complaints and get instant updates</p>
          </Card>
          <Card className="p-6">
            <Users className="w-10 h-10 text-purple-600 mb-3" />
            <h3 className="font-bold mb-2">Admin Dashboard</h3>
            <p className="text-sm text-muted-foreground">Comprehensive tools for managing and resolving complaints</p>
          </Card>
          <Card className="p-6">
            <Zap className="w-10 h-10 text-yellow-600 mb-3" />
            <h3 className="font-bold mb-2">Fast Resolution</h3>
            <p className="text-sm text-muted-foreground">Efficient workflow to handle complaints quickly</p>
          </Card>
        </div>

        <Card className="p-12 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-0 text-center">
          <h2 className="text-3xl font-bold mb-4">Choose Your Role</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Select your role to access the appropriate dashboard and begin managing complaints.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link href="/dashboard">
              <Button className="w-full h-14 text-base bg-blue-600 hover:bg-blue-700">
                Student Dashboard
              </Button>
            </Link>
            <Link href="/admin">
              <Button className="w-full h-14 text-base bg-purple-600 hover:bg-purple-700">
                Admin Dashboard
              </Button>
            </Link>
          </div>
        </Card>
      </main>

      <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          <p>© 2024 ComplaintHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
