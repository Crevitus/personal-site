import Header from './Header';
import Footer from './Footer';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="font-content flex min-h-screen flex-col justify-between antialiased">
      <Header />
      <main className="isolate mb-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
