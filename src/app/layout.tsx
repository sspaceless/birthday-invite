import { Unbounded } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export default function InviteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body className={`${unbounded.className}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
