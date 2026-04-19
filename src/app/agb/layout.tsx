import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function AgbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
