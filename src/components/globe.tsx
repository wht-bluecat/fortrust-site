"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  geoOrthographic,
  geoPath,
  geoGraticule10,
  geoDistance,
  type GeoProjection,
} from "d3-geo";
import { feature, mesh } from "topojson-client";
import worldData from "world-atlas/countries-110m.json";

/* Real destination coordinates (lng, lat). The Fortrust logo marks each one. */
type Dest = { code: string; label: string; lng: number; lat: number };
const DESTS: Dest[] = [
  { code: "CA", label: "Canada", lng: -106.3, lat: 56.1 },
  { code: "UK", label: "United Kingdom", lng: -2.5, lat: 54.0 },
  { code: "AU", label: "Australia", lng: 134.0, lat: -25.3 },
  { code: "NZ", label: "New Zealand", lng: 173.0, lat: -41.5 },
];

const TILT = 16; // degrees — tip the north pole toward the viewer a touch
const AUTO_SPEED = 0.05; // degrees per frame (majestic, premium)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const world = worldData as any;
const land = feature(world, world.objects.land) as unknown as GeoJSON.Feature;
const borders = mesh(
  world,
  world.objects.countries,
  (a: unknown, b: unknown) => a !== b
) as unknown as GeoJSON.MultiLineString;
const graticule = geoGraticule10();

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pinRefs = useRef<(HTMLDivElement | null)[]>([]);

  const lambdaRef = useRef(60); // initial longitude (Americas + Atlantic facing)
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const velRef = useRef(0); // drag inertia

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let size = 0;
    let dpr = 1;
    let projection: GeoProjection;
    let path: ReturnType<typeof geoPath>;

    const setup = () => {
      size = wrap.offsetWidth;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      projection = geoOrthographic()
        .translate([size / 2, size / 2])
        .scale((size / 2) * 0.97)
        .clipAngle(90)
        .precision(0.4);
      path = geoPath(projection, ctx);
    };
    setup();

    const ro = new ResizeObserver(setup);
    ro.observe(wrap);

    const draw = () => {
      const lambda = lambdaRef.current;
      projection.rotate([lambda, -TILT]);
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, size, size);

      const cx = size / 2;
      const cy = size / 2;
      const r = (size / 2) * 0.97;

      // --- ocean sphere with limb darkening + top-left highlight ---
      ctx.beginPath();
      path({ type: "Sphere" });
      const ocean = ctx.createRadialGradient(
        cx - r * 0.32,
        cy - r * 0.36,
        r * 0.15,
        cx,
        cy,
        r * 1.05
      );
      ocean.addColorStop(0, "#1b4570");
      ocean.addColorStop(0.5, "#0e2c4f");
      ocean.addColorStop(1, "#071a33");
      ctx.fillStyle = ocean;
      ctx.fill();

      // --- graticule ---
      ctx.beginPath();
      path(graticule);
      ctx.strokeStyle = "rgba(150, 205, 245, 0.10)";
      ctx.lineWidth = 0.6;
      ctx.stroke();

      // --- land fill ---
      ctx.beginPath();
      path(land);
      ctx.fillStyle = "#3f9ad8";
      ctx.fill();

      // subtle top lighting on land
      ctx.save();
      ctx.clip();
      const lite = ctx.createLinearGradient(0, cy - r, 0, cy + r);
      lite.addColorStop(0, "rgba(150, 224, 255, 0.45)");
      lite.addColorStop(0.55, "rgba(120, 200, 245, 0)");
      lite.addColorStop(1, "rgba(6, 22, 46, 0.45)");
      ctx.fillStyle = lite;
      ctx.fillRect(0, 0, size, size);
      ctx.restore();

      // --- country borders ---
      ctx.beginPath();
      path(borders);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.22)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // --- surface marker dots under each pin ---
      const center: [number, number] = [-lambda, TILT];
      for (const d of DESTS) {
        const front = geoDistance([d.lng, d.lat], center) < Math.PI / 2;
        if (!front) continue;
        const p = projection([d.lng, d.lat]);
        if (!p) continue;
        ctx.beginPath();
        ctx.arc(p[0], p[1], 3.2, 0, Math.PI * 2);
        ctx.fillStyle = "#f26b21";
        ctx.shadowColor = "rgba(242,107,33,0.9)";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // specular highlight
      ctx.beginPath();
      path({ type: "Sphere" });
      ctx.clip();
      const spec = ctx.createRadialGradient(
        cx - r * 0.4,
        cy - r * 0.45,
        0,
        cx - r * 0.4,
        cy - r * 0.45,
        r * 0.9
      );
      spec.addColorStop(0, "rgba(255,255,255,0.22)");
      spec.addColorStop(0.4, "rgba(255,255,255,0)");
      ctx.fillStyle = spec;
      ctx.fillRect(0, 0, size, size);

      ctx.restore();

      // --- position HTML logo pins ---
      for (let i = 0; i < DESTS.length; i++) {
        const el = pinRefs.current[i];
        if (!el) continue;
        const d = DESTS[i];
        const dist = geoDistance([d.lng, d.lat], center);
        const front = dist < Math.PI / 2;
        const p = projection([d.lng, d.lat]);
        if (front && p) {
          const depth = Math.max(0, Math.min(1, (Math.PI / 2 - dist) / (Math.PI / 2)));
          el.style.transform = `translate(-50%, -100%) translate(${p[0]}px, ${p[1]}px) scale(${0.8 + depth * 0.2})`;
          el.style.opacity = String(0.25 + depth * 0.75);
          el.style.zIndex = String(100 + Math.round(depth * 100));
          el.style.pointerEvents = "auto";
        } else {
          el.style.opacity = "0";
          el.style.pointerEvents = "none";
        }
      }
    };

    let raf = 0;
    const tick = () => {
      if (!draggingRef.current) {
        if (Math.abs(velRef.current) > 0.01) {
          lambdaRef.current += velRef.current;
          velRef.current *= 0.92; // inertia decay
        } else if (!reduce) {
          lambdaRef.current += AUTO_SPEED;
        }
      }
      draw();
      raf = requestAnimationFrame(tick);
    };
    tick();
    requestAnimationFrame(() => {
      if (canvas) canvas.style.opacity = "1";
    });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    if (wrapRef.current) wrapRef.current.style.cursor = "grabbing";
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    const step = dx * 0.4;
    lambdaRef.current += step;
    velRef.current = step;
  };
  const endDrag = () => {
    draggingRef.current = false;
    if (wrapRef.current) wrapRef.current.style.cursor = "grab";
  };

  return (
    <div
      ref={wrapRef}
      className="globe-stage relative aspect-square w-full touch-pan-y select-none"
      style={{ cursor: "grab" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
    >
      {/* dark core + atmospheric rim */}
      <div className="globe-core" />
      <div className="globe-atmosphere" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ opacity: 0, transition: "opacity 0.9s ease" }}
      />

      {/* HTML logo pins (positioned each frame) */}
      {DESTS.map((d, i) => (
        <div
          key={d.code}
          ref={(el) => {
            pinRefs.current[i] = el;
          }}
          className="globe-pin absolute left-0 top-0 flex flex-col items-center"
          style={{ willChange: "transform, opacity", opacity: 0 }}
        >
          <span className="mb-1 whitespace-nowrap rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-navy-900 shadow-md sm:text-[11px]">
            {d.label}
          </span>
          <span className="globe-pin-logo relative block h-8 w-8 sm:h-9 sm:w-9">
            <Image src="/logo-icon.png" alt={d.label} fill sizes="40px" className="object-contain" />
          </span>
          <span className="globe-pin-stem" />
        </div>
      ))}
    </div>
  );
}
