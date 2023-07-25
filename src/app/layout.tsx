import React from 'react';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import { ReactFCWithChildren } from '@/types';
import clsx from 'clsx';

// Global styles
import '../styles/main.scss';

const inter = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Magnifier',
    description: 'Magnifier',
};

const bodyClassNames = clsx(inter.className, 'bg-color-20 text-color-10 bg-gradient-to-r');

const RootLayout: ReactFCWithChildren = ({ children }) => (
    <html lang="en">
        <head>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

            <link rel="icon" href="/favicons/favicon.ico" />
            <meta property="og:image" content="/favicons/favicon.ico" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN_NAME} />

            {/* Manifest */}
            <link rel="manifest" href="/manifest.json" />

            {/* Favicons */}
            <link href="/favicons/icon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
            <link href="/favicons/icon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
            <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
            <meta name="theme-color" content="#000" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
        </head>
        <body className={bodyClassNames}>{children}</body>
    </html>
);

export default RootLayout;
