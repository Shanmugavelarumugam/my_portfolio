import type { Metadata } from "next";
import { Allura, Geist, Geist_Mono, Roboto_Slab } from "next/font/google";
import "./globals.css";
import "@/components/ui/rubber-segment.css";
import "@/components/ui/warp-text.css";
import "@/components/ui/fold-text.css";
import "@/components/ui/text-type.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { InitialLoader } from "@/components/providers/initial-loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const brandFont = Allura({
  variable: "--font-brand",
  weight: "400",
  subsets: ["latin"],
});

const displayFont = Roboto_Slab({
  variable: "--font-display",
  weight: "900",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shanmugavel A — Flutter Developer",
  description:
    "Shanmugavel A builds scalable mobile applications using Flutter and Dart, with a focus on clean architecture, reliable API integration, and maintainable code.",
};

// Runs synchronously before paint: applies the persisted theme (or dark default)
const themeInitScript = `(function(){try{var t=localStorage.getItem('portfolio-theme')||'dark';if(t==='dark'){document.documentElement.classList.add('dark');document.documentElement.classList.remove('light');document.documentElement.setAttribute('data-theme','dark');}else{document.documentElement.classList.remove('dark');document.documentElement.classList.add('light');document.documentElement.setAttribute('data-theme','light');}document.documentElement.style.colorScheme=t;}catch(e){document.documentElement.classList.add('dark');document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${geistSans.variable} ${geistMono.variable} ${brandFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 transition-colors duration-300 dark:bg-[#070b14] dark:text-slate-100">
        <ThemeProvider>
          <InitialLoader />
          <Navbar />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
