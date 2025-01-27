import Header from "@/components/header";
import Navbar from "@/components/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <section className="container mx-auto">
        <Header />
        <Navbar />
      </section>
      {children}
      {/* <Footer/> */}
    </main>
  );
}
