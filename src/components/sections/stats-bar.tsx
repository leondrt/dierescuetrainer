"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { Users, Star, Clock } from "lucide-react";
import Image from "next/image";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 80, damping: 20 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) motionVal.set(to);
  }, [isInView, motionVal, to]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) =>
      setDisplay(Math.round(v).toLocaleString("de-DE"))
    );
    return unsubscribe;
  }, [spring]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: Users,
    countTo: 2000,
    suffix: "+",
    label: "Teilnehmer",
  },
  {
    icon: Star,
    value: "4,9/5",
    label: "Sterne",
  },
  {
    icon: Clock,
    value: "24h",
    label: "Antwortzeit",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="flex flex-col sm:flex-row items-center gap-3 lg:px-8 first:pl-0 last:pr-0 text-center sm:text-left">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
                  style={{ backgroundColor: "#EEF2F7" }}
                >
                  <stat.icon
                    className="w-5 h-5"
                    style={{ color: "#3068F5" } as React.CSSProperties}
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: "#2A3142" }}>
                    {"countTo" in stat ? (
                      <CountUp to={stat.countTo!} suffix={stat.suffix} />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              </div>
            </StaggerItem>
          ))}

          {/* DGUV trust badge */}
          <StaggerItem>
            <div className="flex flex-col sm:flex-row items-center gap-3 lg:px-8 text-center sm:text-left">
              <Image
                src="/images/dguv_card.png"
                width={120}
                height={60}
                alt="DGUV zertifiziert"
                className="object-contain"
              />
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
