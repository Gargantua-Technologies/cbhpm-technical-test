import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Conferência de precificação",
  description: "Desafio técnico",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
