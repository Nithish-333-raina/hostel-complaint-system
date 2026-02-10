'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Sidebar } from '@/components/Sidebar'
import { LogOut } from 'lucide-react'

export default function DashboardPage() {
  const [stats] = useState({ total: 8, pending: 3, approved: 4, rejected: 1 })

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        <div className="sticky top-0 bg-background border-b border-border px-8 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <p className="text-sm text-muted-foreground">Welcome back, John Doe</p>
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Your Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor and manage all your complaints in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="p-6 border-l-4 border-l-blue-600">
              <p className="text-muted-foreground text-sm font-medium mb-1">Total Complaints</p>
              <p className="text-4xl font-bold text-foreground">{stats.total}</p>
            </Card>
            <Card className="p-6 border-l-4 border-l-yellow-500">
              <p className="text-muted-foreground text-sm font-medium mb-1">Pending</p>
              <p className="text-4xl font-bold text-yellow-600">{stats.pending}</p>
            </Card>
            <Card className="p-6 border-l-4 border-l-green-600">
              <p className="text-muted-foreground text-sm font-medium mb-1">Approved</p>
              <p className="text-4xl font-bold text-green-600">{stats.approved}</p>
            </Card>
            <Card className="p-6 border-l-4 border-l-red-600">
              <p className="text-muted-foreground text-sm font-medium mb-1">Rejected</p>
              <p className="text-4xl font-bold text-red-600">{stats.rejected}</p>
            </Card>
          </div>

          <Card className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Register a Complaint</h3>
                <p className="text-muted-foreground mt-1">File a new complaint or report an issue</p>
              </div>
              <Link href="/complaints/new">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  New Complaint
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
