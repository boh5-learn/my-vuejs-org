import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col absolute">
          <header className="fixed h-14 t-0 w-full bg-white">
            <Header />
          </header>
          <main className="pt-14 w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
