"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, XCircle } from "lucide-react";

type ComplaintType = {
  _id: string;
  title: string;
  category: string;
  priority: string;
  status: string;
  description: string;
  createdAt: string;
};

export function AdminComplaintsTable() {
  const [complaints, setComplaints] = useState<ComplaintType[]>([]);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const fetchComplaints = async () => {
    const res = await fetch("/api/complaints");
    const data = await res.json();
    setComplaints(data);
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    setLoadingId(id);
    try {
      const res = await fetch("/api/complaints", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        const updated = await res.json();
        setComplaints((prev) =>
          prev.map((c) => (c._id === updated._id ? updated : c))
        );
      } else {
        console.error("Failed to update status");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingId(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case "approved":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "rejected":
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return null;
    }
  };

  const stats = complaints.reduce(
    (acc, c) => {
      acc.total += 1;
      acc[c.status as "pending" | "approved" | "rejected"] += 1;
      return acc;
    },
    { total: 0, pending: 0, approved: 0, rejected: 0 }
  );

  return (
    <>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-6 border-l-4 border-l-blue-600 bg-white dark:bg-gray-800 rounded-lg shadow">
          <p className="text-sm font-medium text-muted-foreground mb-1">
            Total Complaints
          </p>
          <p className="text-3xl font-bold">{stats.total}</p>
        </div>
        <div className="p-6 border-l-4 border-l-yellow-500 bg-white dark:bg-gray-800 rounded-lg shadow">
          <p className="text-sm font-medium text-muted-foreground mb-1">Pending</p>
          <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
        </div>
        <div className="p-6 border-l-4 border-l-green-600 bg-white dark:bg-gray-800 rounded-lg shadow">
          <p className="text-sm font-medium text-muted-foreground mb-1">Approved</p>
          <p className="text-3xl font-bold text-green-600">{stats.approved}</p>
        </div>
        <div className="p-6 border-l-4 border-l-red-600 bg-white dark:bg-gray-800 rounded-lg shadow">
          <p className="text-sm font-medium text-muted-foreground mb-1">Rejected</p>
          <p className="text-3xl font-bold text-red-600">{stats.rejected}</p>
        </div>
      </div>

      {/* Table */}
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-900">
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Priority</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c) => (
            <tr key={c._id} className="border-b border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2">{c.title}</td>
              <td className="px-4 py-2">{c.category}</td>
              <td className="px-4 py-2">{c.priority}</td>
              <td className="px-4 py-2 flex items-center gap-2">
                {getStatusIcon(c.status)}
                <Badge className={getStatusColor(c.status)}>{c.status}</Badge>
              </td>
              <td className="px-4 gap-2 py-2 ">
                <Button
                  size="sm"
                  disabled={loadingId === c._id || c.status === "approved"}
                  onClick={() => updateStatus(c._id, "approved")}
                  className="bg-green-600 hover:bg-green-700 pl-4 mr-2"
                >
                  Approve
                </Button>
                <Button
                  size="sm"
                  disabled={loadingId === c._id || c.status === "rejected"}
                  onClick={() => updateStatus(c._id, "rejected")}
                  className="bg-red-600 hover:bg-red-700"
                >
                  Reject
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
