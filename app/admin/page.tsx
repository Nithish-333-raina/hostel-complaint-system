'use client'

import { Sidebar } from '@/components/Sidebar'
import { AdminComplaintsTable } from '@/components/AdminComplaintsTable'

export default function AdminPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="sticky top-0 bg-background border-b border-border px-8 py-4">
          <h2 className="text-lg font-semibold">Administration</h2>
          <p className="text-sm text-muted-foreground">Review and manage all complaints</p>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor and manage all student complaints across the system
            </p>
          </div>

          <AdminComplaintsTable />
        </div>
      </main>
    </div>
  )
}
