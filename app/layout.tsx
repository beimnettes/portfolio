import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beimnet Tesfaye - Full-Stack Developer",
  description:
    "Portfolio of Beimnet Tesfaye, a Full-Stack Developer specializing in React, Next.js, Node.js, NestJS, AWS, and modern web technologies.",
  keywords: [
    "Beimnet Tesfaye",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Beimnet Tesfaye" }],
  openGraph: {
    title: "Beimnet Tesfaye - Full-Stack Developer",
    description:
      "Portfolio showcasing full-stack development projects and technical skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
