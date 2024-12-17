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
      <head>
        <meta property="og:title" content="Запрошення на мій день народження" />
        <meta
          property="og:description"
          content="Привіт, у мене скоро день народження, переглянь своє запрошення за посиланням"
        />
        <meta
          property="og:image"
          content="https://my-birthday-invite.vercel.app/img/preview.png"
        />
        <meta
          property="og:url"
          content="https://my-birthday-invite.vercel.app"
        />
        <meta property="og:type" content="website" />
      </head>
      <body className={`${unbounded.className}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
