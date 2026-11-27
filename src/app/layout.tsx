import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import ScrollEffects from "../components/ScrollEffects";
import CustomCursor from "../components/CustomCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 섹션 제목 위 영어 라벨용 디스플레이 글씨체
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "강민서 | Frontend Developer Portfolio",
  description:
    "사용자 관점에서 화면을 개선하는 프론트엔드 개발자 강민서의 포트폴리오입니다. React · TypeScript · Next.js",
  openGraph: {
    title: "강민서 | Frontend Developer Portfolio",
    description: "사용자 관점에서 화면을 개선하는 프론트엔드 개발자 강민서의 포트폴리오",
    url: "https://ms-portfolio-ashen.vercel.app/",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f7f5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {/* JavaScript가 꺼져 있어도 콘텐츠가 보이도록 */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
        <ScrollEffects />
        <CustomCursor />
      </body>
    </html>
  );
}
