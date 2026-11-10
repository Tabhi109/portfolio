import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "abhinavtrip3.space — Abhinav's Laboratory",
  description:
    "An interactive cartoon science-fiction portfolio. Explore Abhinav Tripathi's laboratory of experimental machines with guide robot B-3.",
  metadataBase: new URL("https://abhinavtrip3.space"),
  openGraph: {
    title: "abhinavtrip3.space",
    description:
      "Enter the laboratory. Activate a machine. Fall through a portal.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07141f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink-deep text-cream-ink">
        {children}
      </body>
    </html>
  );
}
