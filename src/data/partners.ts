export type Partner = {
  name: string;
  /**
   * Optional logo file in /public/partners/ (e.g. "/partners/fanshawe.png").
   * When omitted, the marquee renders a styled text wordmark instead.
   */
  logo?: string;
};

/**
 * Top partner schools shown in the homepage trust marquee.
 *
 * Seeded from the client's named top partners (Fanshawe, Niagara, University of
 * Europe) plus recognizable institutions from the full partner list.
 *
 * TODO(James): confirm/replace this list against sheet 2 ("top partners") of the
 * partner spreadsheet. To show real logos, drop a PNG/SVG into
 * /public/partners/ and add `logo: "/partners/<file>"` to that entry.
 */
export const topPartners: Partner[] = [
  { name: "Fanshawe College", logo: "/partners/fanshawe.png" },
  { name: "Niagara College", logo: "/partners/niagara.png" },
  { name: "University of Europe", logo: "/partners/university-of-europe.png" },
  { name: "Humber College", logo: "/partners/humber.png" },
  { name: "Centennial College", logo: "/partners/centennial.png" },
  { name: "Algonquin College", logo: "/partners/algonquin.png" },
  { name: "George Brown College", logo: "/partners/george-brown.png" },
  { name: "Mohawk College", logo: "/partners/mohawk.png" },
  { name: "Kwantlen Polytechnic University", logo: "/partners/kpu.png" },
  { name: "University Canada West", logo: "/partners/ucw.png" },
  { name: "Douglas College", logo: "/partners/douglas.png" },
  { name: "Trinity Western University", logo: "/partners/trinity-western.png" },
  { name: "Saskatchewan Polytechnic", logo: "/partners/saskpolytech.png" },
  { name: "University of Law", logo: "/partners/university-of-law.png" },
  { name: "Stanley College", logo: "/partners/stanley.png" },
];
