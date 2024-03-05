
import Sidebar2 from "@/components/sidebar2";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex flex-col">
        <Sidebar2 />
        {children}
      </div>
  );
}
