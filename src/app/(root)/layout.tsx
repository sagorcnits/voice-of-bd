import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <section className="container mx-auto px-4 xl:px-0">
        <Header />
        <Navbar />
      </section>
      {children}
      <Footer />
    </main>
  );
}
