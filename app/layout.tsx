import type { Metadata } from "next";
import { DM_Sans, Syne, Geist } from "next/font/google";
import AvatarMorphProvider from "@/components/AvatarMorphProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import JsonLd from "@/components/JsonLd";
import ScrollPerf from "@/components/ScrollPerf";
import ScrollRestoration from "@/components/ScrollRestoration";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import { cn } from "@/lib/utils";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nguyenxuantrong.dev";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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

const title = "Nguyễn Xuân Trọng | CV — Mobile Developer";
const description =
  "CV & Portfolio của Nguyễn Xuân Trọng — Mobile Developer chuyên Flutter, React Native & Fintech. Xem kinh nghiệm, dự án và tải CV PDF.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Nguyễn Xuân Trọng",
  },
  description,
  applicationName: "Nguyễn Xuân Trọng — CV Online",
  keywords: [
    "CV",
    "Resume",
    "Portfolio",
    "Mobile Developer",
    "Flutter Developer",
    "React Native Developer",
    "Fintech",
    "Nguyen Xuan Trong",
    "Nguyễn Xuân Trọng",
    "Hà Nội",
  ],
  authors: [{ name: "Nguyễn Xuân Trọng", url: siteUrl }],
  creator: "Nguyễn Xuân Trọng",
  publisher: "Nguyễn Xuân Trọng",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/images/profile.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "profile",
    locale: "vi_VN",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: "Nguyễn Xuân Trọng — CV Online",
    title,
    description,
    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 800,
        alt: "Nguyễn Xuân Trọng — Mobile Developer CV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/profile.png"],
  },
  other: {
    "og:see_also": `${siteUrl}/cv/NGUYEN-XUAN-TRONG-EN.pdf`,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#040810",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={cn("scroll-smooth", syne.variable, dmSans.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden bg-[#040810] font-sans text-slate-300 antialiased">
        <JsonLd />
        <LanguageProvider>
          <SmoothScroll>
            <AvatarMorphProvider>
              <ScrollRestoration />
              <ScrollPerf />
              {children}
            </AvatarMorphProvider>
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
