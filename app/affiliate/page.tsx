"use client";

import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import { Link2, Copy, CheckCircle, Rocket, Users, Gift, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function BecomeAffiliate() {
  const { user, signInWithCrowbar } = useAuth();
  const [copied, setCopied] = useState(false);

  const link = user
    ? `https://crowbarltd.com/ref/${user.id}`
    : "Login to generate your link";

  const copyLink = () => {
    if (!user) return;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-24 px-6 overflow-hidden">
      {/* Floating blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-slate-200 text-slate-600 rounded-full text-sm shadow-sm">
            <Rocket className="w-4 h-4 text-indigo-500" />
            Crowbar Affiliate Program
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Become a{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Crowbar Affiliate
            </span>
          </h1>

          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Earn rewards by referring creators, professionals, and members to the Crowbar Connected Network.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {[
            {
              icon: <Users className="w-6 h-6 text-indigo-600" />,
              title: "Grow the Network",
              desc: "Invite creators & professionals to join Crowbar.",
            },
            {
              icon: <Gift className="w-6 h-6 text-purple-600" />,
              title: "Earn Per Referral",
              desc: "Get rewarded when they explore Crowbar apps.",
            },
            {
              icon: <Link2 className="w-6 h-6 text-blue-600" />,
              title: "Unique Link",
              desc: "Your referral link is auto-generated.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 bg-white/90 backdrop-blur-lg border border-slate-200 rounded-2xl shadow-md"
            >
              <div className="mb-3">{card.icon}</div>
              <h3 className="font-semibold text-slate-900 text-lg">{card.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Box */}
        {!user ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-10 bg-white/90 backdrop-blur-xl border border-slate-200 shadow-xl rounded-3xl text-center"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              Login to Generate Your Affiliate Link
            </h2>
            <p className="text-slate-600 mt-2">
              Use Crowbar SSO to access your referral dashboard.
            </p>

            <button
              onClick={signInWithCrowbar}
              className="mt-6 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white font-medium inline-flex items-center gap-2 shadow-lg transition"
            >
              Login with Crowbar
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-10 bg-white/90 backdrop-blur-xl border border-slate-200 shadow-xl rounded-3xl"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              Your Affiliate Link
            </h2>
            <p className="text-slate-600 mt-2">
              Share this link and earn rewards when people join.
            </p>

            <div className="mt-6 flex items-center bg-slate-100 rounded-xl p-3 pr-4">
              <pre className="font-mono text-sm text-slate-700 overflow-x-auto flex-1">
                {link}
              </pre>

              <button
                onClick={copyLink}
                className="ml-3 p-2 rounded-lg bg-white shadow hover:bg-slate-50 transition"
              >
                {copied ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <Copy className="w-5 h-5 text-slate-700" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
