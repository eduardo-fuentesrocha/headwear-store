import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YOU ONLY LIVE ONCE",
  description: "Colección exclusiva de gorras trucker premium",
  openGraph: {
    title: "YOU ONLY LIVE ONCE - Premium Headwear",
    description: "Colección exclusiva de gorras trucker premium. Diseños limitados.",
    url: "https://youonlyliveonce.vercel.app",
    siteName: "YOLO",
    images: [
      {
        url: "/images/gengar-open-graph.png",
        width: 1200,
        height: 630,
        alt: "Gorra Gengar Trucker Premium - You Only Live Once",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  // -------------------------
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-black dark:text-white">
        
        {/* El flex-1 asegura que el Footer siempre se empuje al final */}
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}