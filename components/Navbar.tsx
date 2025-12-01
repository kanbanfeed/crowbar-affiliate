"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  LogIn,
  LogOut,
  Menu,
  X,
  Home,
  Users,
  BarChart3,
} from "lucide-react";

export default function Navbar() {
  const { user, signInWithCrowbar, signOutUser } = useAuth();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Become Affiliate", href: "/affiliate", icon: Users },
    { name: "Stats", href: "/stats", icon: BarChart3 },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200/60 shadow-sm">

      {/* Top Glow */}
      <div className="absolute inset-x-0 -top-6 h-12 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 blur-2xl opacity-80 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <span className="text-white font-bold text-sm">CB</span>
          </div>

          <div>
            <h1 className="font-bold tracking-tight text-lg text-slate-900">
              Crowbar Affiliate Hub
            </h1>
            <p className="text-xs text-slate-500 -mt-1">
              Creator Referral Engine
            </p>
          </div>
        </motion.div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-200/40 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-slate-600 hover:text-slate-900 transition font-medium relative group"
            >
              {item.name}

              {/* Underline Hover Animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all"></span>
            </Link>
          ))}

          {/* AUTH BUTTON */}
          {!user ? (
            <button
              onClick={signInWithCrowbar}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md hover:shadow-xl transition flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              Login
            </button>
          ) : (
            <button
              onClick={signOutUser}
              className="px-5 py-2.5 rounded-xl border border-slate-300 bg-white/60 text-slate-700 font-medium hover:bg-slate-100 transition flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          )}
        </nav>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white/90 backdrop-blur-xl border-b border-slate-200 px-6 py-4 shadow-lg space-y-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-slate-700 text-lg font-medium py-2"
              >
                <item.icon className="w-5 h-5 text-indigo-600" />
                {item.name}
              </Link>
            ))}

            {!user ? (
              <button
                onClick={() => {
                  setOpen(false);
                  signInWithCrowbar();
                }}
                className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md"
              >
                Login
              </button>
            ) : (
              <button
                onClick={() => {
                  setOpen(false);
                  signOutUser();
                }}
                className="w-full px-5 py-3 rounded-xl border border-red-300 text-red-600 font-medium bg-red-50"
              >
                Logout
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Glow */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 blur-xl opacity-70 pointer-events-none"></div>

    </header>
  );
}
