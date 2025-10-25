import localFont from "next/font/local";
import Script from "next/script";
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
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0V3VT30J5C"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0V3VT30J5C');
            `,
          }}
        />
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
