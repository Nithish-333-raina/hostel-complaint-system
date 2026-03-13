'use client'

import { Sidebar } from '@/components/Sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LogOut, CalendarCheck, CheckCircle2, XCircle, AlertCircle, Calendar as CalendarIcon } from 'lucide-react'

export default function AttendancePage() {
  const attendanceData = [
    { date: 'Mar 10, 2026', day: 'Monday', status: 'Present', details: 'Regular Class' },
    { date: 'Mar 09, 2026', day: 'Sunday', status: 'Holiday', details: 'Weekend' },
    { date: 'Mar 08, 2026', day: 'Saturday', status: 'Present', details: 'Lab Session' },
    { date: 'Mar 07, 2026', day: 'Friday', status: 'Absent', details: 'Medical Leave' },
    { date: 'Mar 06, 2026', day: 'Thursday', status: 'Present', details: 'Regular Class' },
    { date: 'Mar 05, 2026', day: 'Wednesday', status: 'Present', details: 'Seminar' },
    { date: 'Mar 04, 2026', day: 'Tuesday', status: 'Present', details: 'Regular Class' },
  ]

  const stats = {
    percentage: 85.5,
    present: 42,
    absent: 5,
    late: 2
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        <div className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border px-8 py-4 flex items-center justify-between z-10">
          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <CalendarCheck className="w-5 h-5 text-emerald-600" />
              Attendance Record
            </h2>
            <p className="text-sm text-muted-foreground">Monitor your daily presence</p>
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">My Attendance</h1>
            <p className="text-muted-foreground">
              Track your attendance percentage and detailed daily logs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-6 border-t-4 border-t-emerald-600">
              <p className="text-muted-foreground text-sm font-medium mb-1">Attendance Rate</p>
              <p className="text-4xl font-bold text-emerald-600">{stats.percentage}%</p>
            </Card>
            <Card className="p-6 border-t-4 border-t-blue-600">
              <p className="text-muted-foreground text-sm font-medium mb-1">Days Present</p>
              <p className="text-4xl font-bold text-blue-600">{stats.present}</p>
            </Card>
            <Card className="p-6 border-t-4 border-t-red-600">
              <p className="text-muted-foreground text-sm font-medium mb-1">Days Absent</p>
              <p className="text-4xl font-bold text-red-600">{stats.absent}</p>
            </Card>
            <Card className="p-6 border-t-4 border-t-yellow-600">
              <p className="text-muted-foreground text-sm font-medium mb-1">Late Marks</p>
              <p className="text-4xl font-bold text-yellow-600">{stats.late}</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <h3 className="font-bold text-lg">Recent Logs</h3>
                  <Button variant="ghost" size="sm">View Full History</Button>
                </div>
                <div className="divide-y divide-border/50">
                  {attendanceData.map((log, index) => (
                    <div key={index} className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${
                          log.status === 'Present' ? 'bg-emerald-500/10 text-emerald-600' :
                          log.status === 'Absent' ? 'bg-red-500/10 text-red-600' :
                          log.status === 'Holiday' ? 'bg-blue-500/10 text-blue-600' :
                          'bg-slate-500/10 text-slate-600'
                        }`}>
                          {log.status === 'Present' ? <CheckCircle2 className="w-5 h-5" /> :
                           log.status === 'Absent' ? <XCircle className="w-5 h-5" /> :
                           <AlertCircle className="w-5 h-5" />}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{log.date}</p>
                          <p className="text-xs text-muted-foreground">{log.day} • {log.details}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        log.status === 'Present' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                        log.status === 'Absent' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                        'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {log.status}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-blue-600" />
                  Monthly Calendar
                </h3>
                <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-muted-foreground italic border border-dashed border-border/50">
                  [Interactive Calendar Component Placeholder]
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Required Attendance</span>
                    <span className="font-medium text-foreground">75%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-600 transition-all duration-1000" 
                      style={{ width: '85.5%' }}
                    />
                  </div>
                  <p className="text-[10px] text-muted-foreground text-center">
                    You are 10.5% above the minimum threshold. Keep it up!
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-blue-600 text-white shadow-xl shadow-blue-600/20">
                <h4 className="font-bold mb-2">Short Attendance Notice</h4>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Students with attendance below 75% will not be eligible for external examinations.
                </p>
                <Button className="w-full mt-4 bg-white text-blue-600 hover:bg-blue-50">
                  Contact Dean
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
