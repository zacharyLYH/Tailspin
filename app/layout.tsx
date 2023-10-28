import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ToasterProvider } from "@/components/providers/toast-provider";
import TanStackProvider from "@/components/providers/TanstackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Tailspin",
    description: "Competitive TailwindCSS",
    applicationName: "Tailspin",
    keywords: ["Tailwind", "Competitive", "CSS", "Frontend", "HTML"],
    authors: [
        { name: "Zac", url: "https://github.com/zacharyLYH" },
        { name: "Erick", url: "hhttps://github.com/ES-Legacy" },
    ],
    openGraph: {
        title: "Tailspin",
        description: "Competitive TailwindCSS",
        url: "https://nextjs.org", //TODO
        siteName: "Tailspin",
        images: [
            {
                url: "https://nextjs.org/og.png", //TODO
                width: 800,
                height: 600,
            },
            {
                url: "https://nextjs.org/og-alt.png", //TODO
                width: 1800,
                height: 1600,
                alt: "My custom alt",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    metadataBase: new URL("https://acme.com"),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <TanStackProvider>
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='dark'
                        enableSystem
                    >
                        <ToasterProvider />
                        {children}
                    </ThemeProvider>
                </TanStackProvider>
            </body>
        </html>
    );
}
