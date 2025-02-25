import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen items-center justify-center flex-col`}
      >
        <header className="py-2 px-4 bg-gray-600 w-full">
          <h1 className="text-lg">INI HEADER</h1>
        </header>
        <div className="flex-1">{children}</div>
        <footer className="py-2 px-4 bg-gray-600 w-full">
          <h1 className="text-lg">INI FOOTER</h1>
        </footer>
      </body>
    </html>
  );
}
