import './styles/global.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Generated by create next app' />
      </head>
      <body className='bg-gray4'>{children}</body>
    </html>
  );
}
