'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  FileText,
  Users,
  CheckCircle,
  Zap,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
  MousePointer2,
  Lock,
  Search
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none tracking-tight">ComplaintHub</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold"></span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How it Works</a>
            <a href="#roles" className="hover:text-blue-600 transition-colors">Portals</a>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/admin">
              <Button variant="ghost" size="sm" className="hidden sm:flex text-slate-600 dark:text-slate-400">
                Admin Panel
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-100/50 dark:bg-blue-900/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-indigo-100/50 dark:bg-indigo-900/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Smarter Hostel Management
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Voice Your <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Concerns</span>, Get Resolutions.
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                Empowering students to report issues and helping hostel administration resolve them faster than ever with ComplaintHub.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/dashboard" className="flex-1 max-w-[200px]">
                  <Button size="lg" className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-700 text-lg shadow-xl shadow-blue-500/20 group">
                    Enter Portal
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/admin" className="flex-1 max-w-[200px]">
                  <Button size="lg" variant="outline" className="w-full h-14 rounded-xl border-2 text-lg hover:bg-slate-50 dark:hover:bg-slate-900">
                    Administrator
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 py-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex -space-x-3">
                  {[
                    { letter: 'A', bg: 'bg-gradient-to-br from-blue-500 to-blue-700' },
                    { letter: 'B', bg: 'bg-gradient-to-br from-emerald-500 to-emerald-700' },
                    { letter: 'C', bg: 'bg-gradient-to-br from-purple-500 to-purple-700' },
                    { letter: 'D', bg: 'bg-gradient-to-br from-orange-500 to-orange-700' },
                  ].map((item, i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white dark:border-slate-950 ${item.bg} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                      {item.letter}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-bold">500+ Students</div>
                  <div className="text-muted-foreground whitespace-nowrap">using ComplaintHub daily</div>
                </div>
              </div>
            </div>

            <div className="relative lg:block hidden">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/20">
                <Image
                  src="/hero.png"
                  alt="Dashboard Preview"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400/20 blur-3xl rounded-full" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400/20 blur-3xl rounded-full" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Core Principles</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Designed for Seamless Operations</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
              "Efficiency is not just about speed, it's about transparency and trust."
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Rapid Filing",
                desc: "Express your concerns in seconds with our intuitive, low-friction submission form.",
                color: "bg-blue-500"
              },
              {
                icon: CheckCircle,
                title: "Real-time Tracking",
                desc: "Stay updated on your complaint's journey from submission to resolution.",
                color: "bg-green-500"
              },
              {
                icon: ShieldCheck,
                title: "Secure & Fair",
                desc: "Enterprise-grade security ensuring every student's voice is heard fairly.",
                color: "bg-purple-500"
              },
              {
                icon: Zap,
                title: "Fast Response",
                desc: "Optimized administrative workflow to minimize resolution timelines.",
                color: "bg-orange-500"
              }
            ].map((f, i) => (
              <Card key={i} className="p-8 border-none bg-slate-50 dark:bg-slate-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-6 shadow-lg shadow-${f.color.split('-')[1]}-500/20`}>
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {f.desc}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl lg:text-5xl font-extrabold mb-8 leading-tight">
                  A Workflow Tailored for <span className="text-blue-600">Accountability</span>
                </h2>
                <div className="space-y-10 relative">
                  <div className="absolute left-6 top-8 bottom-8 w-px bg-slate-200 dark:bg-slate-800 -z-10" />
                  {[
                    {
                      icon: MousePointer2,
                      title: "Submit Complaint",
                      desc: "Select category, set priority, and describe the issue with optional attachments."
                    },
                    {
                      icon: Search,
                      title: "Admin Review",
                      desc: "Administration receives instant alerts to review and verify the submission."
                    },
                    {
                      icon: Lock,
                      title: "Action Taken",
                      desc: "Status updates are logged, providing historical proof of the resolution process."
                    }
                  ].map((s, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center shrink-0 group-hover:border-blue-600 transition-colors">
                        <s.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-full bg-gradient-to-tr from-blue-600/10 to-indigo-600/10 absolute inset-0 -z-10 animate-pulse" />
                <div className="p-8 bg-white dark:bg-slate-900 backdrop-blur-md rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl">
                  <div className="space-y-5">
                    {/* Form Header */}
                    <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                      <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-foreground">New Complaint</p>
                        <p className="text-[11px] text-muted-foreground">Fill in the details below</p>
                      </div>
                    </div>

                    {/* Title Field */}
                    <div>
                      <p className="text-[11px] font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Title</p>
                      <div className="h-10 w-full bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center px-3">
                        <span className="text-sm text-muted-foreground">Water leakage in Room 204</span>
                      </div>
                    </div>

                    {/* Category & Priority */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-[11px] font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Category</p>
                        <div className="h-10 w-full bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-between px-3">
                          <span className="text-sm text-foreground">Facilities</span>
                          <ArrowRight className="w-3 h-3 text-muted-foreground rotate-90" />
                        </div>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Priority</p>
                        <div className="h-10 w-full bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800 flex items-center justify-between px-3">
                          <span className="text-sm text-red-600 font-medium">Urgent</span>
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <p className="text-[11px] font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Description</p>
                      <div className="h-16 w-full bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-3">
                        <span className="text-xs text-muted-foreground leading-relaxed">Continuous water leakage from the ceiling of Room 204, causing damage to personal belongings...</span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="h-11 w-full bg-blue-600 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25">
                      <span className="text-white font-semibold text-sm">Submit Complaint</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roles / Final CTA */}
        <section id="roles" className="py-24 bg-blue-600 dark:bg-blue-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="grid grid-cols-6 h-full">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="border border-white/20" />
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Ready to streamline your hostel communications?</h2>
            <p className="text-xl text-blue-100 mb-12 opacity-90">
              Join hundreds of residents and administrators already benefiting from a unified system.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/dashboard">
                <Button size="lg" className="w-full h-16 rounded-2xl bg-white text-blue-600 hover:bg-blue-50 text-xl font-bold shadow-2xl group">
                  <Users className="mr-3 w-6 h-6" />
                  Student Portal
                </Button>
              </Link>
              <Link href="/admin">
                <Button size="lg" variant="outline" className="w-full h-16 rounded-2xl bg-transparent border-2 border-white/30 hover:bg-white/10 text-white text-xl font-bold">
                  <ShieldCheck className="mr-3 w-6 h-6 text-white" />
                  Admin Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
              C
            </div>
            <span className="font-bold text-slate-900 dark:text-white">ComplaintHub</span>
          </div>

          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
            <a href="#" className="hover:text-blue-600">Support</a>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2025 ComplaintHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
