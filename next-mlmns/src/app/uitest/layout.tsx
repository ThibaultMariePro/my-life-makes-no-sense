import "../globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { ThemeSwitcher } from "@/components/theme-switcher";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Darkmode with Next.js and TailwindCSS",
  description:
    "I simply app to showcase dark mode with Next.js and TailwindCSS",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <main>{children}</main>
        </ThemeProvider>
  );
}        