'use client';

import '@styles/globals.css';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['700', '500'] });

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${ubuntu.className} bg-stone-900 text-stone-200 min-h-screen`}>
                <div className="max-w-[1200px] mx-auto">
                    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
                </div>
            </body>
        </html>
    );
}

