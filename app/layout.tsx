import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BurnAlert – Early Warning System for Runway Depletion",
  description: "Connect bank accounts and expense tools to predict when your startup will run out of money. Real-time cash flow monitoring with customizable alerts."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="aab976b0-8d57-45ab-b9dd-4d81fced391c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
