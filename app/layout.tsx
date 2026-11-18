import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Nómina | El Mirador del Cielo", description: "Control de nómina de Cafetería El Mirador del Cielo" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body>{children}</body></html>; }
