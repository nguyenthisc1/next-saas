import '@/styles/globals.css'

import { GeistSans } from 'geist/font/sans'
import { type Metadata } from 'next'

import { ClerkProvider } from '@clerk/nextjs'

import { TRPCReactProvider } from '@/trpc/react'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
    title: 'Next Saas App',
    description: 'Next Saas App',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ClerkProvider>
            <html lang='en' className={`${GeistSans.variable}`}>
                <body>
                    <TRPCReactProvider>{children}</TRPCReactProvider>
                    <Toaster />
                </body>
            </html>
        </ClerkProvider>
    )
}
