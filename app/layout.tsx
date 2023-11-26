import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./colors.css";
import "./globals.css";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Test task",
    description: "Giraffe 360 test task",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
                <div id="portal" />
            </body>
        </html>
    );
}
