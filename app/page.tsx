"use client";

import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  Link as LinkIcon,
  BarChart3,
  Users,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const { user, signInWithCrowbar } = useAuth();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-24 px-6 overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[-8rem] right-[-6rem] w-[520px] h-[520px] bg-purple-300/25 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* Hero Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md border border-slate-200 rounded-full text-sm shadow-sm text-slate-600"
        >
          <Sparkles className="w-4 h-4 text-purple-500" />
          Crowbar Creator Program
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight"
        >
          Grow With  
          <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Crowbar Affiliate Hub
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 max-w-2xl mt-6"
        >
          Earn rewards by introducing new members to the Crowbar ecosystem.  
          Get your unique link, track conversions, and grow your influence.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="/affiliate"
            className="px-7 py-3.5 bg-indigo-600 text-white text-sm md:text-base font-semibold rounded-xl shadow-lg shadow-indigo-400/20 hover:bg-indigo-700 flex items-center gap-2"
          >
            Become an Affiliate
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/stats"
            className="px-7 py-3.5 border border-slate-300 bg-white/70 backdrop-blur-md hover:bg-white text-sm md:text-base rounded-xl font-medium"
          >
            View Stats
          </a>
        </motion.div>

        {/* LOGIN REMINDER (IF LOGGED OUT) */}
        {!user && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <button
              onClick={signInWithCrowbar}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md hover:scale-[1.03] transition flex items-center gap-2"
            >
              Login with Crowbar SSO
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* BENEFITS SECTION */}
        <div className="grid md:grid-cols-3 gap-6 mt-24">
          {[
            {
              title: "Creator Growth Engine",
              icon: (
                <Rocket className="w-10 h-10 text-indigo-500" />
              ),
              desc: "Grow your influence with Crowbar’s rapidly expanding connected ecosystem.",
            },
            {
              title: "Unique Referral Links",
              icon: <LinkIcon className="w-10 h-10 text-purple-600" />,
              desc: "Generate your own referral link and start earning credits instantly.",
            },
            {
              title: "Track Performance",
              icon: <BarChart3 className="w-10 h-10 text-blue-500" />,
              desc: "Monitor your clicks, conversions, and rewards in real time.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg border border-slate-200"
            >
              {item.icon}
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
