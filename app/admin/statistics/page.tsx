'use client'

import { Sidebar } from '@/components/Sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line,
  Legend
} from 'recharts'
import { TrendingUp, Users, Clock, CheckCircle2, AlertCircle } from 'lucide-react'

// Static data for demonstration
const complaintData = [
  { name: 'Jan', count: 45 },
  { name: 'Feb', count: 52 },
  { name: 'Mar', count: 38 },
  { name: 'Apr', count: 65 },
  { name: 'May', count: 48 },
  { name: 'Jun', count: 59 },
]

const categoryData = [
  { name: 'Maintenance', value: 40 },
  { name: 'Water', value: 25 },
  { name: 'Electricity', value: 20 },
  { name: 'Wifi/Network', value: 15 },
]

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']

export default function StatisticsPage() {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b px-8 py-5 z-10 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold tracking-tight">System Statistics</h2>
            <p className="text-sm text-muted-foreground">Comprehensive analytics on system usage and resolution performance</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-blue-600">Growth: +12%</span>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Active Users', value: '1,284', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
              { label: 'Avg. Resolution', value: '14.5h', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-900/20' },
              { label: 'Resolved (MTD)', value: '89.2%', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/20' },
              { label: 'Critical Issues', value: '7', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50 dark:bg-red-900/20' },
            ].map((stat, i) => (
              <Card key={i} className="border-none shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-lg ${stat.bg}`}>
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Monthly Trends */}
            <Card className="lg:col-span-2 border-none shadow-sm">
              <CardHeader>
                <CardTitle>Complaint Volume Trends</CardTitle>
                <CardDescription>Monthly submission frequency over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={complaintData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="count" 
                      stroke="#3b82f6" 
                      strokeWidth={3} 
                      dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2 }} 
                      activeDot={{ r: 6, fill: '#3b82f6' }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Category Distribution */}
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle>Category Analysis</CardTitle>
                <CardDescription>Distribution by complaint type</CardDescription>
              </CardHeader>
              <CardContent className="h-[350px] flex flex-col items-center justify-center">
                <ResponsiveContainer width="100%" height="250px">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-4 mt-6 text-sm w-full">
                  {categoryData.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                      <span className="text-muted-foreground truncate">{item.name}</span>
                      <span className="font-semibold ml-auto">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Priority Resolution Performance</CardTitle>
              <CardDescription>Comparison of volume vs resolution rate by priority</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { priority: 'Critical', volume: 20, resolution: 100 },
                  { priority: 'High', volume: 45, resolution: 85 },
                  { priority: 'Medium', volume: 90, resolution: 70 },
                  { priority: 'Low', volume: 120, resolution: 65 },
                ]}>
                  <XAxis dataKey="priority" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="volume" fill="#94a3b8" radius={[4, 4, 0, 0]} name="Total Volume" />
                  <Bar dataKey="resolution" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Resolution Rate (%)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
