import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="mx-auto w-full px-0 md:px-6 lg:px-0">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/images/favicon-32x32.png" />
        <link rel="shortcut icon" href="images/favicon.ico" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Header />
      <main className="flex items-center bg-navBg-light dark:dark:bg-navBg-dark ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
