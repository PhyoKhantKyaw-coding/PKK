import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Outlet />
      </main>
      <div className="h-1" />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
