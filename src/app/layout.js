import "./globals.css";
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
    <html lang="en" className={`${antoniaVariable.variable} ${robotoMono.variable} ${gloriousSans.variable}`}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/muo6nza.css" />
      </head>
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
