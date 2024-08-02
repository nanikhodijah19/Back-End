import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StoreProvider from "@/components/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "X. Yang sedang hangat dibicarakan / X",
  description: "X. Yang sedang hangat dibicarakan / X",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          {children}
        </StoreProvider>
        <ToastContainer 
          position="bottom-right"
          autoClose={5000}
          closeOnClick
          draggable
          theme="dark"
          icon={false}
        />
      </body>
    </html>
  );
}
