import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Syslab.ai - AI Solutions',
  description: 'Syslab.ai provides cutting-edge AI solutions, web interfaces, and cross-platform mobile apps.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.svg" />


        {/* Global Meta Tags */}
        <meta name="keywords" content="AI Solutions, Web Interfaces, Mobile Apps, Syslab.ai" />
        <meta name="author" content="Syslab.ai" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="syslab-ai" />
      </head>
      <body>{children}</body>
    </html>
  );
}
