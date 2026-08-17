import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
export const metadata: Metadata = { title: 'Planora', description: 'Modern personal planning workspace' };
export default function RootLayout({ children }: { children: ReactNode }) { return <html lang="en" suppressHydrationWarning><body>{children}</body></html>; }
