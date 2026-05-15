const stats = [
  { value: "95%", label: "Visa Approval Rate" },
  { value: "3,000+", label: "Visas Granted" },
  { value: "300+", label: "Partner Schools" },
  { value: "6", label: "PH Offices" },
  { value: "Since 2013", label: "13+ Years" },
];

export function StatBar() {
  return (
    <section className="bg-teal-700 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-xs sm:text-sm text-teal-200 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
