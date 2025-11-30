"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  MousePointerClick,
  Coins,
  Clock,
  Rocket,
} from "lucide-react";

export default function StatsPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-24 px-6 overflow-hidden">
      {/* Blurred Background Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full text-sm text-slate-600 shadow-sm">
            <Rocket className="w-4 h-4 text-indigo-500" />
            Crowbar Affiliate Hub
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Affiliate{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Stats Dashboard
            </span>
          </h1>

          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            View your affiliate performance — clicks, conversions, and total earnings.
            Full analytics coming soon.
          </p>
        </motion.div>

        {/* Stats Cards (Placeholder) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {[
            {
              icon: <MousePointerClick className="w-7 h-7 text-blue-600" />,
              label: "Total Clicks",
              value: "0",
            },
            {
              icon: <Users className="w-7 h-7 text-purple-600" />,
              label: "Signups",
              value: "0",
            },
            {
              icon: <Coins className="w-7 h-7 text-emerald-600" />,
              label: "Earnings",
              value: "₹0",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 bg-white/90 backdrop-blur-lg border border-slate-200 rounded-2xl shadow-md"
            >
              <div className="mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-slate-600 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-10 bg-white/90 backdrop-blur-xl border border-slate-200 shadow-xl rounded-3xl text-center"
        >
          <Clock className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-slate-900">
            Detailed Stats Coming Soon
          </h2>
          <p className="text-slate-600 mt-2">
            Track advanced analytics like engagement, conversions, and reward breakdowns.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            This dashboard will auto-sync with Crowbar Referral Engine.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
