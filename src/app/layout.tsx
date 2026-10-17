import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'AngleDesk | AI Newsroom', description: 'Human-directed multi-agent newsroom' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
