import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme";
import { Navbar } from "@/components/landing/LandingNavbar";
import { MainContent } from "@/components/landing/LandingContent";

export const metadata: Metadata = {
  title: "Qafe",
  description: "Order coffee easily with QR code scanning",
};

const geistSans = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <MainContent>{children}</MainContent>
        </ThemeProvider>
      </body>
    </html>
  );
}
