"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, XCircle, FileText } from "lucide-react";

type ComplaintType = {
  _id: string;
  title: string;
  category: string;
  priority: string;
  status: string;
  description: string;
  createdAt: string;
};

export default function MyComplaintsPage() {
  const [complaints, setComplaints] = useState<ComplaintType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const res = await fetch("/api/complaints", { cache: "no-store" });
        const data = await res.json();
        setComplaints(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchComplaints(); // first load

    const interval = setInterval(fetchComplaints, 3000); // auto refresh

    return () => clearInterval(interval);
  }, []);

  const statusIcon = (status: string) => {
    if (status === "pending") return <Clock className="text-yellow-500 w-4 h-4" />;
    if (status === "approved")
      return <CheckCircle className="text-green-500 w-4 h-4" />;
    return <XCircle className="text-red-500 w-4 h-4" />;
  };

  const statusColor = (status: string) => {
    if (status === "pending") return "bg-yellow-100 text-yellow-800";
    if (status === "approved") return "bg-green-100 text-green-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">My Complaints</h1>

        {loading ? (
          <p>Loading...</p>
        ) : complaints.length === 0 ? (
          <p>No complaints yet.</p>
        ) : (
          <div className="space-y-4">
            {complaints.map((c) => (
              <Card key={c._id} className="p-5">
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <FileText className="text-blue-500" />
                    <div>
                      <h3 className="font-bold">{c.title}</h3>
                      <p className="text-sm text-gray-500">
                        {c.category} •{" "}
                        {new Date(c.createdAt).toDateString()}
                      </p>
                      <p className="text-sm mt-1">{c.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {statusIcon(c.status)}
                    <Badge className={statusColor(c.status)}>
                      {c.status}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
