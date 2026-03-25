import type { Metadata } from "next"
import { Cormorant_Garamond, DM_Sans, Merienda, Oregano, PT_Sans, PT_Serif } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-noto-sans",
})

const oregano = Oregano({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-oregano",
})

const ptSerif = PT_Serif({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-pt-serif",
})

export const metadata: Metadata = {
    title: "Next Template",
    description: "Next Template",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${dmSans.className} ${oregano.variable} ${ptSerif.variable} antialiased`}>
                <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
                    `}
                </Script>
                {children}
            </body>
        </html>
    )
}
