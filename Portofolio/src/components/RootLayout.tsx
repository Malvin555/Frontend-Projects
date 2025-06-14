import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "../index.css";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="font-inter min-h-screen bg-white dark:bg-black text-black dark:text-white">
        {children}
      </div>
    </ThemeProvider>
  );
}
