// /components/libs/Models/complain.ts
import mongoose from "mongoose";

const ComplaintSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
    },

    title: { type: String, required: true, trim: true },
    category: { type: String, required: true },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high", "urgent"],
      default: "low",
    },

    description: { type: String, default: "" },

    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.Complaint ||
  mongoose.model("Complaint", ComplaintSchema);
