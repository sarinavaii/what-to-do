'use client';

import '@styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Poppins } from 'next/font/google';

const font = Poppins({ subsets: ['latin'], weight: ['700', '500'] });

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

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
            <body className={`${font.className} bg-black text-stone-200 min-h-screen`}>
                <div className="max-w-[800px] mx-auto">
                    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
                    <ToastContainer position="bottom-left" />
                </div>
            </body>
        </html>
    );
}
