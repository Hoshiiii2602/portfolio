import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nguyễn Xuân Trọng | Mobile Developer",
  description:
    "Mobile Developer chuyên Flutter và React Native. Kinh nghiệm Fintech, dữ liệu realtime và sản phẩm mobile hiệu năng cao.",
  keywords: [
    "Mobile Developer",
    "Flutter",
    "React Native",
    "Fintech",
    "Nguyen Xuan Trong",
    "Nguyễn Xuân Trọng",
  ],
  authors: [{ name: "Nguyễn Xuân Trọng" }],
  icons: {
    icon: "/images/profile.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Nguyễn Xuân Trọng | Mobile Developer",
    description:
      "Mobile Developer specializing in Flutter and React Native with Fintech experience.",
    type: "website",
    images: ["/images/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${syne.variable} ${dmSans.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#040810] font-sans text-slate-300 antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
