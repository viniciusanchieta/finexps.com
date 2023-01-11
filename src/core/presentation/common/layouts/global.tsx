import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin-ext']
});

interface GlobalLayoutProps {
  children: React.ReactNode;
  title?: string;
}

function GlobalLayout({ children, title }: GlobalLayoutProps) {
  return (
    <>
      <title>{`${title} · Finexps`}</title>
      <main className={roboto.className}>{children}</main>
    </>
  );
}

export default GlobalLayout;
