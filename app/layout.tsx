import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getLanguage } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const newsreader = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: {
    default: "Joep Peeters | Measurement Mindset",
    template: "%s | Joep Peeters",
  },
  description:
    "Thought leadership on measurement, digital marketing, attribution, marketing psychology, CRO and growth.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const language = await getLanguage();

  return (
    <html lang={language} className={`${inter.variable} ${newsreader.variable}`} suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
