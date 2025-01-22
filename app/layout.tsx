import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import ThemeRegistry from './theme/ThemeRegistry';
import { Box, Toolbar } from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedal tap",
  description: "The amazing new Pedal tap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeRegistry>
          <NavBar />
          <Box component="main"  >
            <Toolbar 
              sx={{height: {
                xs: '100px', // Smaller width on xs screens
                md: '120px', // Default size on large screens
                },
              }} />
            {children}
          </Box>
        </ThemeRegistry>
          
      </body>
    </html>
  );
}
