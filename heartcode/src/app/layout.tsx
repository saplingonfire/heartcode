// @ts-nocheck
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css"; 
import { NavigationBar } from "@/components/navbar/navigation-menu";
import { ThemeProvider } from "@/components/modetoggle/theme-provider";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import './globals.css'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Snorlax",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <ThemeProvider 
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >

        <NavigationBar/>                   
          {children}
        </ThemeProvider>  
      </body>
    </html>
    </ClerkProvider>
  );
}

