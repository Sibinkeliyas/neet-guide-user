import React from "react";
import ThemeProvider from "@/components/layout/ToggleTheme/theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <>{children}</>
      </ThemeProvider>
    </>
  );
}
