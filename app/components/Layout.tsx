import Header from './Header';
import Footer from './Footer';
import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="font-content flex min-h-screen flex-col justify-between antialiased">
      <Header />
      <main className="isolate mb-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
