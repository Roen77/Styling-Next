import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TailwindCSS And Emotion",
  description: "TailwindCSS와 Emotion을 사용하여 스타일링",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
