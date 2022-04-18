import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col font-sans">
      <Header></Header>
      <main className="flex-1 overflow-y-auto">{children}</main>
      <Footer></Footer>
    </div>
  );
}
