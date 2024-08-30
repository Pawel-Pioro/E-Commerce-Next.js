import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/ui/Navbar";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "An E-Commerce App that uses fake store API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <CartProvider >
          <Navbar />
          <div className="grid grid-cols-12">
            <div className="col-span-10 col-start-2 ">
              {children}
            </div>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
