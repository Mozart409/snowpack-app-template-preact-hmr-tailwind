import Footer from './Footer';
import Navbar from './Navbar';
import { h } from 'preact';
export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="my-24 container">{children}</main>
      <Footer />
    </div>
  );
}
