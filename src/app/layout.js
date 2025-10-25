import "./globals.css";
import Script from 'next/script';
import Footer from './components/Footer';
import FooterContact from './components/FooterContact';
import PageAnimatePresence from './components/HOC/PageAnimatePresence';
import { antoniaVariable, robotoMono, gloriousSans } from './fonts';

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

const ClientLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="light" className={`${antoniaVariable.variable} ${robotoMono.variable} ${gloriousSans.variable}`}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/muo6nza.css" />
      </head>
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
          <div className="relative border-b border-glorious_border">
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
