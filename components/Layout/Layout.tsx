import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: any) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;