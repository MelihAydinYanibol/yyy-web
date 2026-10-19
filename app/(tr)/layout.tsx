import type { Viewport } from "next";
import { buildMetadata, RootHtml } from "../components/RootHtml";
import "../globals.css";

export const metadata = buildMetadata("tr");

export const viewport: Viewport = {
  themeColor: "#07070c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootHtml locale="tr">{children}</RootHtml>;
}
