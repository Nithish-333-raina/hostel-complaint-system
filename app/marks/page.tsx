'use client'

import { Sidebar } from '@/components/Sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GraduationCap, TrendingUp, Award, BookOpen } from 'lucide-react'

export default function MarksPage() {
  const marks = [
    { subject: 'Computer Networks', code: 'CS601', internal: 22, external: 68, total: 90, grade: 'S' },
    { subject: 'Operating Systems', code: 'CS602', internal: 24, external: 71, total: 95, grade: 'S' },
    { subject: 'Database Management', code: 'CS603', internal: 20, external: 65, total: 85, grade: 'A' },
    { subject: 'Theory of Computation', code: 'CS604', internal: 18, external: 62, total: 80, grade: 'A' },
    { subject: 'Software Engineering', code: 'CS605', internal: 23, external: 69, total: 92, grade: 'S' },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        <div className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border px-8 py-4 z-10">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            Academic Performance
          </h2>
          <p className="text-sm text-muted-foreground">Semester 6 Academic Records</p>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Student Marks</h1>
            <p className="text-muted-foreground">
              Detailed breakdown of your academic results and performance metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">CGPA</p>
                  <p className="text-2xl font-bold">8.84</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-transparent border-purple-500/20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-600 rounded-xl">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Current SGPA</p>
                  <p className="text-2xl font-bold">9.12</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-emerald-500/10 to-transparent border-emerald-500/20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-600 rounded-xl">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Credits Earned</p>
                  <p className="text-2xl font-bold">124 / 180</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="overflow-hidden border-border/50">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase bg-muted/50 text-muted-foreground">
                  <tr>
                    <th className="px-6 py-4">Subject</th>
                    <th className="px-6 py-4">Internal (30)</th>
                    <th className="px-6 py-4">External (70)</th>
                    <th className="px-6 py-4">Total (100)</th>
                    <th className="px-6 py-4 text-center">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {marks.map((item, index) => (
                    <tr key={index} className="bg-card hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-foreground">{item.subject}</div>
                        <div className="text-xs text-muted-foreground">{item.code}</div>
                      </td>
                      <td className="px-6 py-4 font-medium">{item.internal}</td>
                      <td className="px-6 py-4 font-medium">{item.external}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-md text-sm font-bold ${
                          item.total >= 90 ? 'text-blue-600' : 'text-foreground'
                        }`}>
                          {item.total}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold shadow-sm ${
                          item.grade === 'S' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-muted text-foreground border border-border'
                        }`}>
                          {item.grade}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
