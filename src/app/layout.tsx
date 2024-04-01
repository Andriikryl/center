import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastShelf from "@/components/ToastShelf/ToastShelf";
import ToastProvider from "@/components/ToastProvider/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Center a div",
  description: "How center a div?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <ToastProvider>
            {children}
            <ToastShelf />
          </ToastProvider>
        </main>
      </body>
    </html>
  );
}
