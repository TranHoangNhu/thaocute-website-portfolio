import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thảo - Content Creator & Video Editor',
  description: 'Website CV timeline của Trần Thị Như Thảo, chuyên về Video Editing và Content Creation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
