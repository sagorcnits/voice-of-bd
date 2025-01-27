import Header from "@/components/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {/* <Navbar /> */}
      {children}
      {/* <Footer/> */}
    </div>
  );
}
