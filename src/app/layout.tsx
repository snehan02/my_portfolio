import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Sneha N. | Full-Stack Developer & UI/UX Designer",
    description:
        "Portfolio of Sneha N. — Full-Stack Developer, Machine Learning enthusiast, and UI/UX Designer specializing in Python, MERN stack, and AI/ML solutions.",
    keywords: [
        "Sneha N",
        "Full Stack Developer",
        "UI UX Designer",
        "Machine Learning",
        "React",
        "Python",
        "Portfolio",
    ],
    openGraph: {
        title: "Sneha N. | Full-Stack Developer & UI/UX Designer",
        description:
            "Explore Sneha's projects in MERN stack, Machine Learning, and UI/UX Design.",
        type: "website",
    },
    icons: {
        icon: "/logo.jpg",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
