"use client";

import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { motion } from "framer-motion";
import { LogIn, LogOut, Rocket, Users } from "lucide-react";

export default function Navbar() {
  const { user, signInWithCrowbar, signOutUser } = useAuth();

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
      
      {/* Top Glow Line */}
      <div className="absolute inset-x-0 -top-4 h-10 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-80"></div>

      <div className="relative w-full  px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/40">
            <span className="text-white text-sm font-bold">CB</span>
          </div>

          <div>
            <span className="font-bold tracking-tight text-lg text-slate-900">
              Crowbar Affiliate Hub
            </span>
            <p className="text-xs text-slate-500 -mt-1">Creator Referral Engine</p>
          </div>
        </motion.div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
           <Link
            href="/"
            className="text-slate-600 hover:text-slate-900 transition font-medium"
          >
            Home
          </Link>
          <Link
            href="/affiliate"
            className="text-slate-600 hover:text-slate-900 transition font-medium"
          >
            Become Affiliate
          </Link>

          <Link
            href="/stats"
            className="text-slate-600 hover:text-slate-900 transition font-medium"
          >
            Stats
          </Link>

          {/* Auth Buttons */}
          {!user ? (
            <button
              onClick={signInWithCrowbar}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg transition flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              Login with Crowbar
            </button>
          ) : (
            <button
              onClick={signOutUser}
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          )}
        </nav>
      </div>

      {/* Bottom Glow */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 blur-xl opacity-70"></div>
    </header>
  );
}
