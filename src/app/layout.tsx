import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Randimbimanana Princy',
    description: 'Ongoing PORTFOLIO Project',
}

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <html lang='en' suppressHydrationWarning>
                <body
                    className={cn(
                        'min-h-screen bg-background from-[#43434330] via-[#32323230] via-25% font-sans antialiased dark:bg-gradient-to-b',
                        fontSans.variable
                    )}
                >
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='dark'
                        enableSystem
                        disableTransitionOnChange
                    >
                        <main className='mx-auto max-w-2xl py-4 md:pt-10'>
                            {children}
                            <Footer />
                        </main>
                    </ThemeProvider>
                </body>
            </html>
        </>
    )
}