import localFont from "next/font/local";
import "./globals.css";
import Footer from './components/Footer';
import FooterContact from './components/FooterContact';
import PageAnimatePresence from './components/HOC/PageAnimatePresence';

export const metadata = {
  title: 'The Glorious Agency - Powering Your Growth with Digital Solutions That Deliver',
  description: 'Digital Agency',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
  },
};

export const gloriousSans = localFont({
  src: [
    {
      path: './fonts/GloriousSans.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/GloriousSans-medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-glorious-sans',
  display: 'swap',
});

const ClientLayout = ({ children }) => {
  return (
    <html lang="en" className={gloriousSans.className}>
      <body className="antialiased bodyBg">
        <PageAnimatePresence>
          <div className="relative">
            {children}
          </div>
          <FooterContact />
          <Footer />
        </PageAnimatePresence>
      </body>
    </html>
  );
};

export default function RootLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}
