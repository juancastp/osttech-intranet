import React from 'react';
import Navbar from 'navbar';
import Sidebar from 'sidebar';
import Footer from 'footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
