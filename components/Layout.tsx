import Navbar from "./Navbar";

export default function Layout({
  children,
  font,
}: {
  children: React.ReactNode;
  font: string;
}) {
  return (
    <div className={font}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
