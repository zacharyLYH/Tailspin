import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ToasterProvider } from "@/components/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Tailspin",
    description: "Competitive TailwindCSS",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem
                >
                    <ToasterProvider />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
