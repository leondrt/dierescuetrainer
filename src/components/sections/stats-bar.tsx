"use client";

import { motion } from "motion/react";
import { Users, Star, Shield, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "2.000+",
    label: "Teilnehmer",
    color: "text-red-600",
  },
  {
    icon: Star,
    value: "4,9/5",
    label: "Sterne Bewertung",
    color: "text-amber-500",
  },
  {
    icon: Shield,
    value: "DGUV",
    label: "zertifiziert",
    color: "text-green-600",
  },
  {
    icon: Clock,
    value: "24h",
    label: "Antwortzeit",
    color: "text-blue-600",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col sm:flex-row items-center gap-3 lg:px-8 first:pl-0 last:pr-0 text-center sm:text-left"
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 ${stat.color} shrink-0`}
              >
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
