import MainLayout from "@/components/layout/Mainlayout";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMURF Radio",
  description: "SMURF Radio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        id="ga"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BFZ1L9N2S8"
      />
      <Script id="ga2">
        {`
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BFZ1L9N2S8');
                `}
      </Script>
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
