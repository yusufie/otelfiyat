import React, { ReactNode } from "react";
import Header from "@/components/Header/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: any) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;