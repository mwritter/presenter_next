import { Inter } from "next/font/google";
import "./globals.css";
import { PresenterStoreProvider } from "@/store/provider";

const inter = Inter({
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-neutral-800 text-neutral-300`}
      >
        <PresenterStoreProvider>{children}</PresenterStoreProvider>
      </body>
    </html>
  );
}
