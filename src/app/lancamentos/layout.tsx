'use client';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <main className='bg-gray2 h-full-vh'>{children}</main>;
}
