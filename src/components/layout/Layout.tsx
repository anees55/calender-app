import Footer from "./Footer";
import Header from "./Header";
import { ReactNode } from "react"; // Import ReactNode for proper typing

interface LayoutPageProps {
  children: ReactNode; // Explicitly define the type for children
}

export default function LayoutPage({ children }: LayoutPageProps) {
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Header />
        <main className="flex flex-col gap-8 row-start-2 items-start">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
