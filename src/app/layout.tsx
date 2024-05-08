import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const SpaceGrotesk = localFont({
  src: [
    { path: "/fonts/SpaceGrotesk-Light.ttf", weight: "300", style: "light" },
    {
      path: "/fonts/SpaceGrotesk-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    { path: "/fonts/SpaceGrotesk-Medium.ttf", weight: "500", style: "medium" },
    { path: "/fonts/SpaceGrotesk-SemiBold.ttf", weight: "600", style: "bold" },
    { path: "/fonts/SpaceGrotesk-Bold.ttf", weight: "700", style: "bold" },
  ],
});

export const metadata: Metadata = {
  title: "Honey Bunny Bun | Easy way to link up with your favourite models",
  description:
    " Go live with honey bunny bun, monetize your streams according to your preferences. Join the honey bunny bun model community today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={SpaceGrotesk.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}