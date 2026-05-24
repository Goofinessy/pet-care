import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "毛绒日光 Pet Spa | 宠物洗护店",
  description: "温柔洗浴、造型修剪、皮毛护理和安心接送，为猫狗准备的一站式洗护体验。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
