import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-heading text-6xl font-bold text-teal-700">404</h1>
      <p className="mt-4 text-xl text-gray-700">Page not found</p>
      <p className="mt-2 text-gray-500 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="rounded-full bg-teal-600 px-6 py-3 text-sm font-bold text-white hover:bg-teal-700 transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-teal-600 px-6 py-3 text-sm font-bold text-teal-600 hover:bg-teal-50 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
