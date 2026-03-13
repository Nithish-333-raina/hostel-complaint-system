'use client'

import { Sidebar } from '@/components/Sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Database, 
  Mail, 
  Globe, 
  Trash2, 
  Save,
  Key
} from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b px-8 py-5 z-10">
          <h2 className="text-xl font-bold tracking-tight">System Settings</h2>
          <p className="text-sm text-muted-foreground">Manage system configurations and administrative preferences</p>
        </div>

        <div className="p-8 max-w-4xl mx-auto space-y-8">
          {/* General Configuration */}
          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <SettingsIcon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <CardTitle>General Configuration</CardTitle>
                <CardDescription>Primary system identification and global settings</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="systemName">System Display Name</Label>
                  <Input id="systemName" defaultValue="ComplaintHub - Hostel Edition" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supportEmail">Primary Support Email</Label>
                  <Input id="supportEmail" defaultValue="support@hostel.com" />
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                <div className="space-y-0.5">
                  <Label className="text-base">System Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground text-pretty">
                    Disable all student-facing portals for scheduled maintenance.
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {/* Notification Preferences */}
          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/20">
                <Bell className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <CardTitle>Notification Protocols</CardTitle>
                <CardDescription>Control how staff and students are alerted</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div className="space-y-0.5">
                  <Label>Email Alerts for Critical Priority</Label>
                  <p className="text-sm text-muted-foreground">Instantly alert wardens for critical maintenance issues.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="space-y-0.5">
                  <Label>Student Status Updates</Label>
                  <p className="text-sm text-muted-foreground">Notify students when complaint status changes.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="space-y-0.5">
                  <Label>Weekly Analytics Digest</Label>
                  <p className="text-sm text-muted-foreground">Send summary statistics to admin email every Monday.</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {/* Security & Access */}
          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <CardTitle>Security & Access Control</CardTitle>
                <CardDescription>Manage administrative security and data integrity</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Admin Session Timeout</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option>30 Minutes</option>
                  <option>1 Hour</option>
                  <option>8 Hours</option>
                  <option>Never</option>
                </select>
              </div>
              <div className="space-y-4 pt-2">
                 <Button variant="outline" className="w-full flex justify-between px-6 h-12">
                   <div className="flex items-center gap-3">
                     <Key className="w-4 h-4" />
                     <span>Update Master Admin Credentials</span>
                   </div>
                   <Save className="w-4 h-4 opacity-50" />
                 </Button>
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-red-100 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/10 shadow-none">
            <CardHeader>
              <CardTitle className="text-red-700 dark:text-red-400">Critical Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm">Purge Archived Complaints</p>
                  <p className="text-xs text-muted-foreground">Permanently delete all complaints older than 2 years.</p>
                </div>
                <Button variant="destructive" size="sm">Purge Data</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm">Reset System Database</p>
                  <p className="text-xs text-muted-foreground">Wipe all data and factory reset the system.</p>
                </div>
                <Button variant="destructive" size="sm">Reset Everything</Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="ghost">Cancel Changes</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 h-11 rounded-lg">Apply Configuration</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
