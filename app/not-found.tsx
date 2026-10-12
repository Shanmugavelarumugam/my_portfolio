import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white text-slate-600 dark:bg-[#070b14] dark:text-slate-200">
      <div className="text-center">
        <p className="text-sm">Page not found</p>
        <Link href="/" className="mt-4 inline-block text-sm text-sky-600 underline underline-offset-4 dark:text-sky-300">
          Back home
        </Link>
      </div>
    </main>
  );
}
