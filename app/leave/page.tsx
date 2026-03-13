'use client'

import { Sidebar } from '@/components/Sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LogOut, ClipboardList, Plus, Clock, CheckCircle2, XCircle, FileText } from 'lucide-react'

export default function LeavePage() {
  const leaveRequests = [
    { 
      id: 'L-2024-001', 
      type: 'Sick Leave', 
      from: 'Mar 07, 2026', 
      to: 'Mar 07, 2026', 
      status: 'Approved', 
      reason: 'Fever and cold',
      appliedAt: 'Mar 06, 2026'
    },
    { 
      id: 'L-2024-002', 
      type: 'Vacation', 
      from: 'Feb 15, 2026', 
      to: 'Feb 18, 2026', 
      status: 'Rejected', 
      reason: 'Personal family event',
      appliedAt: 'Feb 10, 2026'
    },
    { 
      id: 'L-2024-003', 
      type: 'Other', 
      from: 'Jan 20, 2026', 
      to: 'Jan 22, 2026', 
      status: 'Approved', 
      reason: 'Brother\'s wedding',
      appliedAt: 'Jan 15, 2026'
    },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        <div className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border px-8 py-4 flex items-center justify-between z-10">
          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-indigo-600" />
              Leave Management
            </h2>
            <p className="text-sm text-muted-foreground">Apply for and track leave requests</p>
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Leave Requests</h1>
              <p className="text-muted-foreground">
                Manage your leaves and view history of your applications
              </p>
            </div>
            <Button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 py-6 px-6 h-auto text-lg rounded-xl">
              <Plus className="w-6 h-6" />
              New Application
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-indigo-50 dark:bg-indigo-900/10 border-indigo-200 dark:border-indigo-900/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-600 dark:text-indigo-400 font-bold mb-1">Total Leaves</p>
                  <p className="text-3xl font-extrabold">12 Days</p>
                </div>
                <div className="p-3 bg-indigo-600 text-white rounded-xl">
                  <FileText className="w-6 h-6" />
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-900/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-600 dark:text-emerald-400 font-bold mb-1">Used Leaves</p>
                  <p className="text-3xl font-extrabold">5 Days</p>
                </div>
                <div className="p-3 bg-emerald-600 text-white rounded-xl">
                   <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-900/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-amber-600 dark:text-amber-400 font-bold mb-1">Remaining</p>
                  <p className="text-3xl font-extrabold">7 Days</p>
                </div>
                <div className="p-3 bg-amber-600 text-white rounded-xl">
                  <Clock className="w-6 h-6" />
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-0 border-border/50">
            <div className="p-6 border-b border-border">
              <h3 className="text-xl font-bold">Application History</h3>
            </div>
            <div className="divide-y divide-border/50">
              {leaveRequests.map((request, index) => (
                <div key={index} className="p-6 hover:bg-muted/30 transition-all group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`mt-1 p-3 rounded-2xl ${
                        request.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-600' :
                        request.status === 'Rejected' ? 'bg-red-500/10 text-red-600' :
                        'bg-amber-500/10 text-amber-600'
                      }`}>
                         {request.status === 'Approved' ? <CheckCircle2 className="w-6 h-6" /> :
                          request.status === 'Rejected' ? <XCircle className="w-6 h-6" /> :
                          <Clock className="w-6 h-6" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h4 className="font-bold text-lg text-foreground">{request.type}</h4>
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-md font-mono">{request.id}</span>
                        </div>
                        <p className="text-sm text-foreground mb-1 mt-1 font-medium">{request.reason}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                           <span className="flex items-center gap-1">
                             <Clock className="w-3 h-3 text-indigo-500" />
                             Applied on: {request.appliedAt}
                           </span>
                           <span className="flex items-center gap-1">
                             <ClipboardList className="w-3 h-3 text-emerald-500" />
                             Duration: {request.from} to {request.to}
                           </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold border-2 ${
                        request.status === 'Approved' ? 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-900/50' :
                        request.status === 'Rejected' ? 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-900/50' :
                        'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-900/50'
                      }`}>
                        {request.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 bg-muted/20 border-t border-border flex justify-center">
              <Button variant="link" className="text-muted-foreground hover:text-indigo-600 font-bold uppercase tracking-widest text-xs">
                View All Archives
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
