import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shashwat Tripathi — Full Stack Engineer & Cloud Architect",
    template: "%s | Shashwat Tripathi",
  },
  description:
    "Full Stack Engineer & Cloud Architect with 10+ years of experience building scalable systems, cloud infrastructure, and data pipelines.",
  keywords: [
    "Full Stack Engineer",
    "Cloud Architect",
    "DevOps",
    "AWS",
    "Kubernetes",
    "Spring Boot",
    ".NET Core",
    "Data Engineering",
  ],
  authors: [{ name: "Shashwat Tripathi" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Shashwat Tripathi",
    title: "Shashwat Tripathi — Full Stack Engineer & Cloud Architect",
    description:
      "Full Stack Engineer & Cloud Architect with 10+ years of experience building scalable systems, cloud infrastructure, and data pipelines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'light') document.documentElement.classList.remove('dark');
              } catch {}
            `,
          }}
        />
      </head>
      <body className="min-h-dvh flex flex-col font-sans antialiased">
        <ThemeProvider>
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
