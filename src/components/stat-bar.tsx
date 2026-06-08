"use client";

import { useCountUp } from "@/hooks/use-count-up";

function StatItem({ target, suffix, prefix, label }: { target: number; suffix?: string; prefix?: string; label: string }) {
  const { ref, value } = useCountUp(target, { suffix, prefix, duration: 2200 });

  return (
    <div className="text-center">
      <p ref={ref as React.RefObject<HTMLParagraphElement>} className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
        {value}
      </p>
      <p className="mt-1 text-xs sm:text-sm text-navy-200 font-medium">{label}</p>
    </div>
  );
}

export function StatBar() {
  return (
    <section className="bg-navy-800 py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          <StatItem target={95} suffix="%" label="Visa Approval Rate" />
          <StatItem target={3000} suffix="+" label="Visas Granted" />
          <StatItem target={300} suffix="+" label="Partner Schools" />
          <StatItem target={6} suffix="" label="PH Offices" />
          <StatItem target={13} suffix="+" prefix="" label="Years Since 2013" />
        </div>
      </div>
    </section>
  );
}
