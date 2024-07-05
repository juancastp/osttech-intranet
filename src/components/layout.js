import React from 'react';
<<<<<<< HEAD
import Navbar from './navbar';
import Sidebar from './sidebar';
import Footer from './footer';
=======

>>>>>>> 7454c3a43536d5bf77dbc42767a582eb3ff16e5b

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
