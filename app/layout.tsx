import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import {Toaster} from "@/components/ui/sonner";
import {SessionProvider} from "next-auth/react";
import {auth} from "@/auth";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
});

export const metadata: Metadata = {
  title: "Overflow",
  description: "A no-nonsense platform where developers get straight answers to their programming questions. Connect with a global community, share knowledge, and collaborate on everything from web and mobile development to algorithms and data structures—no fluff, just solutions.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

// const RootLayout = () => {}
// export default async function RootLayout

const RootLayout = async ({children}: { children: React.ReactNode }
) => {
  const session = await auth();
  return (
      <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
        <body
            className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
        >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Toaster/>
        </body>
      </SessionProvider>
      </html>
  );
}

export default RootLayout;
